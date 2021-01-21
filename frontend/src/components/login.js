import React, { Component } from "react";
import { render } from "react-dom";


export default class Login extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(<h1>Welcome Login</h1>);
    }
    
}



const appDiv = document.getElementById("login");
render(<Login />, appDiv);


