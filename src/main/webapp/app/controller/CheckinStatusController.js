//defining global variables
var checkinstatus_parkname;
var checkinstatus_timerstartvalue;
var checkinstatus_time;
var checkinstatus_timer_enable;
var checkinstatus_timer;

Ext.define('sportwise.controller.CheckinStatusController', {
    extend: 'Ext.app.Controller',
    requires: [],
    config: {
        control: {
        	checkOutButton: {
            	tap: 'doCheckOut'
            }
        },

        refs: {
         	checkinStatusPage: 'checkinstatuspage',
         	parkNameLabel: 'checkinstatuspage #parknamelabel',
         	checkinTimerLabel: 'checkinstatuspage #checkintimerlabel',
         	checkOutButton	: 'checkinstatuspage #checkoutbutton'
         		
        }
    },
    
    
    init: function(){
    	/*add code to retrieve park name and timer value from server*/
    	checkinstatus_parkname = 'Ponderosa Park';
    	checkinstatus_timerstartvalue = 60;
    	console.log(checkinstatus_parkname);
    	checkinstatus_timer_enable = true;
    	
    },
    
    launch: function(){
		var currmin = checkinstatus_timerstartvalue;
		var currsec = 0;
		var prevsec = 0;
    	var namelabel = this.getParkNameLabel();
    	
    	var timelabel =this.getCheckinTimerLabel();
    	namelabel.setHtml('Park Name: ' + checkinstatus_parkname);
    	
		if (checkinstatus_timer_enable = true){
    	var checkinstatus_timer = setInterval(function(){
			
			var me = this;
			
			prevsec = currsec;
			
			if (currsec < 1 && currmin > 0) {
				currmin--;
				currsec = 60;
			}
			if (currmin == 0 && currsec == 1) {
			    clearInterval(checkinstatus_timer);
			}
			currsec-- ;
			
 
			
			timelabel.setHtml('Remaining Time: ' + currmin + ' min : ' + currsec + ' sec');
			
			
			//console.log (checkinstatus_time);
			
			
		},1000);
		}
		else{
			clearInterval(checkinstatus_timer);
			namelabel.setHtml('Park Name: Not checked-in currently');
    		timelabel.setHtml('Remaining Time: Not checked-in currently');
		}
		

    	//console.log('labeldisplay');
    	
    },
    
    
    doCheckOut: function(){

    		console.log('Check out button was pressed');
    		var checkoutpanel = Ext.Viewport.add({ 
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
    			        	title: checkinstatus_parkname
    			        	
    			        },
    			        {
    			        	xtype: 'label',
    			        	margin: 5,
                			//styleHtmlContent: true,
                			html: '<font color = "white">You have successfully checked out. Please click anywhere outside the pop-up to dismiss window.', 
    			        },
    			        /*{
    				        xtype:  'button',
    				        margin: 50,
    				        text:   'Check-in',
    				        itemId: 'checkinButton',
    				        ui:     'confirm'
    			        }*/],
    			//scrollable: true
    		});
    		
    		checkinstatus_timer_enable = false;
    		clearInterval(checkinstatus_timer);
    		var namelabel = this.getParkNameLabel();
    		var timelabel =this.getCheckinTimerLabel();
    		namelabel.setHtml('Park Name: Not checked-in currently');
    		timelabel.setHtml('Remaining Time: Not checked-in currently');
    		checkoutpanel.show();
    }

});