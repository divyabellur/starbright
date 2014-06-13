Ext.define('sportwise.store.sportwiseusers', {
	extend: 'Ext.data.Store',
	config: {
		
				model: 'sportwise.model.sportwiseuser',
				autoLoad: true,
				 
		         proxy: {
		             type: 'localstorage',
		             id: 'swuser'
		         }

	}
});