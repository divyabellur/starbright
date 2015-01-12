package com.startup.sportwise;

import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.social.UserIdSource;
import org.springframework.social.config.annotation.ConnectionFactoryConfigurer;
import org.springframework.social.config.annotation.EnableSocial;
import org.springframework.social.config.annotation.SocialConfigurer;
import org.springframework.social.connect.ConnectionFactoryLocator;
import org.springframework.social.connect.UsersConnectionRepository;
import org.springframework.social.facebook.connect.FacebookConnectionFactory;

/*
 * Sportwise Configuration for Facebook. 
 * @author dmurthy
 *
 */
@Configuration
@EnableSocial
public class SportwiseSocialConfig implements SocialConfigurer {

	@Override
	public void addConnectionFactories(ConnectionFactoryConfigurer cfConfig,
			Environment env) {
		cfConfig.addConnectionFactory(new FacebookConnectionFactory(env.getProperty("facebook.appKey"), env.getProperty("facebook.appSecret")));
		
	}

	@Override
	public UserIdSource getUserIdSource() {
		return new UserIdSource() {
			@Override
			public String getUserId() {
				return String.valueOf(SecurityContext.getCurrentUser().getId());
			}
		};
	}

	@Override
	public UsersConnectionRepository getUsersConnectionRepository(
			ConnectionFactoryLocator arg0) {
		// TODO Auto-generated method stub
		return null;
	}
	

}
