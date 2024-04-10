import React, { Component, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Checkbox, FormControlLabel } from "@mui/material";
import Alert from '@mui/material/Alert';
import { positions } from '@mui/system';
import {useNavigate, Link, json} from "react-router-dom";
import axios from "axios";

export default function Login(){
        document.title="Login"

        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const [error, setError] = useState('');
        const [unauthorizedMessage, setUnauthorizedMessage] = useState("");
        const handleLogin = async () => {
          try {
            /* const response = await axios.post('/api/login/', {
              username: username,
              password: password */
              const user = {
                username: username,
                password: password
               };
          // Create the POST request
                const {data} = await                                                                            
                         axios.post('/token/',
                         user ,{headers: 
                        {'Content-Type': 'application/json'},
                         withCredentials: true});
            localStorage.setItem('access_token', data.access);
            localStorage.setItem('refresh_token', data.refresh);
            axios.defaults.headers.common['Authorization'] = `Bearer ${data['access']}`;
            
            //Successful login
            window.location.href='/'          
          }catch(error){
            //if the credentials dont match/exist
             if(error.response.status==401){
              setUnauthorizedMessage("Invalid credentials!");
            } 
          }
        };


    

        return (
            <main className="container d-flex justify-content-center align-items-center">
        {/* <h1 className="text-black text-uppercase text-center my-4">Todo app</h1> */}
        <div className="row">
          <div>
          <img src="./images/logo.png" height="250" width="250" className="mx-4 mb-5"></img>
            <div className="card px-4" style={{borderRadius:"20px", width:300}}>
              <h2 style={{textAlign:"center"}}>Sign in to your Tours account</h2>
              {unauthorizedMessage && <Alert severity="error">{unauthorizedMessage}</Alert>}
              <div className="mt-4" style={{fontFamily:"PT Mono", color: "#5B5A5A"}}>
               Username
              </div>
              <TextField value={username} size="small" sx={{mb: 3}} onChange={(e)=> setUsername(e.target.value)}/>
              <div style={{fontFamily:"PT Mono", color: "#5B5A5A"}}>
                Password
              </div>
              <TextField value={password} type="password" size="small" onChange={(e)=> setPassword(e.target.value)}/>
              {/* {this.renderTabList()} */}
              <div class="input-group pm-form-group">
              <div class="flex space-between">
              <FormControlLabel control={<Checkbox/>} label={<span style={{ fontSize: '12px', fontFamily:"PT Mono"}}>Stay signed in</span>}/>
                <a class="trouble-signing-in-link" style={{fontSize:"11px"}}
                  href="/trouble-signing-in">Forgot password?</a>
              </div>
            </div>
            <Button variant="contained" onClick={handleLogin} style={{background:"#3282B8"}}>Sign in</Button>
            <div class="my-2" style={{textAlign:"center", fontFamily:"PT Mono"}}>
              or
            </div>
            
            <Button variant="outlined" component={Link} to="/register" style={{background:"white", color:"black", border:"1px solid black"}}>Register</Button>
            
              <ul className="list-group list-group-flush border-top-0">
                {/* {this.renderItems()} */}
              </ul>
            </div>
          </div>
        </div>
        
      </main>
        )
    }
  