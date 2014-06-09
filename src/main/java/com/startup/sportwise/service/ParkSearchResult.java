/**
 * 
 */
package com.startup.sportwise.service;

/**
 * @author dmurthy
 *
 */
public class ParkSearchResult {

	private String parkName;
	private float latitude;
	private float longitude;
	
	public ParkSearchResult() {
		
	}
	public String getParkName() {
		return parkName;
	}
	public void setParkName(String parkName) {
		this.parkName = parkName;
	}
	public float getLatitude() {
		return latitude;
	}
	public void setLatitude(float latitude) {
		this.latitude = latitude;
	}
	public float getLongitude() {
		return longitude;
	}
	public void setLongitude(float longitude) {
		this.longitude = longitude;
	}
}
