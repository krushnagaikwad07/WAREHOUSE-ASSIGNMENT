import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { filterWarehouses } from './actions/warehouseActions';

const WarehousesList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cityFilter, setCityFilter] = useState('');
  const [clusterFilter, setClusterFilter] = useState('');
  const [spaceFilter, setSpaceFilter] = useState('');

  const warehouses = useSelector(state => state.warehouses);
  const dispatch = useDispatch();

  const handleSearch = e => {
    setSearchTerm(e.target.value);
  };

  const handleCityFilter = e => {
    setCityFilter(e.target.value);
  };

  const handleClusterFilter = e => {
    setClusterFilter(e.target.value);
  };

  const handleSpaceFilter = e => {
    setSpaceFilter(e.target.value);
  };

  const handleFilter = () => {
    dispatch(filterWarehouses(cityFilter, clusterFilter, spaceFilter));
  };

  const filteredWarehouses = warehouses.filter(warehouse =>
    warehouse.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Warehouses List</h1>
      <input type="text" placeholder="Search by name" onChange={handleSearch} />
      <select onChange={handleCityFilter}>
        <option value="">All Cities</option>

        {Array.from(new Set(warehouses.map(warehouse => warehouse.city))).map(city => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
      <select onChange={handleClusterFilter}>
        <option value="">All Clusters</option>

        {Array.from(new Set(warehouses.map(warehouse => warehouse.cluster))).map(cluster => (
          <option key={cluster} value={cluster}>
            {cluster}
          </option>
        ))}
      </select>
      <input type="number" placeholder="Space Available Limit" onChange={handleSpaceFilter} />
      <button onClick={handleFilter}>Filter</button>
      <ul>
        {filteredWarehouses.map(warehouse => (
          <li key={warehouse.id}>
            <Link to={`/warehouse/${warehouse.id}`}>{warehouse.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WarehousesList;
