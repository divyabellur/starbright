Ext.define('sportwise.view.signin', {
    extend: 'Ext.form.FormPanel',
    xtype: 'signin',
    alias: 'widget.signinpage',
    requires: ['Ext.Label', 'Ext.util.DelayedTask'],
	
    config: {
	    title: "Sign in",
	    iconCls: "compose",
	    scroll: "vertical",
	    items: [
	        {
	        	xtype: 'fieldset',
	        	//title: 'Sign in',
	        	items: [{
	        		xtype: 'textfield',
	        		placeHolder:'Name',
	        		itemId:'nameTextField',
	        		name : 'nameTextField',
	        		required: true
	            }],
	        },
	        {
		       	xtype:'toolbar',
		       	docked: 'top',
		       	title: 'Sign-in',
		       	items: [{
    	        	xtype: "button",
    	        	text: 'Back',
	    	        ui: 'back',
	    	        itemId: "welcompagebackbutton",
	    	        handler: function(){
	    	        Ext.Viewport.animateActiveItem('mainpage',
	    	        			{type: 'slide', direction: 'left'}); 
	    	        }
		       	}]
		    },
		    {
		    	xtype: 'label',
		    	html: 'Sign in failed. Please enter the correct credentials.',
		    	itemId: 'signInFailedMessageLabel',
		    	hidden: true,
		    	hideAnimation: 'fadeOut',
		    	showAnimation: 'fadeIn',
		    	style: 'color:#990000;margin:5px 0px;'
		    },
		    {
	        xtype:  'button',
	        margin: 50,
	        text:   'Submit',
	        itemId: 'signInSubmitButton',
	        ui:     'confirm'
	        }
	    ],
	    
	    listeners: [{
	    	delegate: '#signInSubmitButton',
	    	event: 'tap',
	    	fn: 'onSignInSubmitButtonTap'
	    }]
	},
	
	onSignInSubmitButtonTap: function() {
    	var me = this,
    	nameField = me.down('#nameTextField'),
    	label = me.down('#signInFailedMessageLabel'),
    	name = nameField.getValue();
    	
    	label.hide();
    	
    	//Using a delayed task in order to give the hide animation above
    	// time to finish before executing the next steps
    	
    	var task = Ext.create('Ext.util.DelayedTask', function(){
    		
    		label.setHtml('');
    		me.fireEvent('signInSubmitCommand', me, name);
    		nameField.setValue('');
    	});
    	
    	task.delay(500);
	},
	
	showSignInFailedMessage: function(message){
		var label = this.down('#signInFailedMessageLabel');
		label.setHtml(message);
		label.show();
	}

   
});
