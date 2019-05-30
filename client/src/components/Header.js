import React, { Component, Fragment } from "react";
import "../css/Header.css";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: {
      main: '#f44336',
    },
  },
});
export default class extends Component {
  render() {
    return (
      <div className="Header">
          <img src="/img/2.png" alt="logo"/>
          <span>آمار ایران</span>
         
      </div>
    );
  }
}
