Ext.define('sportwise.view.courtsearchname', {
    extend: 'Ext.Container',
    requires: ['Ext.field.TextArea', 'Ext.field.Number'],
    xtype: 'courtsearchname',
	config: {

	    items: [
            
	            {
		         xtype: 'fieldset',
		         items:[   
				         	{
				              xtype: 'textfield',
				              label: 'Park Name'
				            }
		            	]
	            },	            

		        {
		          xtype:'toolbar',
		          docked: 'top',
		          title: 'Park name',
				       	items: [{
		    	        	xtype: "button",
		    	        	text: 'Main Menu',
			    	        ui: 'back',
			    	        itemId: "courtsearchnamebackbutton",
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
		       
		        ]
	}
	

    
});
