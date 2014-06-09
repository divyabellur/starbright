package com.startup.sportwise.dao;

import java.util.List;

import com.startup.sportwise.domain.User;

public interface AccountDao {


	int insert(User user);
	
	List<User> getAllUsers();
	
	int update(User user);
	
	int delete(long id);
	
	User selectUserByDisplayName(String displayName);
	

}
