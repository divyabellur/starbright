package com.startup.sportwise;

import java.beans.PropertyVetoException;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.support.PropertySourcesPlaceholderConfigurer;
import org.springframework.core.env.Environment;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import com.mchange.v2.c3p0.ComboPooledDataSource;

@Configuration
@ComponentScan("com.startup.sportwise")
@EnableTransactionManagement
@PropertySource("classpath:sportwise.properties")
public class SportwiseContext {
	
	private static final String JDBCL_URL = "jdbc.url";
	private static final String DRIVER_CLASS = "jdbc.driverClassName";
	private static final String USER = "jdbc.username";
	private static final String PASSWORD = "jdbc.password";
			
	
	@Autowired
	private Environment environment;
	
	@Bean
	   public static PropertySourcesPlaceholderConfigurer propertySourcesPlaceholderConfigurer() {
	      return new PropertySourcesPlaceholderConfigurer();
	   }
	
	@Bean
    public DataSource dataSource() {
        // configure and return the necessary JDBC DataSource
		final ComboPooledDataSource ds = new ComboPooledDataSource();
        try {
        	ds.setJdbcUrl(environment.getRequiredProperty(JDBCL_URL));
        	ds.setDriverClass(environment.getRequiredProperty(DRIVER_CLASS));
        	ds.setUser(environment.getRequiredProperty(USER));
        	ds.setPassword(environment.getRequiredProperty(PASSWORD));            
        } catch (final PropertyVetoException ex) {
            throw new IllegalStateException("Failed to obtain datasource properties from the environment", ex);
        }
        return ds;
    }
	
	

    @Bean
    public PlatformTransactionManager txManager() {
        return new DataSourceTransactionManager(dataSource());
    }

}
