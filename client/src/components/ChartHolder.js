import React,{Component} from 'react';
import LineChart from './LineChart';
import BarChart from './BarChart';
import PiChart from './PiChart';
import RadarChart from './RadarChart';


export default class extends Component{

    render(){
        return(
            <section className="ChartHolder">
                
                   
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