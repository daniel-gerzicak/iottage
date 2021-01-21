import React, {Component} from "react";
import { render } from "react-dom";
import Login from "./login";

export default class App extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(<h1>Welcome home</h1>);
    }
    
}



const appDiv = document.getElementById("home");
render(<App />, appDiv);

//render(<Login/>,document.getElementById("login") )
