import React, {Component} from "react";
import { render } from "react-dom";
import Login from "./login";
import NavPanel from "./nav";
import SiderDemo from "./temp";



import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
  

export default class App extends Component{
    constructor(props){
        super(props);
    }


    render(){
        

        return(
            <div>
                <NavPanel/>
                <Router>
                    <Route path="/login/" component={Login}/>
                    <Route path="/" exact component={SiderDemo} />
                </Router>
                
            </div>
           
        );
    }
    
}



const appDiv = document.getElementById("app");
render(<App />, appDiv);


