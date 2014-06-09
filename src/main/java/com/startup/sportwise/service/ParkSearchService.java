/**
 * 
 */
package com.startup.sportwise.service;

import java.util.List;

/**
 * @author dmurthy
 *
 */
public interface ParkSearchService {
	
	List<ParkSearchResult> searchNearbyParks(float latitude, float longitude);

}
