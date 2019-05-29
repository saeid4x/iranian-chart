import React ,{Component} from 'react';
import axios from 'axios';
import Keys from '../config/Keys';
import LineChart from './LineChart';
import { Radar } from 'react-chartjs-2';
import PiChart from './PiChart';
import RadarChart from './RadarChart';
import BarChart from './BarChart';



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
        var category=null;
        var labels=[];
        var totalMan=[];
        var totalWomen=[];
        var population=[];
        var emigrantTotal=[];
        var girlStudentsTotal=[];
        var boyStudentsTotal=[];
        var studentsTotal=[];
        var year=[];    
        var gdp=[];
        
    //    fetch(Keys.backendUrl+'/api/cat/'+this.props.match.params.cat).then((data)=>{
    //         data.data.map((item,i)=>{
                 
    //             labels.push(item.labels);
    //             totalMan.push(item.totalMan);
    //             totalWomen.push(item.totalWomen)
    //             population.push(item.population);
    //             emigrantTotal.push(item.emigrantTotal);
    //             girlStudentsTotal.push(item.girlStudentsTotal);
    //             boyStudentsTotal.push(item.boyStudentsTotal);
    //             studentsTotal.push(item.studentsTotal);
    //             year.push(item.year);
    //             gdp.push(item.gdpCountry)
    //         });
    //         // console.log('cat url=',this.props.match.params.cat);
    //        var category=this.props.match.params.cat;
            

    //         this.setState({
    //             info:{
    //                 category:category,
    //                 labels:labels,
    //                 totalWomen: totalWomen,
    //                 totalMan:totalMan,
    //                 population: population,
    //                 emigrantTotal: emigrantTotal,
    //                 girlStudentsTotal:girlStudentsTotal,
    //                 boyStudentsTotal:boyStudentsTotal,
    //                 studentsTotal:studentsTotal,
    //                 year: year,
    //                 gdpCountry:gdp,
                    
        
    //             }
    //         });
    //         console.log('category state=',this.state.info.category)
            
             
    //         //  console.log(info)
             
             
    //     }).catch((err)=>{
    //         console.log('error axios=',err)
    //     })
       
       
           
            
          
        }
    

        
        render(){
          
            return(
                <section>
                   
                    <LineChart
                         cat={this.props.match.params.cat}
                    />
                    <PiChart 
                            cat={this.props.match.params.cat}/>
                    <RadarChart 
                    cat={this.props.match.params.cat}
                    chartType='راداری'
                    
                     />
                     <BarChart
                     cat={this.props.match.params.cat}
                     chartType='میله ای'

                     />
                    
    
    
                </section>
            )
        }
    
    }
   
    