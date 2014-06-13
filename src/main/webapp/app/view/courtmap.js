var checkin;
var checkin_parkname;

Ext.define('sportwise.view.courtmap', {
extend: 'Ext.Map',
alias: 'widget.courtmappage',
xtype: 'courtmap',
itemId: 'courtmapsearch',
requires: ['Ext.data.Model', 'Ext.data.Store', 'Ext.TitleBar', 'Ext.Sheet'],
config: {
    //useCurrentLocation: true,
    /*mapOptions: {
        mapTypeId: google.maps.MapTypeId.ROADMAP
    },*/
    
    
    listeners:{
        'maprender': function(extMapComponent, googleMapComp) {
            	var googleMapComp = this.getMap();
                var previnfowindow = null;
            	if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(function(position) {
                                console.log('marking current location...');
                                var currentLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                                console.log('user coord: ' + currentLocation);
                	    		var lat = position.coords.latitude;
                	            var long = position.coords.longitude;
                	            //console.log('Lat: ' + lat);
                	            //console.log('Long: '+ long);
                	            googleMapComp.setCenter(currentLocation);
                	            
                	            var userA = Ext.create('sportwise.model.sportwiseuser');
                	            userA.set('Long',long);
                	            userA.set('Lat',lat);
                	            //console.log('UserA lat: '+ userA.get('Lat'));
                	            //console.log('UserA long: '+ userA.get('Long'));
                	            
                                var marker = new google.maps.Marker({
                                    //animation: google.maps.Animation.DROP,
                                    map: googleMapComp,
                                    position: currentLocation,
                                    icon: '/sportwise/resources/icons/blue_dot_circle.png'
                                });
                                
                                var parkstore = Ext.getStore('parklists');
                                parkstore.each(function(rec){
                                	var lat = rec.get('CourtLat');
                                	var long = rec.get('CourtLong');
                                	var timeleft = rec.get('TimeToAvailable');
                                	if (timeleft <16){
                                			var marker = new google.maps.Marker({
                                				position: new google.maps.LatLng(lat, long),
                                				map: googleMapComp,
                                				animation: google.maps.Animation.DROP,
                                				icon: '/sportwise/resources/icons/greenMarker.png'
                                			});
                                	}
                                	else if (timeleft > 15 && timeleft < 31){
                                			var marker =new google.maps.Marker({
                                				position: new google.maps.LatLng(lat, long),
                                				map: googleMapComp,
                                				animation: google.maps.Animation.DROP,
                                				icon: '/sportwise/resources/icons/orangeMarker.png'
                                			});
                                	}
                                	else {
                                			var marker =new google.maps.Marker({
                            					position: new google.maps.LatLng(lat, long),
                            					map: googleMapComp,
                            					animation: google.maps.Animation.DROP,
                            					icon: '/sportwise/resources/icons/redMarker.png'
                            				});
                                	}

                                	google.maps.event.addListener(marker, 'click', function () {                                		
                                		if(previnfowindow!== null){
                                			previnfowindow.close();
                                		}
                                		var parkname = rec.get('ParkName');
                                		checkin_parkname = parkname;
                                		var courtcount = rec.get('CourtCount');
                                		var availability = rec.get('TimeToAvailable');
                                		var infowindow = new google.maps.InfoWindow({
                                			content: parkname + ' (' + courtcount + ' courts)' +
                                			//'<div id="moreinfo"> <p id="font_p"> <input id='courtcount' type="int" />' +
                                			'</br> Earliest availability: '+ availability + 'min' + 
                                			"</br><input type='button' id='checkinButton' value='Check in' onclick='checkin()' />"
                                		});//

                                		infowindow.open(googleMapComp, marker);
                                		previnfowindow = infowindow;
     
                                	});

                                	
                                });
                               
                                
                            }, function() {
                                console.log('Could not obtain geolocation');
                            });
                    	
                }
            	
            	checkin = function(){
            		console.log('Check in button was pressed');
            		var checkinpanel = Ext.Viewport.add({ 
            			xtype: 'sheet',
            			modal: true,
            			hideOnMaskTap: true,
            			floating: true,
            			centred: true,
            			showAnimation:{
            				type: 'popIn',
            				duration: 250,
            				easing: 'ease-out'
            			},
            			hideAnimation: {
            				type: 'popOut',
            				duration: 250,
            				easing:'ease-out'
            			},
            			width: Ext.os.deviceType == 'Phone' ? 260:400,
            			height: Ext.os.deviceType == 'Phone' ? 280:400,
 
            			items: [
            			        {
            			        	xtype: 'titlebar',
            			        	docked: 'top',
            			        	id: 'checkinpopuptitle',
            			        	title: checkin_parkname
            			        	
            			        },
            			        {
            			        	xtype: 'label',
            			        	margin: 5,
                        			//styleHtmlContent: true,
                        			html: '<font color = "white">On check-in you will have 60 min. of court time. After 60 min. the courts will be shown as available for other users', 
            			        },
            			        {
            				        xtype:  'button',
            				        margin: 50,
            				        text:   'Check-in',
            				        itemId: 'checkinButton',
            				        ui:     'confirm'
            			        }],
            			//scrollable: true
            		});

            		checkinpanel.show();
            			
            		};

        }
    }

}
	

});