import React, {Component} from "react";
import {Grid, Typography} from '@material-ui/core';

export default class Sticker extends Component{

    constructor(props){
        super(props);
        this.state={

        };

    }

    render(){
        const msg = this.props.text;
        const value = this.props.val;
        

        return(
            <div>
                 <Grid
                container
                spacing={1}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ backgroundColor: 'whitesmoke', width:'100%', borderWidth:"2", borderStyle: "solid", borderColor: '#4dd2ff'}}
                >
                    <Grid item align="center" style={{ width:'100%'}}>
                        <Typography >
                            {msg}   {value}
                        </Typography>
                    </Grid>
                </Grid>

            </div>

        )
    }


}
