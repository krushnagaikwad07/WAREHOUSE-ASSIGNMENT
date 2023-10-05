export const filterWarehouses = (city, cluster, space) => {
	return {
	  type: 'FILTER_WAREHOUSES',
	  payload: {
		city,
		cluster,
		space
	  }
	};
  };
  
  export const editWarehouse = warehouse => {
	return {
	  type: 'EDIT_WAREHOUSE',
	  payload: warehouse
	};
  };
  
  export const addCustomField = (fieldName, fieldValue, warehouseId) => {
	return {
	  type: 'ADD_CUSTOM_FIELD',
	  payload: {
		fieldName,
		fieldValue,
		warehouseId
	  }
	};
  };
  