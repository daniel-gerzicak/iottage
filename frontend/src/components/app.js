import React, {Component} from "react";
import { render } from "react-dom";
import Login from "./login";
import Test from"./test";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

export default class App extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Router>
                    <Route path="/test/" component={Test}/>
                </Router>
                <h1> Welcome </h1>
                
            </div>
           
        );
    }
    
}



const appDiv = document.getElementById("app");
render(<App />, appDiv);


