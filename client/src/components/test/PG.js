import React ,{Component,Fragment} from 'react'
import Header from '../Header';
import SideNav from '../SideNav';
import SmallCard from '../SmallCard'
import LineChart from '../LineChart';
import {Doughnut} from 'react-chartjs-2';
import {Pie} from 'react-chartjs-2';
import {Radar} from 'react-chartjs-2';
import {Bar} from 'react-chartjs-2';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'
export default class extends Component{
    state={
        donat:{
            data:{
                // labels: ['1','2','3','4','5','6'],
               labels:['red','green','null'],
                datasets:[
                    {
                        label:'red',
                        backgroundColor:['rgba(247,99,12 ,1)','rgba(232,17,35 ,0.5)','#0078D7'],
                        data: [10,30,50,66,78,90]
                    },
                    {
                        label:'green',
                        backgroundColor:['rgba(255,140,0 ,1)','rgba(0,120,215 ,1)','rgba(195,0,82 ,1)'],
                        data: [70,20,66,100,89,76]
                    }
                ]
            }
        },

        pie:{
            data:{
                // labels: ['1','2','3','4','5','6'],
               labels:['red','green','null'],
                datasets:[
                    {
                        label:'red',
                        backgroundColor:['#FFB900','#E74856','#0078D7'],
                        data: [10,30,50,66,78,90]
                    },
                    {
                        label:'green',
                        backgroundColor:['rgba(255,140,0 ,1)','rgba(0,120,215 ,1)','rgba(195,0,82 ,1)'],
                        data: [70,20,66,100,89,76]
                    }
                ]
            }
        },
        radar:{
            data:{
                labels: ['1','2','3','4','5','6'],
            //    labels:['red','green','null'],
                datasets:[
                    {
                        label:'مردان',
                        backgroundColor:['rgba(234,0,94 ,0.5)'],
                        data: [10,30,50,66,78,90]
                    },
                    {
                        label:'زنان',
                        backgroundColor:['rgba(177,70,194 ,0.5)'],
                        data: [70,20,66,100,89,76]
                    }
                ]
            }
        },
        bar:{
            data:{
                labels: ['1','2','3','4','5','6'],
            //    labels:['red','green','null'],
                datasets:[
                    {
                        label:'مردان',
                        backgroundColor:['rgba(247,99,12 ,0.7)','rgba(247,99,12 ,0.5)','#C30052','#C30052','#C30052','#C30052'],
                        data: [10,30,50,66,78,90]
                    },
                    {
                        label:'زنان',
                        backgroundColor:['#00B294','#00B294','#00B294','#00B294','#00B294','#00B294'],
                        data: [70,20,66,100,89,76]
                    }
                ]
            }
        }
       

    }
    render(){
        return(
            <Fragment>
                <Card>
                    <CardContent>
                         {/* doughnut */}
                    {/* <Doughnut
                options={{
                    responsive:true
                }}
                data={this.state.donat.data}
             /> */}
{/* 
             <Pie
           
             data={this.state.pie.data}

             
             
             
             /> */}
{/* <Radar
data={this.state.radar.data}

/> */}
        <Bar
        options={{reponsive:true}}
            data={this.state.bar.data}
            />

                    </CardContent>
                </Card>
            
            



                

            </Fragment>
        )
    }
}