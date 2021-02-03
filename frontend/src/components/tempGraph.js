import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';



export default class TempGraph extends PureComponent {

    constructor(props){
        super(props);
        this.state={
            temp : ""
        };
    }

    async componentDidMount() {
        const response = await fetch('/sensors/temp/');
        const data = await response.json();
        this.setState({temp : data});
        
    }
    

  render() {
    if (!jQuery.isEmptyObject(this.state.temp)) {
        var temperatures = this.state.temp;

        temperatures = temperatures.filter(entry => entry.sensor == this.props.sensor);
        temperatures = temperatures.filter(entry => Date.now()-Date.parse(entry.datetime) < 3600000 * this.props.hours );
       
        var tempArray = []

        for (var i=0; i < temperatures.length; i++){

            var testDate = Date.parse(temperatures[i].datetime);
            var myDate = new Date(testDate);
            var datehour = myDate.getHours().toString() + ":" + myDate.getMinutes().toString();
            
            tempArray.push({
                time: datehour,
                Teplota: temperatures[i].temperature
            });
        }
    }
    else{
        var temperatures = [];
    }
    
    return (
        <div style={{ backgroundColor: 'whitesmoke', width:'100%', borderWidth:"2", borderStyle: "solid", borderColor: '#4dd2ff'}}>
            <p>Teplota za 24 hodin</p>
            <ResponsiveContainer width="90%" height="80%">
            <LineChart
                data={tempArray}
                margin={{
                top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Teplota" stroke="#4dd2ff" activeDot={{ r: 8 }} />
            </LineChart>
            </ResponsiveContainer>
        </div>
    );
  }
}
