Ext.define('sportwise.view.register', {
    extend: 'Ext.form.FormPanel',
    xtype: 'register',
    alias: 'widget.registerpage',
    requires : ['Ext.field.Text', 'Ext.form.FieldSet', 'Ext.field.Email'],
	config: {
	    title: "Join",
	    iconCls: "team",
	    scroll: "vertical",
	    items: [
	        {
	        xtype: 'fieldset',
	        //title: 'Register',
	        items: [{
	            xtype: 'textfield',
        		placeHolder:'Name',
        		itemId:'nameTextField',
        		name : 'nameTextField',
        		required: true
	            },
	            {
	            xtype: 'emailfield',
	            placeHolder: 'Email',
	        	itemId:'emailTextField',
	        	name : 'emailTextField',
	        	required: true
	            
	            }],
	        },
	        {
		       	xtype:'toolbar',
		       	docked: 'top',
		       	title: 'Registration',
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
		    	html: 'Name or email already in use. Please enter another name or email.',
		    	itemId: 'registerFailedMessageLabel',
		    	hidden: true,
		    	hideAnimation: 'fadeOut',
		    	showAnimation: 'fadeIn',
		    	style: 'color:#990000;margin:5px 0px;'
		    },
	        {
	        	xtype:  'button',
	        	margin: 50,
	        	text:   'Submit',
	        	itemId: 'registerSubmitButton',
	        	ui:     'confirm'
	        }
	    ],
	    
	    listeners: [{
	    	delegate: '#registerSubmitButton',
	    	event: 'tap',
	    	fn: 'onRegisterSubmitButtonTap'
	    }]
	},
	
	onRegisterSubmitButtonTap: function() {
    	var me = this,
    	nameField = me.down('#nameTextField'),
    	emailField = me.down('#emailTextField'),
    	label = me.down('#registerFailedMessageLabel'),
    	name = nameField.getValue();
    	email = emailField.getValue();
    	
    	label.hide();
    	
    	//Using a delayed task in order to give the hide animation above
    	// time to finish before executing the next steps
    	
    	var task = Ext.create('Ext.util.DelayedTask', function(){
    		
    		label.setHtml('');
    		me.fireEvent('registerSubmitCommand', me, name, email);
    		nameField.setValue('');
    		emailField.setValue('');
    	});
    	
    	task.delay(500);
	},
	
	showRegisterFailedMessage: function(message){
		var label = this.down('#registerFailedMessageLabel');
		label.setHtml(message);
		label.show();
	}
	
    
});	