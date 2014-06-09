package com.startup.sportwise.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.startup.sportwise.dao.AccountDao;
import com.startup.sportwise.domain.User;
import com.startup.sportwise.service.AccountService;

@Service
public class AccountServiceImpl implements AccountService {

	private AccountDao accountDao;

	@Autowired
	public AccountServiceImpl(AccountDao accountDao) {
		this.accountDao = accountDao;
	}
	
	@Override
	public int addAccount(final User user) {
		return this.accountDao.insert(user);
	}

	@Override
	public List<User> getAllAccounts() {
		return this.accountDao.getAllUsers();
	}

	

}
