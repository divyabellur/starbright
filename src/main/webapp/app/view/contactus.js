Ext.define('sportwise.view.contactus', {
    extend: 'Ext.form.FormPanel',
    requires: ['Ext.field.TextArea'],
    xtype: 'contactus',
	config: {
	    title: "Conctact",
	    iconCls: "compose",
	    scroll: "vertical",
		url: "dummyurl.html",
	    items: [
		{
		                            xtype: 'fieldset',
		                            //title: 'Contact Us',
		                            items: [
		                                {
		                                    xtype: 'textfield',
		                                    label: 'Name'
		                                },
		                                {
		                                    xtype: 'emailfield',
		                                    label: 'Email'
		                                },
		                                {
		                                    xtype: 'textareafield',
		                                    label: 'Message'
		                                }
		                            ]
		                        },
		                        {
		                        	xtype:'toolbar',
		                        	docked: 'top',
		                        	title: 'Feedback appreciated'
		                        },
		                        {
		                            xtype: 'button',
		                            text: 'Send',
		                            ui: 'confirm',
		                	        margin: 50,
		                	        itemId: 'contactusSendButton',
    								handler: function() {
		                                this.up('contactus').submit();
		                            }
		                        }
	    ]
	}
    
});

	

