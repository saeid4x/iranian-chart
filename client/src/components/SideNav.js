import React, { Component } from "react";
import "../css/SideNav.css";
import {Link} from 'react-router-dom';
import Icon from '@material-ui/core/Icon'
// import Paper from '@material-ui/core/Card'

export default class extends Component {
  render() {
    return (
      <section className="sidenav">
        <section className="sidenav-avatar">
            <img src='./img/2.png' />
            <span><a href="#" target="_blank">سعید ایمانی </a></span>
            <hr/>
         </section>

        <section className="sidenav-cat">
            <div>  <Icon> check_circle_outline</Icon><Link to="/iran/cat/HeramSeni"><span>      نمودار هرم سنی ایران</span> </Link> </div><br/>
            <div>  <Icon> check_circle_outline</Icon> <Link to="/iran/cat/population "><span>   نمودار جمعیت ایران   </span> </Link> </div><br/>
            <div>  <Icon> check_circle_outline</Icon><Link to="/iran/cat/emigrant "><span>  نمودار جمعیت مهاجر ایران    </span> </Link> </div><br/>
            <div>  <Icon> check_circle_outline</Icon><Link to="/iran/cat/students "><span>    نمودار آمار دانشجویان ایران  </span> </Link>  </div><br/>
            <div>  <Icon> check_circle_outline</Icon><Link to="/iran/cat/gdp"><span>    نمودار تولید ناخالص ملی ایران  </span> </Link> </div><br/>
     
            
           
            {/* <ul>
                <li><Link to="/iran/cat/eramSeni">   نمودار هرم سنی جمعیت ایران  </Link> </li>
                <li><Link to="/iran/cat/population">   نمودار جمعیت ایران  </Link> </li>
                <li><Link to="/iran/cat/emigrant">   نمودار جمعیت مهاجر ایران  </Link> </li>
                <li><Link to="/iran/cat/students">   نمودار آمار دانشجویان ایران  </Link> </li>
                <li><Link to="/iran/cat/gdp">     نمودار  تولید ناخالص ملی ایران</Link> </li>
            </ul> */}



        </section>
      </section>
    );
  }
}
