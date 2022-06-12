import logo from './logo.svg';
import './App.css';
import OrdersList from './components/OrdersList';
import { useState } from 'react';
import  orders  from './components/data.json';

function App() {
  const [ordersList,setOrdersList] =useState(orders.orders);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h4 className="App-logo-2">Mini-Mart</h4>
        <p>Home</p>
        <p>About</p>
        <p>Login</p>
      </header>
      <h1>Orders List</h1>

      <div className="OrderList-main">
      <div className="OrderList">
                <li>
                    Name
                </li>
                <li>
                    Type
                </li>
                <li>
                    Price
                </li>
                <li>
                  Specifications
                </li>
            </div>
      {ordersList.map((order)=> <OrdersList key ={order.orderID} order={order}/>)}
    </div>         


      <footer className="App-footer">
        <img src={logo} className="App-logo" alt="logo" />
        <p>All rights reserved</p>
      </footer>
    </div>
  );
}

export default App;
