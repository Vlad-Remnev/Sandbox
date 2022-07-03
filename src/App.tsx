import React from 'react';
import logo from './logo.svg';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Stars from "./components/Star/Star";


function App() {
    console.log('App render')
  return (
      <div className="App">
          <Accordion titleVal = {'Меню'} collapse={false}/>
          <Accordion titleVal = {'Список'} collapse={true}/>
          <Stars value = {0}/>
          <Stars value = {1}/>
          <Stars value = {2}/>
          <Stars value = {3}/>
          <Stars value = {4}/>
          <Stars value = {5}/>
      </div>
  );
}

export default App;
