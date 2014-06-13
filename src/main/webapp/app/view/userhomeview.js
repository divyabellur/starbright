Ext.define('sportwise.view.userhomeview', {
    extend: 'Ext.TabPanel',
    xtype: 'userhomeview',
    alias: 'widget.userhomeviewpage',
    requires: [ 'sportwise.view.courtsearch',
                'sportwise.view.checkinstatus',
                'sportwise.view.contactus',
                'sportwise.view.userprofile'],
    config: {
        
    	tabBarPosition: 'bottom',
    	

        items: [
			{ xtype: 'courtsearch'},
			{ xtype: 'checkinstatus'},
			{ xtype: 'contactus'},
			{ xtype: 'userprofile'}
   
        ]
    }
});