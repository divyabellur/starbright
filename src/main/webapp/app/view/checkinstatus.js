Ext.define('sportwise.view.checkinstatus', {
    extend: 'Ext.Container',
    xtype: 'checkinstatus',
    alias: 'widget.checkinstatuspage',
	config: {
	    title: "Status",
	    iconCls: "time",
	    scroll: "vertical",
	    	
	    	items:[
			       	{
			       	xtype:'toolbar',
			       	docked: 'top',
			       	title: 'Courts checked into'
	    	        },
			       	
	    	        {
	    	        	xtype: 'label',
	    	        	itemId: 'parknamelabel',
	    	        	margin: 20
	    	        },
			       	{
			       		xtype: 'label',
			       		margin: 20,
			       		itemId: 'checkintimerlabel'
			       	},
			       	{
			       		xtype: 'button',
				        margin: 50,
				        text:   'Check Out',
				        itemId: 'checkoutbutton',
				        ui:     'decline'
			       		
			       	},
	    	       ]
	
	
	},

});