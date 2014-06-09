package com.startup.sportwise.dao.impl;

import javax.annotation.PostConstruct;
import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcDaoSupport;

public abstract class AbstractDaoImpl {

	@Autowired
    private DataSource dataSource;

    private NamedParameterJdbcDaoSupport namedParameterJdbcDaoSupport = new NamedParameterJdbcDaoSupport();

    /**
     * After bean injection, set the data source to initialize the JDBC template.
     */
    @PostConstruct
    protected final void postConstruct() {
        this.namedParameterJdbcDaoSupport.setDataSource(this.dataSource);
    }

    protected final JdbcTemplate getJdbcTemplate() {
        return this.namedParameterJdbcDaoSupport.getJdbcTemplate();
    }

}
