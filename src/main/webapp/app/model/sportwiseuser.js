Ext.define('sportwise.model.sportwiseuser', {
	extend: 'Ext.data.Model',
	config: {
		fields: [
		         {
		        	name: 'id', type: 'string'
		         },
		         {
		        	name:'Name', type: 'string'
		         },
		         {
		        	 name: 'Email', type:'string'
		         },
		         {
		        	 name: 'SignInActive', type: 'boolean', defaultValue: false 
		         },
		         {
		        	 name: 'Long', type: 'float'
		         },
		         {
		        	 name: 'Lat', type: 'float'
		         }
		         ],
		         
		         proxy: {
		             type: 'localstorage',
		             id: 'swuser'
		         }
		         
		         //hasMany: {
		        	// model: 'courtinfo', name: 'Favorite parks'
		         //}
	}
});