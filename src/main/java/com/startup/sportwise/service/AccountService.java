package com.startup.sportwise.service;

import java.util.List;

import com.startup.sportwise.domain.User;

public interface AccountService {

	int addAccount(User user);
	
	/**
	 * Get all accounts in the system
	 * @return
	 */
	List<User> getAllAccounts();

}
