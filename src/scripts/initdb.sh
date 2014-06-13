#!/bin/bash

# Creates and/or destroys the Sportwise prod and test databases

target_user=postgres
target_password=miadmin
target_prod_db=sportwise
target_test_db=sportwise_test
target_db_flags="ENCODING = 'UTF8' LC_COLLATE = 'en_US.UTF-8' LC_CTYPE = 'en_US.UTF-8' CONNECTION LIMIT = -1"
target_user_flags="NOSUPERUSER INHERIT NOCREATEDB NOCREATEROLE NOREPLICATION"

db_hostname=127.0.0.1
dev_user=miadmin
dev_db=mobileiron

which psql91 >/dev/null 2>&1
if [ $? -eq 0 ]; then
    psql_command=psql91
else
    psql_command=psql
fi

usage()
{
    echo "Usage: initdb.sh [--drop][--recreate-test][--cleandb]"
}

run_sql()
{
    local sql=$1
    
    if [ "$BUILD_NUMBER" = "" ]; then
        # Developer build
        #   ggerard: this should be removed and changed to use the miadmin or operations
        #            postgres superuser created at developmnet setup time
        #   ggerard: the quoting evaluations will be different
        $psql_command -U $dev_user -h $db_hostname -c "$sql" $dev_db
    fi
}

terminate_backend()
{
    run_sql "SELECT pg_terminate_backend(pid) FROM pg_stat_activity WHERE datname = '$1';"
}

drop_db()
{
    run_sql "DROP DATABASE IF EXISTS $1;"
}

create_db()
{
    run_sql "CREATE DATABASE $1 WITH OWNER = $2 $target_db_flags;"
}
#Setup the schema for sportwise_test
setup_schema_for_test_db() {
	$psql_command -h $db_hostname -U $dev_user -d $target_test_db -f ~/mycode/starbright/src/main/resources/db/schema.sql;
}
#Setup the data for sportwise_test
setup_data_for_test_db() {
	$psql_command -h $db_hostname -U $dev_user -d $target_test_db -f ~/mycode/starbright/src/main/resources/db/initial-data.sql;
}
create_file_fdw_ext_server()
{
    hst=$1
    db=$2

    # If it's a Mac, don't do anything (for now!)
    if [ "$(uname -s)" = "Darwin" ]; then
        return
    fi

    if [ "$BUILD_NUMBER" = "" ]; then
        usr=$dev_user
		
    fi

    $psql_command -h $hst -U $usr -d $db -c "CREATE EXTENSION IF NOT EXISTS file_fdw;"
    $psql_command -h $hst -U $usr -d $db -c "CREATE SERVER logserver FOREIGN DATA WRAPPER file_fdw;"
}

#
# MAIN
#
drop_only=0
recreate=0
while [ "$1" != "" ]; do
	case $1 in
        --drop)
            drop_only=1
            ;;
        --recreate)
            recreate=1
            ;;
        -h|--help)
            usage
            exit 0
            ;;
        *)
            usage
            exit 1
    esac
    shift
done
   
if [ $recreate -eq 1 ]; then
    drop_db $target_test_db
    drop_db $target_prod_db
    create_db $target_prod_db $target_user
	create_db $target_test_db $target_user
    create_file_fdw_ext_server $db_hostname $target_test_db
else
	if [ $drop_only -eq 0 ]; then
	    echo "Initializing database - ignore any ERROR messages regarding non-existent role"
	else
	    echo "Dropping database - ignore any ERROR messages regarding non-existent role"
	fi
	
	terminate_backend $target_prod_db
	terminate_backend $target_test_db
	drop_db $target_prod_db
	drop_db $target_test_db
	if [ $drop_only -eq 0 ]; then
	    run_sql "CREATE ROLE $target_user LOGIN PASSWORD '$target_password' $target_user_flags;"
	    create_db $target_prod_db $target_user
	    create_db $target_test_db $target_user
	    echo "Running schema.sql for test db"
	    setup_schema_for_test_db
	    echo "Running initial-data.sql for test db"
	    setup_data_for_test_db
        create_file_fdw_ext_server $db_hostname $target_prod_db
        create_file_fdw_ext_server $db_hostname $target_test_db
	fi
fi
