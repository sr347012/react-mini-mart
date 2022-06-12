import logo from './logo.svg';
import './App.css';
import OrdersList from './components/OrdersList';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h4>Mini-Mart</h4>
      </header>
      <h1>Orders List</h1>
      <OrdersList orderState="PENDING"/>
      <OrdersList orderState="DELIVERED"/>

      <footer className="App-footer">
        <img src={logo} className="App-logo" alt="logo" />
        <p>All rights reserved</p>
      </footer>
    </div>
  );
}

export default App;
