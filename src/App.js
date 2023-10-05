import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import WarehousesList from './WarehousesList'; 
import WarehouseDetails from './WarehouseDetails';

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={WarehousesList} />
          <Route path="/warehouse/:id" component={WarehouseDetails} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
