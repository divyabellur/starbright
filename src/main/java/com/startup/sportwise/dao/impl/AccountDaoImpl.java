package com.startup.sportwise.dao.impl;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.startup.sportwise.dao.AccountDao;
import com.startup.sportwise.domain.User;

@Repository
public class AccountDaoImpl extends AbstractDaoImpl implements AccountDao {

	private static final String SQL_INSERT = String
			.format("INSERT INTO account(display_name, email) VALUES (?,?)");
	
	private static final String SQL_UPDATE = String
			.format("UPDATE account SET (display_name, email) = (?,?)");
	
	private static final String SQL_DELETE = String
			.format("DELETE from account where id = ?");
	
	private static final String SQL_SELECT_BY_DISPLAY_NAME = String
			.format("SELECT * FROM account where display_name = ?");
	
	private static final String SQL_SELECT_ALL_ACCOUNTS = String
			.format("SELECT id,display_name,email from account");

	public AccountDaoImpl() {

	}
	
	/**
     * Row mapper implementation for the application category table.
     */
    private static final class UserRowMapper implements RowMapper<User> {
        private UserRowMapper() {
        }

        @Override
        public User mapRow(final ResultSet rs, final int rowNum) throws SQLException {
            final User user = new User();
            user.setDisplayName(rs.getString("display_name"));
            user.setEmail(rs.getString("email"));
            user.setId(rs.getLong("id"));

            return user;
        }
    }
	
	@Override
	@Transactional(readOnly = false)
	public int insert(final User user) {
		return this.getJdbcTemplate().update(SQL_INSERT,
				new Object[] { user.getDisplayName(), user.getEmail() });

	}

	@Override
	public List<User> getAllUsers() {
		// TODO Auto-generated method stub
		return this.getJdbcTemplate().query(SQL_SELECT_ALL_ACCOUNTS, new ResultSetExtractor<List<User>>() {
			@Override
            public List<User> extractData(final ResultSet rs) throws SQLException, DataAccessException {
                final List<User> retVal = new ArrayList<User>();
                while (rs.next()) {    
                	final User user = new User();
                	user.setId(rs.getLong("id"));
                	user.setDisplayName(rs.getString("display_name"));
                	user.setEmail(rs.getString("email"));
                    retVal.add(user);
                }
                return retVal;
            }
		});
	}

	@Override
	@Transactional(readOnly = false)
	public int update(User user) {
		return this.getJdbcTemplate().update(SQL_UPDATE,
				new Object[] { user.getDisplayName(), user.getEmail() });
	}

	@Override
	@Transactional(readOnly = false)
	public int delete(long id) {
		return this.getJdbcTemplate().update(SQL_DELETE, id);
	}

	@Override
	public User selectUserByDisplayName(String displayName) {
		return this.getJdbcTemplate().queryForObject(SQL_SELECT_BY_DISPLAY_NAME, new Object[] {displayName}, new UserRowMapper());
	}
	
	

}
