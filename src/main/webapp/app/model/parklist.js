Ext.define('sportwise.model.parklist', {
	extend: 'Ext.data.Model',
	config: {
		fields: [
		         {
		        	name:'ParkName', type: 'string'
		         },
		         {
		        	 name: 'City', type: 'string'
		         },
		         {
		        	 name: 'ZipCode', type: 'int'
		         },
		         {
		        	 name: 'CourtCount', type: 'int'
		         },		         
		         {
		        	 name: 'CourtLights', type: 'boolean', defaultValue: false 
		         },
		         {
		        	 name: 'TimeToAvailable', type: 'int'
		         },
		         {
		        	 name: 'CourtLat', type: 'float'
		         },
		         {
		        	 name: 'CourtLong', type: 'float'
		         }
		         ]
		         
		        /* hasMany: {
		        	 model: 'sportwiseusers', name: 'Favorite users'
		         }*/
	}
});