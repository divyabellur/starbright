Ext.define('sportwise.view.Main', {
    extend: 'Ext.TabPanel',
    xtype: 'main',
    alias: 'widget.mainpage',
    config: {
        tabBarPosition: 'bottom',

        items: [
			{ xtype: 'home'},
			{ xtype: 'moreinfo'}
   
        ]
    },
	
//	initialize: function(){
//			var userprofileview = Ext.getCmp('userprofile');
//   			userprofileview.destroy();
//	}
});
