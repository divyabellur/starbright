package com.startup.sportwise;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.social.connect.UsersConnectionRepository;
import org.springframework.social.facebook.api.Facebook;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import com.startup.sportwise.domain.User;

public class UserInterceptor extends HandlerInterceptorAdapter {
private final UsersConnectionRepository connectionRepository;
	
	private final UserCookieGenerator userCookieGenerator = new UserCookieGenerator();

	public UserInterceptor(UsersConnectionRepository connectionRepository) {
		this.connectionRepository = connectionRepository;
	}
	
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
		rememberUser(request, response);
		return true;
	}
	
	public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
		SecurityContext.remove();
	}

	// internal helpers

	private void rememberUser(HttpServletRequest request, HttpServletResponse response) {
		String userId = userCookieGenerator.readCookieValue(request);
		if (userId == null) {
			return;
		}
		if (!userNotFound(userId)) {
			userCookieGenerator.removeCookie(response);
			return;
		}
		SecurityContext.setCurrentUser(new User(userId));
	}

	private boolean userNotFound(String userId) {
		// doesn't bother checking a local user database: simply checks if the userId is connected to Facebook
		return connectionRepository.createConnectionRepository(userId).findPrimaryConnection(Facebook.class) != null;
	}

}
