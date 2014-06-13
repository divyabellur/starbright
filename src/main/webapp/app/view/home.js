
Ext.define('sportwise.view.home', {
    extend: 'Ext.Container',
    requires: ['Ext.Img'], 
    xtype: 'home',
	config: {
	    title: 'Welcome',
	    iconCls: 'home',
	    
	    layout: {
	    	type: 'vbox'
	    },
	    items: [
	    {
	    	xtype:'toolbar',
	    	docked: 'top',
	    	title: 'Sport Wise',
	    	items: [
	    	        {
	    	        	xtype: "button",
	    	        	text: 'Register',
		    	        ui: 'action',
		    	        id: "registerButton"    	        	
	    	        },
	    	        {
	    	        	xtype: 'spacer'
	    	        },
	    	        {
	    	        	xtype: "button",
	    	        	text: 'Sign-in',
		    	        ui: 'action',
		    	        id: "signinButton"
	    	        }
	    	        
	    	        ]
	    },
	    {
	    	xtype: 'image', 
	    	flex: 1,
	    	height:150,
	    	src: '/sportwise/resources/icons/SportWise.png',
	    },	    
	    {
	    	xtype: 'panel',
	    	flex: 1,
	    	margin: 5,
	    	styleHtmlContent: true,
	    	html: [ '<div id="welcome"><h1 id="font_h1"> Welcome to Sport Wise </h1></div>',
	    	        '<div id="moreinfo"> <p id="font_p"> Frustrated with wait times at public park courts? ',
	    	        'Sport Wise is here to help. Learn more by clicking on More Info below.</p></div>'
	    		  ].join("")
	    }
	    ],
	},



});	