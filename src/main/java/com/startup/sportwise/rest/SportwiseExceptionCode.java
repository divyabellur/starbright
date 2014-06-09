/**
 * 
 */
package com.startup.sportwise.rest;

/**
 * @author dmurthy
 *
 */
public enum SportwiseExceptionCode {
	HTTP_INTERNAL_SERVER_ERROR("SPORTWISE_INTERNAL_SERVER-101", "An unexpected internal server error.");
	
	private final String code;
	private final String message;
	
	private SportwiseExceptionCode(final String code, final String message) {
		this.code = code;
		this.message = message;
	}
		
	public String getCode() {
		return code;
	}
	
	public String getMessage() {
		return message;
	}
	
}
