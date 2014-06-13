Ext.define('sportwise.view.courtsearch', {
    extend: 'Ext.Container',
    requires: ['Ext.dataview.List', 'Ext.data.Store', 'sportwise.store.searchcategories', 'Ext.SegmentedButton','Ext.Map'],
    alias: 'widget.courtsearchpage',
    xtype: 'courtsearch',
    
	config: {
	    title: "Search",
	    iconCls: "search",
	    scroll: "vertical",
	    layout: {
	    	type: 'fit'
	    }, 
	    	
	    	items: [
	    	        	{
	    	        		xtype: 'toolbar',
	    	        		itemId: 'courtsearchtoolbar',
	    	        		docked: 'top',
	    	        		title: 'Court Availability',
	    	        		items: [
	    	        		        /*{
	    	        		        	xtype: 'segmentedbutton',
	    	        		        	//id: 'segBtn',
	    	        		        	centered: 'true',
	    	        		        	items:[
	    	        		        	       {
	    	        		        	    	   text: 'GPS',
	    	        		        	    	   pressed: 'true',
	    	        		        	    	   index: 1,
	    	        		        	    	   width: '75px',
	    	        		        	    	   hidden: true
	    	        		        	       },
	    	        		        	       {
	    	        		        	    	   text: 'Address',
	    	        		        	    	   index: 2,
	    	        		        	    	   width: '75px',
	    	        		        	    	   hidden: true
	    	        		        	       },
	    	        		        	       {
	    	        		        	    	   text: 'Park',
	    	        		        	    	   index: 3,
	    	        		        	    	   width: '75px',
	    	        		        	    	   hidden: true
	    	        		        	       },
	    	        		        	       {
	    	        		        	    	   text: 'Favorite',
	    	        		        	    	   index: 4,
	    	        		        	    	   width: '75px',
	    	        		        	    	   hidden: true
	    	        		        	       },
  		        	       
	    	        		        	       ],
	    	        		        	listeners: {
	    	        			        toggle: function (container, button, pressed) {
	    	        			            console.log('toggle', button.getText() + ' was pressed.');
	    	        			            var searchcategory = Ext.create('searchcategorycards');
	    	        		        		if(button.getText() == 'GPS'){
	    	        		        			searchcategory.setActiveItem('map');
	    	        		        		}
	    	        		        		if (button.getText() == 'Address'){
	    	        		        			searchcategory.setActiveItem('courtsearchaddr');
	    	        		        		}
	    	        		        			
	    	        		        	}
	    	        		        	}
	    	        		        },*/

	    	        		        {
	    	        		        	xtype: 'spacer'
	    	        		        },
	    	        		        {
	    	        		        	xtype: 'button',
	    	        		        	itemId: 'mapRefreshButton',
	    	        		        	iconCls: "refresh",
	    	        		        }
	    	        		        ]
	    	        	}, 
	    	        	
	    	        	{
	    	        		xtype: 'courtmap',
	    	        		/*itemId: 'searchcategorycards',
	    	        		layout: {
	    	        			type: 'card'
	    	        		},
	    	        		items:
	    	        			[
	    	        			 {
	    	    					    xtype:'courtmap'
	    	        			 }
	    	        			 ]*/
	    	        	}
	    	        			 

	    	        ]
 	    
	},
	
 
});






/*listeners: [{
	itemtap : function (index) {
		console.log('Segmented button was tapped');
		console.log(index);
		if (index == 1){
			Ext.Viewport.setActiveItem('map');
		}
		else if (index == 2){
			Ext.Viewport.animateActiveItem('courtsearchaddr');
		}
		else if(index == 3){
			Ext.Viewport.animateActiveItem('courtsearchname');
		}
		else if (index == 4){
			Ext.Viewport.animateActiveItem('courtsearchname');
		}
	    //this.fireEvent('editNoteCommand', this, record);
	}
	}] */
