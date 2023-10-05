const initialState = {
	warehouses: []
  };
  
  const warehouseReducer = (state = initialState, action) => {
	switch (action.type) {
	  case 'FILTER_WAREHOUSES':
		const { city, cluster, space } = action.payload;
		return {
		  ...state,
		  warehouses: state.warehouses.filter(warehouse => {
			if (city && warehouse.city !== city) return false;
			if (cluster && warehouse.cluster !== cluster) return false;
			if (space && warehouse.spaceAvailable > space) return false;
			return true;
		  })
		};
	  case 'EDIT_WAREHOUSE':
		const editedWarehouse = action.payload;
		return {
		  ...state,
		  warehouses: state.warehouses.map(warehouse => {
			if (warehouse.id === editedWarehouse.id) {
			  return editedWarehouse;
			}
			return warehouse;
		  })
		};
	  case 'ADD_CUSTOM_FIELD':
		const { fieldName, fieldValue, warehouseId } = action.payload;
		return {
		  ...state,
		  warehouses: state.warehouses.map(warehouse => {
			if (warehouse.id === warehouseId) {
			  return {
				...warehouse,
				customFields: {
				  ...warehouse.customFields,
				  [fieldName]: fieldValue
				}
			  };
			}
			return warehouse;
		  })
		};
	  default:
		return state;
	}
  };
  
  export default warehouseReducer;
  