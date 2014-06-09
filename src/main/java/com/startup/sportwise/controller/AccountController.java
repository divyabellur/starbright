package com.startup.sportwise.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.startup.sportwise.domain.User;
import com.startup.sportwise.rest.WebResponse;
import com.startup.sportwise.service.AccountService;

@Controller
public class AccountController {

	private static final Logger LOG = LoggerFactory.getLogger(AccountController.class);

	@Autowired
	private AccountService accountService;
	/**
	 * Test api. Adds test user to the system.
	 */
	@RequestMapping(value = "/sample/person", method = RequestMethod.GET)
	@ResponseBody
	public User getPersonDetails() {
		LOG.info("Welcome home! the client locale");

		User user = new User("Siddharth Bellur", "siddharth.bellur@gmail.com");
		LOG.debug("Record inserted...");
		this.accountService.addAccount(user);

		return user;
	}

	@RequestMapping(value = "/account", method = RequestMethod.POST)
	@ResponseBody
	public WebResponse<Boolean> createAccount(@RequestParam("displayName") String displayName, @RequestParam("email") String email) {

		User newUser = new User(displayName, email);
		final int count = this.accountService.addAccount(newUser);
		return (count == 1)? new WebResponse<Boolean>(true) : new WebResponse<Boolean>(false);
	}
	
	@RequestMapping(value = "/account/all", method = RequestMethod.GET)
	@ResponseBody
	public WebResponse<List<User>> getAllAccounts() {
		final List<User> userList = this.accountService.getAllAccounts();
		return new WebResponse<List<User>>(userList);
	}

}
