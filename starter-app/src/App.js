import React from 'react';
import './App.css';

//imports components
import Header from './components/Header';
import Footer from './components/Footer';
import AirportInfo from './components/AirportInfo';

function App() { //returns the view
  return (
    <div className="App">
      <Header title="Plan Your Trip: Flight Generator"></Header>
      <AirportInfo></AirportInfo>
      <Footer title="Created By: Hannah Kern"></Footer>
    </div>
  );
}

export default App;
