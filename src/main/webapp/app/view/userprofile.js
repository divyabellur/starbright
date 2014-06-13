Ext.define('sportwise.view.userprofile', {
    extend: 'Ext.Container',
    requires: ['Ext.field.TextArea', 'Ext.Img'],
    xtype: 'userprofile',
    widget: 'widget.userprofilepage',
	config: {
		iconCls: 'user',
		title: 'Profile',
			
	    layout: {
	    	type: 'vbox',
	    },

	    items: [
		        	{
		            	xtype: 'image',
		            	flex: 1,
		            	margin: 10,
		            	height: 40,
		            	src: '/sportwise/resources/icons/profilephoto.png',
		            },
		            {
		            	xtype: 'panel',
		            	itemId: 'userdetailspanel',
		    	    	flex: 3,
		    	    	margin: 5,
		    	    	items: [
		    	    	        {
		    	    	        	xtype: 'fieldset',
		    	    	        	items: [
			   	    	    	        	{
			   	    	    	        		xtype: 'textfield',
			   	    	    	        		label: 'Name',
			   	    	    	        		itemId: 'namefield'
			   	    	    	        		
			   	    	    	        	},
			   	    	    	        	{
			   	    	    	        		xtype: 'textfield',
			   	    	    	        		label: 'Email',
			   	    	    	        		itemId:'emailfield'
			   	    	    	        	}
		    	    	        	        ]
		    	    	        }
		    	    	       ]
		            },
	
			        {
			          xtype:'toolbar',
			          docked: 'top',
			          title: 'Profile info',
					       	items: [
					       	        {
					       	        	xtype: 'spacer'
					       	        },
					       	        {
					       	        	xtype: "button",
					       	        	text: 'Sign out',
					       	        	ui: 'delete',
					       	        	itemId: "Sign Out",
					       	        	//Need to add code to actually sign out of app
					       	        	handler: function(){
					       	        			console.log('user signing out');
					       	        			var userinfo = Ext.getStore('sportwiseusers');
					       	        			console.log('record details: ' + userinfo.getAt(userinfo.getCount()));
					       	        			console.log('record count (before signout): ' + userinfo.getCount());
					       	        			var i;
					       	        			for (i=0; i<userinfo.getCount(); i++){
					       	        				var record = userinfo.getAt(i);
					       	        				userinfo.remove(record);
					       	        			}
					       	        			userinfo.sync();
					       	        			
					       	        			console.log('record count (after signout): ' + userinfo.getCount());
					       	        			Ext.Viewport.add(Ext.create('sportwise.view.Main'));
					       	        			Ext.Viewport.add(Ext.create('sportwise.view.register'));
					       	        			Ext.Viewport.add(Ext.create('sportwise.view.signin'));
					       	        			//Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
					       	        	        Ext.Viewport.setActiveItem('main');
					       	        }
					       	}]
			        }	       
			  ]
	}
    
});