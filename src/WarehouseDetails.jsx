import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { editWarehouse, addCustomField } from './actions/warehouseActions';

const WarehouseDetails = () => {
  const { id } = useParams();

  const warehouse = useSelector(state =>
    state.warehouses.find(warehouse => warehouse.id === id)
  );

  const dispatch = useDispatch();

  const [editedWarehouse, setEditedWarehouse] = useState(warehouse);

  const handleFieldChange = e => {
    setEditedWarehouse({
      ...editedWarehouse,
      [e.target.name]: e.target.value
    });
  };

  const handleEdit = () => {
    dispatch(editWarehouse(editedWarehouse));
  };

  const handleAddCustomField = () => {
    const customFieldName = prompt('Enter the custom field name');
    const customFieldValue = prompt('Enter the custom field value');
    dispatch(addCustomField(customFieldName, customFieldValue, id));
  };

  return (
    <div>
      <h1>Warehouse Details</h1>
      {warehouse ? (
        <div>
          <h2>Warehouse Name: {warehouse.name}</h2>
          <input
            type="text"
            name="name"
            value={editedWarehouse.name}
            onChange={handleFieldChange}
          />
          <h2>City: {warehouse.city}</h2>
          <input
            type="text"
            name="city"
            value = {editedWarehouse.city}
            onChange={handleFieldChange}
          />
          <h2>Cluster: {warehouse.cluster}</h2>
          <input
            type="text"
            name="cluster"
            value={editedWarehouse.cluster}
            onChange={handleFieldChange}
          />
          <h2>Space Available: {warehouse.spaceAvailable}</h2>
          <input
            type="text"
            name="spaceAvailable"
            value={editedWarehouse.spaceAvailable}
            onChange={handleFieldChange}
          />
          <h2>Warehouse Live Status: {warehouse.liveStatus}</h2>
          <input
            type="text"
            name="liveStatus"
            value={editedWarehouse.liveStatus}
            onChange={handleFieldChange}
          />


          {warehouse.customFields &&
            Object.keys(warehouse.customFields).map(fieldName => (
              <div key={fieldName}>
                <h2>{fieldName}: {warehouse.customFields[fieldName]}</h2>
              </div>
            ))}

          <button onClick={handleEdit}>Update Warehouse</button>
          <button onClick={handleAddCustomField}>Add Custom Field</button>
        </div>
      ) : (
        <p>Warehouse not found.</p>
      )}
    </div>
  );
};

export default WarehouseDetails;
