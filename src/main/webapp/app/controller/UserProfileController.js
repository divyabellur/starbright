Ext.define('sportwise.controller.UserProfileController', {
    extend: 'Ext.app.Controller',
    requires: ['Ext.data.Model', 'Ext.data.Store'],
    config: {
        control: {
        	/*userProfilePage: {
            	painted: 'displayprofiledetails'
            }*/
        },

        refs: {
         	userProfilePage: 'userprofilepage',
         	nameLabel: '#namefield', //userprofilepage #userdetailspanel #userdetailsfield 
         	emailLabel: '#emailfield' //userprofilepage #userdetailspanel #userdetailsfield 
         		
        }
    },
    
    launch: function(){
	       var userinfo = Ext.getStore('sportwiseusers');
	       userinfo.load();
	       if (userinfo.getCount() > 0) {
	        	var totalCount = userinfo.getCount();
	        	var aRecord = userinfo.getAt(totalCount - 1);
	        	 
	             var name =  aRecord.get('Name');
	             var email = aRecord.get('Email');
	             
	             profilename = this.getNameLabel();
	             profileemail = this.getEmailLabel();
	             
	             profilename.setHtml(name);
	             profileemail.setHtml(email);

	             
	        }
	       else{
	             var name =  'error';
	             var email = 'error';
	       }
	       
           console.log('profilepage name: ' + name);
           console.log('profilepage email: '+ email);
	       //this.getUserprofilename().setHtml('Name: ' + name);
    }
    
    
});