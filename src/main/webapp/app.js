/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

// DO NOT DELETE - this directive is required for Sencha Cmd packages to work.
//@require @packageOverrides

//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src'
});
//</debug>

Ext.application({
    name: 'sportwise',

    //requires: [
    //    'Ext.MessageBox'
    //],
    
    views: ['Main', 'home', 'moreinfo', 'signin', 'register', 'userhomeview', 'courtsearch', 'checkinstatus', 'contactus', 
            'userprofile', 'courtmap'],
    
    controllers: ['HomePageController', 'SignInPageController', 'RegisterPageController', 'CheckinStatusController', 'CourtSearchController',
                  'UserProfileController'],
    
    models: ['parklist', 'searchcategory','sportwiseuser'],
    
    stores: ['parklists', 'searchcategories','sportwiseusers'],
    
    appFolder: 'app',
    
    icon: {
        '57': 'resources/icons/SportWiseIcon.png',
        '72': 'resources/icons/SportWiseIconIpad.png',
        '114': 'resources/icons/SportWiseIcon@2x.png',
        '144': 'resources/icons/SportWiseIconIpad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x320': 'resources/startup/320x320.jpg',
        '640x640': 'resources/startup/640x640.png',
        '768x768': 'resources/startup/768x768.png',
        '748x748': 'resources/startup/748x748.png',
        '1536x1536': 'resources/startup/1536x1536.png',
        '1496x1496': 'resources/startup/1496x1496.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();
        console.log ('Application is loading');
        Ext.Viewport.add(Ext.create('sportwise.view.Main'));
        Ext.Viewport.add(Ext.create('sportwise.view.register'));
        Ext.Viewport.add(Ext.create('sportwise.view.signin'));
        
//        var userinfo = Ext.getStore('sportwiseusers');
//        userinfo.load();
//        if (userinfo.getCount() > 0) {
//        	var totalCount = userinfo.getCount();
//        	var aRecord = userinfo.getAt(totalCount - 1);
//        	 //console.log('sign in active: '+ aRecord.get('SignInActive'));
//             var data =  aRecord.get('SignInActive');
//
//             if (data == true)
//             	{
//             		console.log('user already signed in');
//             	}
//             else{
//             	console.log ('user not signed in');
//                 Ext.Viewport.add(Ext.create('sportwise.view.Main'));
//                 Ext.Viewport.add(Ext.create('sportwise.view.register'));
//                 Ext.Viewport.add(Ext.create('sportwise.view.signin'));
//             }
//        }  else {        	
//        	console.log('localStorage data not found');
//            Ext.Viewport.add(Ext.create('sportwise.view.Main'));
//            Ext.Viewport.add(Ext.create('sportwise.view.register'));
//            Ext.Viewport.add(Ext.create('sportwise.view.signin'));
//        }
//        
//        
// 		Ext.Viewport.add(Ext.create('sportwise.view.userhomeview'));
//        Ext.Viewport.add(Ext.create('sportwise.view.courtsearch'));
//        Ext.Viewport.add(Ext.create('sportwise.view.checkinstatus'));
//        Ext.Viewport.add(Ext.create('sportwise.view.contactus'));
//        Ext.Viewport.add(Ext.create('sportwise.view.userprofile'));
//        Ext.Viewport.add(Ext.create('sportwise.view.courtmap'));
//       

        // Initialize views


//        Ext.Viewport.add(Ext.create('sportwise.view.courtsearchaddr'));
//        Ext.Viewport.add(Ext.create('sportwise.view.courtsearchname'));
//        Ext.Viewport.add(Ext.create('sportwise.view.parksearchresults'));
//        Ext.Viewport.add(Ext.create('sportwise.view.currentlocationsearch'));
        //Ext.Viewport.add(Ext.create('sportwise.view.courtmap'));
        
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
