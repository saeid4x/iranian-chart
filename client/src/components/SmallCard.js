import React ,{Component} from 'react';

import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import '../css/SmallCard.css'


export default class extends Component{
    render(){
        return(
           <section className="smallCard">
               <Card>
                   <CardContent>
               <section className="smallCard-left">
                   <div className=""> <span>[unit]</span><span>5000000</span>   </div>
                   <hr/>
                   <div className=""> <span>تعداد مردان ایرانی </span></div>
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
