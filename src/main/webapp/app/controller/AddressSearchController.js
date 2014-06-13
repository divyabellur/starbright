Ext.define('sportwise.controller.AddressSearchController', {
    extend: 'Ext.app.Controller',

    config: {
        control: {
            AddressSearchPage: {
            	addrsearchSubmitCommand: 'onAddressSearchSubmitCommand'
            }
        },

        refs: {
        	AddressSearchPage: 'courtsearchaddrpage',
        	SearchResultsPage: 'parksearchresultspage',
        	
        	
        }
    },
    
    slideLeftTransition: {type: 'slide', direction: 'left'},
    slideRightTransition: {type: 'slide', direction: 'right'},

    //sessionToken = null,
    
    onAddressSearchSubmitCommand: function (view, city, zip){
    	console.log('City: '+ city);
    	console.log('Zip: ' + zip);
    	
    	var me = this,
    		AddressSearchPage = me.getAddressSearchPage();
    	
    	if (city.length == 0 && zip.length == 0){
    		
    		AddressSearchPage.showRegisterFailedMessage('Please enter city or zip');
    		return;
    	}
    	
    	me.addresssearchSuccess();
    	/*
    	AddressSearchPage.setMasked({
    		xtype: 'loadmask',
    		message: 'Searching...'
    	}),
    	
    	Ext.Ajax.request({
    		url:
    		method: 'post',
    		params: {
    			city: city,
    			zip: zip, 
    		},
    		success: function(response){
    			
    			var addrsearchResponse = Ext.JSON.decode(response.responseText);
    			if (addrsearchResponse.success == 'true'){
    				me.sessionToken = addrsearchResponse.sessionToken;
    				me.addresssearchSuccess();
    			}
    			
    		},
    		failure: function (response){
    			//me.sessionToken = null;
    			me.addresssearchFailure('Search failed. Please try again later.');
    		}
    		
    	});*/
    	
    	},
    	
    	addresssearchSuccess: function(){
    		console.log('Search completed');
    		var CourtSearchAddrPage = this.getAddressSearchPage();
    		var SearchResultsPage = this.getSearchResultsPage();
    		CourtSearchAddrPage.setMasked(false);

    	    /*var resultlist = function (){
    	    	this.callParent(arguments);
    	    	Ext.getStore('parklists').load();
    	    	console.log("Park list loaded");
    	    };*/
    		Ext.Viewport.animateActiveItem(SearchResultsPage, this.slideRightTransition);
    	},
    	
    	addresssearchFailure: function (message){
    		var CourtSearchAddrPage = this.getAddressSearchPage();
    		CourtSearchAddrPage.showAddrSearchFailedMessage(message);
    		CourtSearchAddrPage.setMasked(false);
    	}
//    }
});