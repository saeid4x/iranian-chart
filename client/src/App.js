import React ,{Component} from 'react';

import {BrowserRouter as Router,Switch,Route}from 'react-router-dom';
// import {Route} from 'react-router';
import PG from './components/test/PG';
import '../src/css/Style.css';
import MainLayout from './components/MainLayout'
 
import RedirectToHome from './components/RedirectToHome';
import ChartHolder from './components/ChartHolder';
import SideNav from './components/SideNav';





 export default class extends Component{
   render(){
    return (
      <Router>

        <section>
          <MainLayout/>
          <SideNav/>
          <Route  path="/iran/cat/:cat" component={ChartHolder}/> 
           
        
    
          </section>
       
                
          

        </Router>
   
   );
   }

 }
  
 
