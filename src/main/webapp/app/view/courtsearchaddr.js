Ext.define('sportwise.view.courtsearchaddr', {
    extend: 'Ext.Container',
    requires: ['Ext.field.TextArea', 'Ext.field.Number'],
    xtype: 'courtsearchaddr',
    alias: 'widget.courtsearchaddrpage',
	config: {

	    items: [
            
	            {
		         xtype: 'fieldset',
		         items:[   
				         	{
				              xtype: 'textfield',
				              label: 'City',
				              itemId:'cityTextField',
				              name : 'cityTextField'
				            }
		            	]
	            },	            
	            {
	            	xtype: 'label',
	            	margin: 20,
	            	html: 'OR'
	            },            
	            {
	            	xtype: 'fieldset',
			         items:[   
				            {
				               xtype: 'numberfield',
				               label: 'Zip Code',
				               itemId: 'zipTextField',
				               name: 'zipTextField'
				            }
		            	]
	            },
		        {
		          xtype:'toolbar',
		          docked: 'top',
		          title: 'Address',
				       	items: [{
		    	        	xtype: "button",
		    	        	text: 'Main Menu',
			    	        ui: 'back',
			    	        itemId: "courtsearchaddrbackbutton",
			    	        handler: function(){
			    	        Ext.Viewport.animateActiveItem('userhomeviewpage',
			    	        			{type: 'slide', direction: 'left'}); 
			    	        }
				       	}]
		        },		        
		        {
		          xtype: 'button',
		          text: 'Submit',
		          ui: 'confirm',
		          margin: 50,
		          itemId: 'searchaddrSubmitButton',
		          //handler: function() {
		              //this.up('contactus').submit();
		         }
		       
		        ],
	
		listeners: [{
		delegate: '#searchaddrSubmitButton',
		event: 'tap',
		fn: 'onAddrSearchSubmitButtonTap'
		}]
	
	
	
	},
	
	onAddrSearchSubmitButtonTap: function() {
    	console.log('submit tap function called');
		var me = this,
    	cityField = me.down('#cityTextField'),
    	zipField = me.down('#zipTextField'),
    	//label = me.down('#addrsearchFailedMessageLabel'),
    	city = cityField.getValue();
    	zip = zipField.getValue();
    	
    	//label.hide();
    	
    	//Using a delayed task in order to give the hide animation above
    	// time to finish before executing the next steps
    	
    	var task = Ext.create('Ext.util.DelayedTask', function(){
    		
    		//label.setHtml('');
    		me.fireEvent('addrsearchSubmitCommand', me, city, zip);
    		cityField.setValue('');
    		zipField.setValue('');
    	});
    	
    	task.delay(500);
	},
	
	showAddrSearchFailedMessage: function(message){
		var label = this.down('#addrsearchFailedMessageLabel');
		label.setHtml(message);
		label.show();
	}
	

    
});
