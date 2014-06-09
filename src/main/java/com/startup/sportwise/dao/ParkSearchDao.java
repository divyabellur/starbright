/**
 * 
 */
package com.startup.sportwise.dao;

import java.util.List;

import com.startup.sportwise.service.ParkSearchResult;

/**
 * @author dmurthy
 *
 */
public interface ParkSearchDao {
	
	List<ParkSearchResult> searchNearbyParks(float latitide, float longitude);

}
