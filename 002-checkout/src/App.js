import React from 'react';
import './App.css';
import BackgroundImage from './components/BackgroundImage'
import OrderSummary from "./components/OrderSummary";
import PaymentInformation from "./components/PaymentInformation";

function App() {
  return (
    <div className="App">
      <BackgroundImage/>
      <OrderSummary/>
      <PaymentInformation/>
    </div>
  );
}

export default App;
