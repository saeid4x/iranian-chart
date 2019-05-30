import React ,{Component} from 'react';
import axios from 'axios';
import Keys from '../config/Keys';
import LineChart from './LineChart';
import { Radar } from 'react-chartjs-2';
import PiChart from './PiChart';
import RadarChart from './RadarChart';
import BarChart from './BarChart';
import Header from './Header';
import SideNav from './SideNav';
import SmallCard from './SmallCard';
import Grid from '@material-ui/core/Grid'
import "../css/MainLayout.css";
 


export default class MainLayout extends Component{
    constructor(props){
        super(props);

    }
    
   
    state={
        info:{
            category:null,
            labels:[],
            totalWomen: [],
            totalMan: [],
            population: [],
            emigrantTotal: [],
            girlStudentsTotal: [],
            boyStudentsTotal: [],
            studentsTotal: [],
            year: [],
            gdpCountry: [],
        },
        dataChart: {}
       
    }
   
    componentWillMount(){
      
      
        // switch(this.props.match.params.cat){
        //     case 'HeramSeni'{
        //         cardUnit='نفر';
        //         cardTitle=''
        //     }
        //     break;

        }

     

        
        render(){
          
            return(
                <section className="MainLayout">

                    <Header/>
                    {/* <SideNav/> */}
                    {/* <SmallCard cardClass="sc1"/>
                    <SmallCard cardClass="sc2"/>
                    <SmallCard cardClass="sc3"/> */}

          <SideNav link="/iran/cat/:cat"/>
                    
 
                   
                    <LineChart
                         cat={this.props.match.params.cat}
                         chartType='خطی'
                         
                    />
                    <BarChart
                     cat={this.props.match.params.cat}
                     chartType='میله ای'

                     />
                     <RadarChart 
                    cat={this.props.match.params.cat}
                    chartType='راداری'
                    
                     />
                    
                    <PiChart 
                            cat={this.props.match.params.cat}
                            chartType='دایره ای'
                            
                            /> 
                   
                   
    
    
                </section>
            )
        }
    
    }
   
    