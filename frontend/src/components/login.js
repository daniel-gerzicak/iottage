import React, { Component } from "react";
import { render } from "react-dom";

import { Grid, TextField, Button, Typography, Box } from "@material-ui/core";
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';
import theme from './theme';
import { ThemeProvider } from '@material-ui/core/styles';

export default class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            error: "",
        };

        this.usernameFieldHandler = this.usernameFieldHandler.bind(this);
        this.passwordFieldHandler = this.passwordFieldHandler.bind(this);
        this.postData = this.postData.bind(this);
    }

    usernameFieldHandler(e){
        this.setState({
            username: e.target.value,
        });
    }

    passwordFieldHandler(e){
        this.setState({
            password: e.target.value,
        });
    }

    postData(){
        const requestOpions = {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
            })
        };
        console.log(requestOpions.body);
        fetch('/user/login', requestOpions).then((response) => {
            if (response.ok){
                this.props.history.push('/')
            } else {
                this.setState({error: "Invalid login"})
            }
        }).catch((error) => {
            console.log(error);
        });
    }

    

    render(){

        
        return(

        <div>
           <ThemeProvider theme={theme}>
            <Grid container spacing={1} alignItems="baseline" justify="center" variant="outlined" border={1} direction="row">
                
                <Grid item xs={12} align="center">
                    <Typography variant="h4" component="h4">
                        Login
                    </Typography>
                </Grid>

                <Grid item xs={12} align="center" >
                    < TextField
                        id="userfield"
                        label="Username"
                        placeholder="Enter your Username"
                        variant="outlined"
                        onChange={this.usernameFieldHandler}
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <AccountCircle />
                              </InputAdornment>
                            ),
                          }}
                        style ={{width: '30%'}}

                    />
                </Grid>

                <Grid item xs={12} align="center">
                    < TextField
                        id="password"
                        label="Password"
                        placeholder="Enter your Password"
                        variant="outlined"
                        onChange={this.passwordFieldHandler}
                        style ={{width: '30%'}}

                    />
                </Grid>

                <Grid item xs={12} align="center">
                    <Button variant='outlined' color='primary' onClick={this.postData}>
                        Sign In
                    </Button>
                </Grid>

            </Grid>
        <h3>update  damn was{this.username}</h3>
        </ThemeProvider>
        </div>
        
        
        ); 
    }
    
}






