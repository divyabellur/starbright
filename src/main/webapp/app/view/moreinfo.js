Ext.define('sportwise.view.moreinfo', {
    extend: 'Ext.form.FormPanel',
    requires : ['Ext.field.Text', 'Ext.form.FieldSet', 'Ext.field.Email'],
    xtype: 'moreinfo',
	config: {
	    title: "More Info",
	    iconCls: "info",
	    scroll: "vertical",
	    items: [
		        {
			       	xtype:'toolbar',
			       	docked: 'top',
			       	title: 'How Sport Wise works'
			    },
		    	{
		    	xtype: 'panel',
		    	flex: 1,
		    	margin: 1,
		    	styleHtmlContent: true,
		    	html: [ "Sport Wise helps alleviate the frustration of long wait times at public park courts.",
		    	        " The app was primarily developed to let users know: ",
		    	        "<br> 1) which public park courts are currently available </br>",
		    	        "2) when a court at a park will be available next </br>",
		    	        "<p> <br> To achieve the above, Sport Wise relies on information provided by its users.",
		    	        "<p> Users are expected to check-in using the Sport Wise app when they start using a court at a particular park.",
		    	        " Other users who search for court availability at that park will be informed that the court is currently under use.",
		    	        "<p>Checked-in users have a time limit of 90 min. after which the courts will be shown as available to other users.",
		    	        " While a court is in use other users can see when the court will be available (based on the time left)",
		    	        " and can plan their trip accordingly."
		    	      
		    	        //'<div id="welcome"><h1 id="font_h1"> Welcome to Sport Wise </h1></div>',
		    	        //'<div id="moreinfo"> <p id="font_p"> Frustrated with wait times at public park courts? ',
		    	        //'Sport Wise is here to help. Learn more by clicking on More Info below.</p></div>'
		    		  ].join("")
		    	}
	            
	    ]
	}
	
    
});	