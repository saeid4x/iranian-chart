import React ,{Component} from 'react';

import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import '../css/SmallCard.css'


export default class extends Component{
    render(){
        return(
           <section className={`smallCard  ${this.props.cardClass}`}>
               <Card>
                   <CardContent>
               <section className="smallCard-left">
                   <div className=""> <span>{this.props.cardUnit}</span><span> {this.props.cardNumber}</span>   </div>
                   <hr/>
                   <div className=""> <span>{this.props.cardTitle}</span></div>
                </section>
                <section className="smallCard-right">
                    <img src="./img/2.png"/>
                    

                </section>
              
                    </CardContent>
                  </Card>
               </section>
        );
    }
}
