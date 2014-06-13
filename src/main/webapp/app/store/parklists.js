Ext.define('sportwise.store.parklists',{
	extend: 'Ext.data.Store',
	requires: ['sportwise.model.parklist'],
	itemId: 'parklists',
	config: {
		model: 'sportwise.model.parklist',
		data: [
		       { ParkName: 'Braly Park', City: 'Sunnyvale', ZipCode: '94086', CourtCount: '2', CourtLights: true, CourtLat:'37.3634828', CourtLong: '-122.0196349', TimeToAvailable: '15' },
		       { ParkName: 'Columbia Park', City: 'Sunnyvale', ZipCode: '94085', CourtCount: '2', CourtLights: true, CourtLat: '37.394483', CourtLong:'-122.0208784', TimeToAvailable: '3'},
		       { ParkName: 'Encinal Park', City: 'Sunnyvale', ZipCode: '94085', CourtCount: '2', CourtLights: true, CourtLat: '37.3916402', CourtLong:'-122.0427258', TimeToAvailable: '0'},
		       { ParkName: 'Fairwood Park', City: 'Sunnyvale', ZipCode: '94089', CourtCount: '2', CourtLights: true, CourtLat: '37.395326', CourtLong:'-121.9900632', TimeToAvailable: '32'},
		       { ParkName: 'Lakewood Park', City: 'Sunnyvale', ZipCode: '94089', CourtCount: '2', CourtLights: true, CourtLat: '37.3984916', CourtLong:'-121.9990853', TimeToAvailable: '16'},
		       { ParkName: 'Las Palmas Park', City: 'Sunnyvale', ZipCode: '94087', CourtCount: '16', CourtLights: true, CourtLat: '37.3654925', CourtLong:'-122.0389972', TimeToAvailable: '45'},
		       { ParkName: 'Orchard Gardens', City: 'Sunnyvale', ZipCode: '94089', CourtCount: '2', CourtLights: false, CourtLat: '37.3998143', CourtLong:'-122.0244543', TimeToAvailable: '80'},
		       { ParkName: 'Ortega Park', City: 'Sunnyvale', ZipCode: '94087', CourtCount: '2', CourtLights: true, CourtLat: '37.3429568', CourtLong:'-122.0247231', TimeToAvailable: '55'},
		       { ParkName: 'Ponderosa Park', City: 'Sunnyvale', ZipCode: '94085', CourtCount: '2', CourtLights: true, CourtLat: '37.3628581', CourtLong:'-122.0055637', TimeToAvailable: '2'},
		       { ParkName: 'Serra Park', City: 'Sunnyvale', ZipCode: '94087', CourtCount: '4', CourtLights: true, CourtLat: '37.3427595', CourtLong:'-122.0422818', TimeToAvailable: '30'},
		       { ParkName: 'Washington Park', City: 'Sunnyvale', ZipCode: '94086', CourtCount: '2', CourtLights: true, CourtLat: '37.3772857', CourtLong:'-122.0400617', TimeToAvailable: '21'}
		       ]
	}
});