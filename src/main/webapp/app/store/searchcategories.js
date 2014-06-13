Ext.define('sportwise.store.searchcategories',{
	extend: 'Ext.data.Store',
	requires: ['sportwise.model.searchcategory'],
	config: {
		model: 'sportwise.model.searchcategory',
		data: [
    	       { category: "Current location"},
               { category: "Address"},
               { category: "Park name"},
               { category: "Favorites"},
               { category: "Recent search"}
		       ]
	}
});