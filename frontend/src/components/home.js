import { Grid } from "@material-ui/core";
import React, {Component} from "react";
import Sticker from './sticker';
import TempGraph from './tempGraph';

export default class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
          sensors: ""
        };
        
      }
        
      async componentDidMount() {
        const response = await fetch('/sensors/sensors/');
        const data = await response.json();
        this.setState({sensors : data});
    }
      
    render(){
        if (!jQuery.isEmptyObject(this.state.sensors)) {
            var data = this.state.sensors;
            var temp = data.find( x => x.name === "Test").last_value;

        }
        else{
            var data = [];
        }
        

        return(
        <div>
            <Grid container spacing={1}  align="center" justify="center" direction="row">
                <Grid item xs = {3}>
                    <Sticker text="Aktuální teplota je:" val={temp}/>
                </Grid>
                <Grid item xs = {5}>
                    <TempGraph sensor={1} hours={24}/>
                </Grid>
            </Grid>
            
        </div>
        )
    }
}