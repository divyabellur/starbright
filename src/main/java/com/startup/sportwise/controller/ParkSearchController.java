package com.startup.sportwise.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.startup.sportwise.domain.User;
import com.startup.sportwise.rest.WebResponse;
import com.startup.sportwise.service.AccountService;

public class ParkSearchController {
	
	@Autowired
	private AccountService accountService;

	
	@RequestMapping(value = "/parksearch", method = RequestMethod.GET)
	@ResponseBody
	public WebResponse<List<User>> searchNearbyParks(@RequestParam float latitude, @RequestParam float longitude) {
		final List<User> userList = this.accountService.getAllAccounts();
		return new WebResponse<List<User>>(userList);
	}
}
