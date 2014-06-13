Ext.define( 'sportwise.view.currentlocationsearch', {
	extend : 'Ext.Container',
	xtype: 'currlocationsearch',
	alias: 'widget.currentlocationsearch',
	requires: ['Ext.Map'],
	config:{
		layout: 'fit',
		scrollable: true,
		styleHtmlContent: true,
		style: 'text-align: center; background-color:white;',
		
		items: [
					{
				          xtype:'toolbar',
				          docked: 'top',
				          title: 'Current location',
						       	items: [{
				    	        	xtype: "button",
				    	        	text: 'Main Menu',
					    	        ui: 'back',
					    	        itemId: "currlocationsearchbackbutton",
					    	        handler: function(){
					    	        Ext.Viewport.animateActiveItem('userhomeviewpage',
					    	        			{type: 'slide', direction: 'left'}); 
					    	        }
						       	}]
						
					},
					
					{
					    xtype:'map',
					    useCurrentLocation: true
					}
		        
		        ]
	}


	
});



/*

var geo = Ext.create('Ext.util.Geolocation', {
    autoUpdate: false,
    listeners: {
        locationupdate: function(geo) {
            alert('New latitude: ' + geo.getLatitude());
        },
        locationerror: function(geo, bTimeout, bPermissionDenied, bLocationUnavailable, message) {
            if(bTimeout){
                alert('Timeout occurred.');
            } else {
                alert('Error occurred.');
            }
        }
    }
});
geo.updateLocation();*/