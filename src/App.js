import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Navbar from'./components/Navbar'
import Search from './components/Search'
import './App.css';

export default class App extends Component{
  render(){
    return(
     <MuiThemeProvider>
       <div>
         <Navbar/>
         <Search/>
       </div>
     </MuiThemeProvider>
    )
  }
}
