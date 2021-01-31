import React, { Component } from "react";
import { render } from "react-dom";

import { Grid, TextField, Button, Typography, Box, Paper } from "@material-ui/core";
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
        fetch('/user/login', requestOpions).then((response) => {
            if (response.ok){
                this.props.history.push('/home/')
            } else {
                this.setState({error: "Invalid login"})
            }
        }).catch((error) => {
            console.log(error);
        });
    }

    

    render(){

        const useStyles = makeStyles(theme => ({
            color: {
            backgroundColor: 'black'
            }
        }));

        
        return(

            
        <div style={{ 
            position: 'absolute',
            left: '50%',
            top: '40%',
            transform: 'translate(-50%, -50%)',
            width: "30%",
            height: "25%"
            
            }}>
           <ThemeProvider theme={theme}>
            
           <Grid
                container
                spacing={1}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ backgroundColor: 'whitesmoke', width:'100%', borderWidth:"2", borderStyle: "solid", borderColor: '#4dd2ff'}}
                >
                
                <Grid item align="center" style={{ width:'100%'}}>
                    <Typography variant="h4" component="h4">
                        Login
                    </Typography>
                </Grid>

                <Grid item xs={12} align="center" style={{ width:'120%'}}>
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

                    />
                </Grid>

                <Grid item xs={12} align="center" style={{ width:'100%'}}>
                    < TextField
                        id="password"
                        label="Password"
                        placeholder="Enter your Password"
                        variant="outlined"
                        onChange={this.passwordFieldHandler}
                        error={this.state.error}


                    />
                </Grid>

                <Grid item xs={12} align="center">
                    <Button variant='outlined' color='primary' onClick={this.postData}>
                        Sign In
                    </Button>
                </Grid>

            </Grid>
           
        </ThemeProvider>
        
        </div>
        
        
        ); 
    }
    
}






