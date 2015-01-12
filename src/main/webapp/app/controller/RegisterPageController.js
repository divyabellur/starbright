Ext.define('sportwise.controller.RegisterPageController', {
    extend: 'Ext.app.Controller',
    requires: ['Ext.data.Model', 'Ext.data.Store','sportwise.store.sportwiseusers'],
    
    config: {
        control: {
            RegisterPage: {
            	registerSubmitCommand: 'onRegisterSubmitCommand'
            }
        },

        refs: {
        	RegisterPage: 'registerpage',
        	UserHomeViewPage: 'userhomeviewpage'
        }
    },
    
    slideLeftTransition: {type: 'slide', direction: 'left'},
    slideRightTransition: {type: 'slide', direction: 'right'},

    //sessionToken = null,
    
    onRegisterSubmitCommand: function (view, name, email){
    	console.log('Name: '+ name);
    	
    	var me = this,
    		RegisterPage = me.getRegisterPage();
    	
    	if (name.length == 0 || email.length == 0){
    		
    		RegisterPage.showRegisterFailedMessage('Please enter your name and email to register');
    		return;
    	}
    	
    	me.registerSuccess(name, email);
    	RegisterPage.setMasked({
    		xtype: 'loadmask',
    		message: 'Registering...'
    	}),
    	
    	Ext.Ajax.request({
    		url:'/sportwise/account',
    		method: 'post',
    		params: {
    			userName: name,
    			userEmail: email, 
    		},
    		success: function(response){
    			
    			var registerResponse = Ext.JSON.decode(response.responseText);
    			if (registerResponse.success == 'true'){
    				me.sessionToken = registerResponse.sessionToken;
    				me.registerSuccess();
    			}
    			else{
    				me.registerFailure(registerResponse.message);
    			}
    			
    		},
    		failure: function (response){
    			//me.sessionToken = null;
    			me.registerFailure('Registration failed. Please try again later.');
    		}
    		
    	});
    	
    	},
    	
    	registerSuccess: function(name, email){
    		console.log('Signed in.');
    		
        	var user = Ext.create('sportwise.model.sportwiseuser');
        	var userstore = new sportwise.store.sportwiseusers;
        	user.set('SignInActive',true);
        	user.set('Name',name);
        	user.set('Email', email);
        	userstore.add(user);
            userstore.sync();
    		
    		var RegisterPage = this.getRegisterPage();
    		var UserHomeView = this.getUserHomeViewPage();
    		RegisterPage.setMasked(false);   		
    		Ext.Viewport.animateActiveItem(UserHomeView, this.slideRightTransition);
    	},
    	
    	registerFailure: function (message){
    		var RegisterPage = this.getRegisterPage();
    		RegisterPage.showRegisterFailedMessage(message);
    		RegisterPage.setMasked(false);
    	}
//    }
});