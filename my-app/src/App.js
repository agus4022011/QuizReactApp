import React from 'react';
import logo from './logo.svg';
import './App.css';

import Watch from './components/Watch';
import Quiz from './components/Quiz';
import Header from  './components/header';
import Cards from  './components/Cards';
import ReactPLayer from 'react-player';

import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <div className="App">

        <Header />

        <Watch />

        <ReactPLayer 
                    className='container mb-3'
                    controls url='https://youtu.be/7sDY4m8KNLc'
                     onEnded={()=>alert("termino") }
        
        />

        <Quiz />

        <Cards />
        
        

      
    </div>
  );
}

export default App;
