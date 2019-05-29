import React,{Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Icon from '@material-ui/core/Icon'
import '../css/LineChart.css';
import {Line} from 'react-chartjs-2';
import Keys from '../config/Keys';
import Axios from 'axios';
 import Pie from 'react-chartjs-2'
 
export default class extends Component{
    constructor(props){
        super(props);

    }
     
    state={
        chartData: {},
       
        initData:{
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
            
        }
    }

    componentDidMount(){
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
        var chartData=null
        var data2


        fetch(Keys.backendUrl+'/api/cat/'+this.props.cat).then((res)=>res.json()).then((data)=>{
           
            if(data){
                console.log('data',data)
                data.map((item,i)=>{
                 
                    labels.push(item.labels);
                    totalMan.push(item.totalMan);
                    totalWomen.push(item.totalWomen);
                    population.push(item.population);
                    emigrantTotal.push(item.emigrantTotal);
                    girlStudentsTotal.push(item.girlStudentsTotal);
                    boyStudentsTotal.push(item.boyStudentsTotal);
                    studentsTotal.push(item.studentsTotal);
                    year.push(item.year);
                    gdp.push(item.gdpCountry);
                });
                category=this.props.cat;
                this.setState({
                    initData:{
                        category:category,
                        labels:labels,
                        totalWomen:totalWomen,
                        totalMan: totalMan,
                        population: population,
                        emigrantTotal: emigrantTotal,
                        girlStudentsTotal:girlStudentsTotal,
                        boyStudentsTotal:boyStudentsTotal,
                        studentsTotal:studentsTotal,
                        year: year,
                        gdpCountry: gdp
                    }

                }) //end setState()
                console.log('2020',this.state.initData.girlStudentsTotal)
                
            }
            else{
                console.log('no data fetched')
            }
          
           
        }).then(()=>{
            switch(this.props.cat){
                case 'HeramSeni':
              {

                  console.log('pi chart=',this.state.initData.totalMan)
                  chartData={
                       labels:this.state.initData.labels,
                       datasets:[
                           {
                               label:'مردان',
                               backgroundColor:['rgba(255,185,0 ,1)','rgba(231,72,86 ,1)','rgba(0,120,215 ,1)','rgba(0,153,188 ,1)','rgba(227,0,140 ,1)','rgba(218,59,1 ,1)','rgba(135,100,184 ,1)',
                                                  'rgba(227,0,140 ,1)','rgba(81,92,107 ,1)'  ],
                               data:this.state.initData.totalMan
                           },
                           {
                            label:'زنان',
                            backgroundColor:['rgba(255,185,0 ,1)','rgba(231,72,86 ,1)','rgba(0,120,215 ,1)','rgba(0,153,188 ,1)','rgba(227,0,140 ,1)','rgba(218,59,1 ,1)','rgba(135,100,184 ,1)',
                            'rgba(227,0,140 ,1)','rgba(81,92,107 ,1)'  ],
                            data:this.state.initData.totalWomen
                        }
                       ]
                  };//end chartData
                  this.setState({
                    chartData:chartData
                })
                 
    
              }
              break;
              case 'gdp':{
                
                // console.log('pi chart=',this.state.initData.to)
                chartData={
                     labels:this.state.initData.labels,
                     datasets:[
                         {
                             label:'',
                             backgroundColor:['rgba(255,185,0 ,1)','rgba(231,72,86 ,1)','rgba(0,120,215 ,1)','rgba(0,153,188 ,1)','rgba(227,0,140 ,1)','rgba(218,59,1 ,1)','rgba(135,100,184 ,1)',
                                                'rgba(227,0,140 ,1)','rgba(81,92,107 ,1)'  ],
                             data:this.state.initData.gdpCountry
                         }
                        
                     ]
                };//end chartData
                this.setState({
                  chartData:chartData
              })
              }
              break;
              case 'Population':{
                        // console.log('pi chart=',this.state.initData.to)
                        chartData={
                            labels:this.state.initData.labels,
                            datasets:[
                                {
                                    label:'جمعیت کل',
                                    backgroundColor:['rgba(255,185,0 ,1)','rgba(231,72,86 ,1)','rgba(0,120,215 ,1)','rgba(0,153,188 ,1)','rgba(227,0,140 ,1)','rgba(218,59,1 ,1)','rgba(135,100,184 ,1)',
                                                    'rgba(227,0,140 ,1)'  ],
                                    data:this.state.initData.population
                                },
                                {
                                    label:' تعداد زنان',
                                    backgroundColor:['rgba(255,185,0 ,1)','rgba(231,72,86 ,1)','rgba(0,120,215 ,1)','rgba(0,153,188 ,1)','rgba(227,0,140 ,1)','rgba(218,59,1 ,1)','rgba(135,100,184 ,1)',
                                                    'rgba(227,0,140 ,1)'  ],
                                    data:this.state.initData.totalWomen
                                },
                                {
                                    label:' تعداد مردان',
                                    backgroundColor:['rgba(255,185,0 ,1)','rgba(231,72,86 ,1)','rgba(0,120,215 ,1)','rgba(0,153,188 ,1)','rgba(227,0,140 ,1)','rgba(218,59,1 ,1)','rgba(135,100,184 ,1)',
                                                    'rgba(227,0,140 ,1)'  ],
                                    data:this.state.initData.totalMan
                                },

                            
                            ]
                    };//end chartData
                    this.setState({
                        chartData:chartData
                    })
            }
              break;
              case 'Emigrant':{
                chartData={
                    labels:this.state.initData.labels,
                    datasets:[
                        {
                            label:'جمعیت کل',
                            backgroundColor:['rgba(255,185,0 ,1)','rgba(231,72,86 ,1)','rgba(0,120,215 ,1)','rgba(0,153,188 ,1)','rgba(227,0,140 ,1)','rgba(218,59,1 ,1)','rgba(135,100,184 ,1)',
                                            'rgba(227,0,140 ,1)' ,'rgba(209,52,56 ,1)' ],
                            data:this.state.initData.emigrantTotal
                        },
                        {
                            label:' تعداد زنان',
                            backgroundColor:['rgba(255,185,0 ,1)','rgba(231,72,86 ,1)','rgba(0,120,215 ,1)','rgba(0,153,188 ,1)','rgba(227,0,140 ,1)','rgba(218,59,1 ,1)','rgba(135,100,184 ,1)',
                                            'rgba(227,0,140 ,1)'  ,'rgba(209,52,56 ,1)'  ],
                            data:this.state.initData.totalWomen
                        },
                        {
                            label:' تعداد مردان',
                            backgroundColor:['rgba(255,185,0 ,1)','rgba(231,72,86 ,1)','rgba(0,120,215 ,1)','rgba(0,153,188 ,1)','rgba(227,0,140 ,1)','rgba(218,59,1 ,1)','rgba(135,100,184 ,1)',
                                            'rgba(227,0,140 ,1)'  ,'rgba(209,52,56 ,1)'  ],
                            data:this.state.initData.totalMan
                        },

                    
                    ]
            };//end chartData
            this.setState({
                chartData:chartData
            })
              }
              break;
              case 'UniversityStudents':{
                  console.log('pie chart student=',this.state.initData.girlStudentsTotal)
                chartData={
                    labels:this.state.initData.labels,
                    datasets:[
                        {
                            label:' تعداد کل دانشجویان',
                            backgroundColor:['rgba(255,185,0 ,1)','rgba(231,72,86 ,1)','rgba(0,120,215 ,1)','rgba(0,153,188 ,1)','rgba(227,0,140 ,1)','rgba(218,59,1 ,1)','rgba(135,100,184 ,1)',
                                            'rgba(227,0,140 ,1)' ],
                            data:this.state.initData.studentsTotal
                        },
                        {
                            label:' تعداد زنان',
                            backgroundColor:['rgba(255,185,0 ,1)','rgba(231,72,86 ,1)','rgba(0,120,215 ,1)','rgba(0,153,188 ,1)','rgba(227,0,140 ,1)','rgba(218,59,1 ,1)','rgba(135,100,184 ,1)',
                                            'rgba(227,0,140 ,1)'     ],
                            data:this.state.initData.totalWomen
                        },
                        {
                            label:' تعداد مردان',
                            backgroundColor:['rgba(255,185,0 ,1)','rgba(231,72,86 ,1)','rgba(0,120,215 ,1)','rgba(0,153,188 ,1)','rgba(227,0,140 ,1)','rgba(218,59,1 ,1)','rgba(135,100,184 ,1)',
                                            'rgba(227,0,140 ,1)'    ],
                            data:this.state.initData.totalMan
                        },

                    
                    ]
            };//end chartData
            this.setState({
                chartData:chartData
            })
              }
              break;

            }//end switch
           

        }).catch((err)=>{
            console.log('error  fetch=',err)
        });
       
        
       
       
       
    }

    render(){
        return(
           <section className="LineChart">
               <Card>
                   <CardContent>
                   <div className="chart-title"><span>نمودار</span><span> {this.props.chartType}</span><span> {this.state.chartCat}  </span></div>
                       <br/>
                       <hr/>
                       {/* place for   Chart */}
                     <Pie
                     data={this.state.chartData}
                     
                     />
                       {console.log(this.state.chartData)}

                    </CardContent>
               </Card>
               
           </section>
        )
    }
}