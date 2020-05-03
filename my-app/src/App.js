import React from 'react';
import logo from './logo.svg';
import './App.css';

import Watch from './components/Watch';
import Quiz from './components/Quiz';
import Header from  './components/header';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">

        <Header />

        <Watch />

        <Quiz />


      
    </div>
  );
}

export default App;
