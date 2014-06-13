Ext.define('sportwise.view.courtmap', {            		
         xtype: 'sheet',        
         config: {
         modal: true,
         hideOnMaskTap: true,
         floating: true,
         centred: true,
         showAnimation:{
         			type: 'popIn',
         			duration: 250,
         			//easing: 'ease-out'
         			},
         hideAnimation: {
         			type: 'popOut',
         			duration: 250,
         			//easing:'ease-out'
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
                    	html: '<font color = "white">You are being checked out.' 
                    },
                    {
                    	xtype:  'button',
            	        margin: 50,
   				        text:   'OK',
   				        itemId: 'checkoutconfirmButton',
            	        ui:     'confirm'
                    }
                ]

        },
  });