import React from 'react';

import {BrowserRouter as Router,Route}from 'react-router-dom';
import PG from './components/test/PG';
import '../src/css/Style.css';
import MainLayout from './components/MainLayout'



function App() {
  return (
     <Router>
        <Route path="/test" component={PG}/>
        <Route path="/iran/cat/:cat" component={MainLayout}/>
   </Router> 
  );
}

export default App;
