import React, {Component} from "react";

export default class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
          items: ""
        };
        
      }
        
      async componentDidMount() {
        const response = await fetch('/sensors/sensors/');
        const data = await response.json();
        this.setState({items : data});
    }
      
    render(){
        if (!jQuery.isEmptyObject(this.state.items)) {
            var data = this.state.items;

            var result = data.find( x => x.name === "Test");

            document.getElementById("hail").innerHTML = result.id;
            
        }
        else{
            var data = [];
        }
        

        return(
        <div>
            <h1>Motherfucker</h1>{console.log(data[2])}
            <div id ="hail">

            </div>
        </div>
        )
    }
}