Ext.define('sportwise.view.parksearchresults', {
	extend: 'Ext.Container',
    requires: ['Ext.dataview.List', 'Ext.data.Store', 'sportwise.store.parklists'],
    xtype: 'parksearchresults',
    alias: 'widget.parksearchresultspage', 
	
    init: function() {
        //Ext.create('sportwise.store.parklists');
        Ext.getStore('parklists').load();
        console.log('creating parklists store');
    },
    
    config:{
    	layout: {
    		type: 'fit'
    	},
    	
    	items:[
    	       {
    	    	   xtype: 'toolbar',
    	    	   title: 'Search results page',
    	    	   docked: 'top',
    	    	   	items:[
    	    	   	       {
   		    	        	xtype: "button",
		    	        	text: 'Main Menu',
			    	        ui: 'back',
			    	        //itemId: "courtsearchaddrbackbutton",
			    	        handler: function(){
			    	        Ext.Viewport.animateActiveItem('userhomeviewpage',
			    	        			{type: 'slide', direction: 'left'}); 
    	    	   	       			}
    	    	   	       }
    	    	   	       ]
    	       },
    	       
    	       {
    	    	   	xtype: 'container',
   	    	   		layout: {
    	    	   			type: 'fit'
    	    	   		},
    	    	   	items: [
    	    	    	   	{
    	    	    	   		xtype: 'list',
    	    	    	   		layout: 'fit',
    	    	    	   		flex: 1,
    	    	    	   		onItemDisclosure: true,
    	    	    	   		store: 'parklists',
    	    	    	   		itemTpl: '<div class="list-item-title">{id}</div>',
    	   	        			//height: '100%',
    	    	    	   	}
    	    	   	        ]
    	    	   
		
    	       }

    	       ]
    },
    
});