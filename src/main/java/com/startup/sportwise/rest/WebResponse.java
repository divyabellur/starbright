package com.startup.sportwise.rest;

public class WebResponse<T extends Object> {
	
	
	private T result;
	private Error error;
	
	public WebResponse() {
		
	}
	
	public WebResponse(final T result) {
		this.result = result;
		
	}
	public WebResponse(final Error error) {
		this.error = error;
	}
	
	public T getResult() {
		return result;
	}
	public void setResult(T result) {
		this.result = result;
	}
	
	
	public Error getError() {
		return error;
	}

	public void setError(Error error) {
		this.error = error;
	}


	public static class Error {
		private final String code;
		private final String message;
		
		
		public Error(final String code, final String message) {
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
	
	
	
	
	

}
