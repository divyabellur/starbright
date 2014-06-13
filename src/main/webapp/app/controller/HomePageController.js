Ext.define('sportwise.controller.HomePageController', {
    extend: 'Ext.app.Controller',

    config: {
        control: {
        	registerButton: {
            tap: 'doRegister'
            },
            signinButton: {
                tap: 'doSignIn'
            },
        },

        refs: {
        	registerButton: '#registerButton',
        	signinButton: '#signinButton',
        	SignInPage: 'signinpage',
        	RegisterPage: 'registerpage',
        	MainPage:	  'mainpage',
        	UserHomeViewPage: 'userhomeviewpage'
        }
    },
    
    slideLeftTransition: {type: 'slide', direction: 'left'},
    slideRightTransition: {type: 'slide', direction: 'right'},

    doRegister: function () {
        console.log("Registration");
        var RegisterPage = this.getRegisterPage();
        Ext.Viewport.animateActiveItem(RegisterPage, this.slideRightTransition);
        //this.fireEvent("", this);
    },

    doSignIn: function () {
		console.log("SignIn");
		var SignInPage = this.getSignInPage();
		Ext.Viewport.animateActiveItem(SignInPage, this.slideRightTransition);
		//this.fireEvent("", this);
    },
    
});