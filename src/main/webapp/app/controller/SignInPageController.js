Ext.define('sportwise.controller.SignInPageController', {
    extend: 'Ext.app.Controller',
    requires: ['Ext.data.Model', 'Ext.data.Store','sportwise.store.sportwiseusers'],
    config: {
        control: {
            SignInPage: {
            	signInSubmitCommand: 'onSignInSubmitCommand'
            }
        },

        refs: {
        	SignInPage: 'signinpage',
        	UserHomeViewPage: 'userhomeviewpage'
        }
    },
    
    slideLeftTransition: {type: 'slide', direction: 'left'},
    slideRightTransition: {type: 'slide', direction: 'right'},

    //sessionToken = null,
    
    onSignInSubmitCommand: function (view, name){
    	console.log('Name: '+ name);
    	
 
    	
    	var me = this,
    		SignInPage = me.getSignInPage();
    	
    	if (name.length == 0){
    		
    		SignInPage.showSignInFailedMessage('Please enter your name to sign in');
    		return;
    	}
    	
    	me.signInSuccess(name);
    	/*
    	SignInPage.setMasked({
    		xtype: 'loadmask',
    		message: 'Signing In...'
    	}),
    	
    	Ext.Ajax.request({
    		url:
    		method: 'post',
    		params: {
    			username: name,
    		},
    		success: function(response){
    			
    			var signinResponse = Ext.JSON.decode(response.responseText);
    			if (signinResponse.success == 'true'){
    				me.sessionToken = signinResponse.sessionToken;
    				me.signInSuccess();
    			}
    			else{
    				me.signInFailure(signinResponse.message);
    			}
    			
    		},
    		failure: function (response){
    			//me.sessionToken = null;
    			me.signInFailure('Sign in failed. Please try again later.');
    		}
    		
    	});*/
    	
    	},
    	
    	signInSuccess: function(name){
    		console.log('Signed in.');
    		
        	var user = Ext.create('sportwise.model.sportwiseuser');
        	var userstore = new sportwise.store.sportwiseusers;
        	user.set('SignInActive',true);
        	user.set('Name',name);
        	//Need to set email too. Email to be obtained from server since user will not enter email during sign-in
        	userstore.add(user);
            userstore.sync();
            
    		
    		var SignInPage = this.getSignInPage();
    		var UserHomeView = this.getUserHomeViewPage();
    		SignInPage.setMasked(false);   		
    		Ext.Viewport.animateActiveItem(UserHomeView, this.slideRightTransition);
    	},
    	
    	signInFailure: function (message){
    		var SignInPage = this.getSignInPage();
    		SignInPage.showSignInFailedMessage(message);
    		SignInPage.setMasked(false);
    	}
//    }
});