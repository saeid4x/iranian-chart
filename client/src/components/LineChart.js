import React,{Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Icon from '@material-ui/core/Icon'
import '../css/LineChart.css';
import {Line} from 'react-chartjs-2';
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
                
            }
            else{
                console.log('no data fetched')
            }
          
           
        }).then(()=>{
            var chartCat;
            switch(this.props.cat){
                case 'HeramSeni':
              {
                chartCat='هرم سنی جمعیت';
                  console.log('hi');
                  chartData={
                      labels:this.state.initData.labels,
                      datasets:[
                                {
                                    label:'زنان',
                                    backgroundColor:'rgba(234,0,94 ,0.6)',
                                    data: this.state.initData.totalWomen
                                },
                                {
                                    label:'مردان',
                                    backgroundColor:'rgba(247,99,12 ,0.6)',
                                    data:this.state.initData.totalMan
                                }
                            ]
                  };//end chartData
                  this.setState({
                    chartData:chartData,
                    chartCat:chartCat
                })
                 
    
              }
              break;
              case 'gdp':{
                chartCat='ناخالص ملی ایران';
                chartData={
                    labels:this.state.initData.labels,
                    datasets:[
                              {
                                  label:'تولید ناخالص ملی',
                                  backgroundColor:'rgba(234,0,94 ,0.6)',
                                  data: this.state.initData.gdpCountry
                              } 
                          ]
                };//end chartData
                this.setState({
                  chartData:chartData,
                  chartCat:chartCat
              })
              }
              break;
              case 'Population':{
                chartCat='جمعیت کشور ایران';
                chartData={
                    labels:this.state.initData.labels,
                    datasets:[
                              {
                                  label:'تعداد زنان',
                                  backgroundColor:'rgba(234,0,94 ,0.6)',
                                  data: this.state.initData.totalWomen
                              } ,
                              {
                                label:'تعداد مردان',
                                backgroundColor:' rgba(0,204,106 ,0.6)',
                                data: this.state.initData.totalMan
                            } ,
                            {
                                label:'جمعیت کل',
                                backgroundColor:'rgba(0,183,195 ,0.5)',
                                data: this.state.initData.population
                            } 
                          ]
                };//end chartData
                this.setState({
                  chartData:chartData,
                  chartCat:chartCat
              })
              }
              break;
              case 'Emigrant':{
                chartCat='تعداد مهاجرین'
                chartData={
                    labels:this.state.initData.labels,
                    datasets:[
                              {
                                  label:'تعداد زنان مهاجر ',
                                  backgroundColor:'rgba(234,0,94 ,0.6)',
                                  data: this.state.initData.totalWomen
                              } ,
                              {
                                label:' تعداد مردان مهاجر ',
                                backgroundColor:' rgba(0,204,106 ,0.6)',
                                data: this.state.initData.totalMan
                            } ,
                            {
                                label:'تعداد کل مهاجرین',
                                backgroundColor:'rgba(0,183,195 ,0.5)',
                                data: this.state.initData.emigrantTotal
                            } 
                          ]
                };//end chartData
                this.setState({
                  chartData:chartData,
                  chartCat:chartCat
              })
              }
              break;
              case 'UniversityStudents':{
                chartCat='تعداد انشجویان ایران';
                chartData={
                   
                    labels:this.state.initData.labels,
                    datasets:[
                              {
                                  label:'دانشجویان دختر',
                                  backgroundColor:'rgba(234,0,94 ,0.6)',
                                  data: this.state.initData.totalWomen
                              } ,
                              {
                                label:'دانشجویان مرد',
                                backgroundColor:' rgba(0,204,106 ,0.6)',
                                data: this.state.initData.totalMan
                            } ,
                            {
                                label:'تعداد کل دانشجویان',
                                backgroundColor:'rgba(0,183,195 ,0.5)',
                                data: this.state.initData.studentsTotal
                            } 
                          ]
                };//end chartData
                this.setState({
                  chartData:chartData,
                  chartCat:chartCat
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
                   <div className="chart-title"><span>نمودار</span><span className="chartType"> {this.props.chartType}</span><span> {this.state.chartCat}  </span></div>
                       <br/>
                       <hr/>
                       {/* place for Line Chart */}
                       <Line 
                     
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