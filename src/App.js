import logo from './logo.svg';
import './App.css';
import OrdersList from './components/OrdersList';
import { useState } from 'react';
import  orders  from './components/data.json';
import  recommendation  from './components/recommendation.json';
import RecommendationList from './components/RecommendationList';

function App() {
  const [ordersList,setOrdersList] =useState(orders.orders);
  const [recommendationList,setRecommendationList] =useState(recommendation.recommendation);
  // const [show, setShow] = useState({val: false});
  // const changeShow  =() => {
  //   console.log('clicked', show.val);
  //   setShow({val: true});
  // }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h4 className="App-logo-2">Mini-Mart</h4>
        <p>Home</p>
        <p>About</p>
        <p>Login</p>
      </header>

      <div className="OrderList-main">
      <h1>Orders List</h1>
      <div className="OrderList" >
                <li>
                    Invoice Id(Order#)
                </li>
                <li>
                  Merchant Id
                </li>
                <li>
                    Status
                </li>
                <li>
                    Price
                </li>
                <li>
                  Payment
                </li>

            </div>
      {ordersList.map((order)=> <OrdersList key={order.orderID} order={order}/>)}
    </div>
    
        
    <div className="OrderList-main">
      <h1>Recommendations</h1>
      <div className="OrderList">
                <li>
                  Product Id
                </li>
                <li>
                  Product Name
                </li>
                <li>
                  Product Type
                </li>
                <li>
                    Price
                </li>

            </div>
      {recommendationList.map((recommendation)=> <RecommendationList key={recommendation.productID} recommendation={recommendation}/>)}
    </div>      

      <footer className="App-footer">
        <p>All rights reserved @Grab & HackerEarth</p>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </footer>
    </div>
  );
}

export default App;
