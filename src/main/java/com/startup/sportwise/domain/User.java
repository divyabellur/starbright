package com.startup.sportwise.domain;

public class User {

	private long id;
	private String displayName;

	private String email;

	public User() {
		
	}
	
	public User(String displayName, String email) {
		this.displayName = displayName;
		this.email = email;
	}

	public String getDisplayName() {
		return displayName;
	}

	public void setDisplayName(String displayName) {
		this.displayName = displayName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

}
