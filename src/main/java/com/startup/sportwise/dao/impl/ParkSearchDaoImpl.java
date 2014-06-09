/**
 * 
 */
package com.startup.sportwise.dao.impl;

import java.util.List;

import com.startup.sportwise.dao.ParkSearchDao;
import com.startup.sportwise.service.ParkSearchResult;

/**
 * @author dmurthy
 *
 */
public class ParkSearchDaoImpl extends AbstractDaoImpl implements ParkSearchDao {
	
	private static String SQL_SEARCH = String.format("SELECT  name,+"
			+ " (? * acos( cos( radians(42.290763) ) * cos( radians( locations.lat ) ) + "
			+ " cos( radians(locations.lng) - radians(-71.35368)) + sin(radians(42.290763)) "
			+ " * sin( radians(locations.lat)))) AS distance FROM locations "
			+ " WHERE active = 1 HAVING distance < 10 ORDER BY distance)");

	/* (non-Javadoc)
	 * @see com.sportwise.dao.ParkSearchDao#searchNearbyParks(float, float)
	 */
	@Override
	public List<ParkSearchResult> searchNearbyParks(float latitide,
			float longitude) {
		// TODO Auto-generated method stub
		return null;
	}

}
