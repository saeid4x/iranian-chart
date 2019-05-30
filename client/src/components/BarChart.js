import React,{Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Icon from '@material-ui/core/Icon'
// import '../css/LineChart.css';
import {Bar} from 'react-chartjs-2';
import Keys from '../config/Keys';
import Axios from 'axios';
 
export default class extends Component{
    constructor(props){
        super(props);

    }
     
    state={
        chartData: {},
        chartCat:null,
       
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
        var chartData=null;
        
        var chartCategory=null;
        var data2;
 


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
                
            }
            else{
                console.log('no data fetched')
            }
          
           
        }).then(()=>{
            switch(this.props.cat){
                case 'HeramSeni':
              {
                    chartCategory='هرم سنی جمعیت';
                chartData={
                    labels: this.state.initData.labels   ,    
                    datasets:[
                        {
                            label:'مردان',
                            backgroundColor:['#F7630C','#F7630C','#F7630C','#F7630C','#F7630C','#F7630C','#F7630C','#F7630C','#F7630C'],
                            data: this.state.initData.totalMan
                        },
                        {
                            label:'زنان',
                            backgroundColor:['#EA005E','#EA005E','#EA005E','#EA005E','#EA005E','#EA005E','#EA005E','#EA005E','#EA005E'],
                            data:this.state.initData.totalWomen
                        }
                    ]
                }
                 
                  this.setState({
                    chartData:chartData,
                    chartCat:chartCategory
                })
                 
    
              }
              break;
              case 'gdp':{
                  chartCategory='تولید ناخالص ملی ایران'
                chartData={
                    labels: this.state.initData.labels,        
                    datasets:[
                        {
                            label:'تولید ناخالص ملی',
                            backgroundColor:['#DA3B01','#DA3B01','#DA3B01','#DA3B01','#DA3B01','#DA3B01','#DA3B01','#DA3B01','#DA3B01'],
                            data: this.state.initData.gdpCountry
                        },
                        
                        
                    ]
                }
                 
                  this.setState({
                    chartData:chartData,
                    chartCat:chartCategory
                })
                 
              }
              break;
              case 'Population':{
                  chartCategory='جمعیت ایران'
                chartData={
                    labels: this.state.initData.labels ,      
                    datasets:[
                        {
                            label:'جمعیت کل کشور',
                            backgroundColor:['#DA3B01','#DA3B01','#DA3B01','#DA3B01','#DA3B01','#DA3B01','#DA3B01','#DA3B01'],
                            data: this.state.initData.population
                        },
                        {
                            label:'تعداد مردان',
                            backgroundColor:['#EA005E','#EA005E','#EA005E','#EA005E','#EA005E','#EA005E','#EA005E','#EA005E'],
                            data: this.state.initData.totalMan
                        },
                        {
                            label:'تعداد زنان',
                            backgroundColor:['#018574','#018574','#018574','#018574','#018574','#018574','#018574','#018574'],
                            data: this.state.initData.totalWomen
                        },
                        
                    ]
                }
                 
                this.setState({
                  chartData:chartData,
                  chartCat:chartCategory
              })
              }
              break;
              case 'Emigrant':{
                  chartCategory='تعداد مهاجرین ایرانی';
                chartData={
                    labels: this.state.initData.labels   ,    
                    datasets:[
                        {
                            label:'تعداد کل  مهاجرین',
                            backgroundColor:['#DA3B01','#DA3B01','#DA3B01','#DA3B01','#DA3B01','#DA3B01','#DA3B01','#DA3B01','#DA3B01'],
                            data: this.state.initData.emigrantTotal
                        },
                        {
                            label:'  مردان',
                            backgroundColor:['#EA005E','#EA005E','#EA005E','#EA005E','#EA005E','#EA005E','#EA005E','#EA005E','#EA005E'],
                            data: this.state.initData.totalMan
                        },
                        {
                            label:'  زنان',
                            backgroundColor:['#018574','#018574','#018574','#018574','#018574','#018574','#018574','#018574','#018574'],
                            data: this.state.initData.totalWomen
                        },
                        
                    ]
                }
                this.setState({
                  chartData:chartData,
                  chartCat:chartCategory
              })
              }
              break;
              case 'UniversityStudents':{
                  chartCategory='تعداد دانشجویان ایرانی'
                chartData={
                    labels: this.state.initData.labels    ,   
                    datasets:[
                        {
                            label:'تعداد کل  دانشجویان',
                            backgroundColor:['#DA3B01','#DA3B01','#DA3B01','#DA3B01','#DA3B01','#DA3B01','#DA3B01','#DA3B01'],
                            data: this.state.initData.studentsTotal
                        },
                        {
                            label:' دانشجویان پسر',
                            backgroundColor:['#EA005E','#EA005E','#EA005E','#EA005E','#EA005E','#EA005E','#EA005E','#EA005E'],
                            data: this.state.initData.totalMan
                        },
                        {
                            label:'  ددانشجویان دختر',
                            backgroundColor:['#018574','#018574','#018574','#018574','#018574','#018574','#018574','#018574'],
                            data: this.state.initData.totalWomen
                        },
                        
                    ]
                }
                this.setState({
                  chartData:chartData,
                  chartCat:chartCategory
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
           <section className="BarChart">
               <Card>
                   <CardContent>
                        <div className="chart-title"><span>نمودار</span><span className="chartType"> {this.props.chartType}</span><span> {this.state.chartCat}  </span></div>
                       <br/>
                       <hr/>
                       {/* place for Line Chart */}
                       <Bar 
                        options={{
                            responsive:true
                        }}
                       
                        data={this.state.chartData}
                       />
                       {console.log(this.state.chartData)}

                    </CardContent>
               </Card>
               
           </section>
        )
    }
}