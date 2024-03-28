import React, { Component, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Checkbox, FormControlLabel, Box } from "@mui/material";
import { positions } from '@mui/system';
import {useNavigate, Link} from "react-router-dom";

document.title="Register"


export default function Login(){
     const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);
    const handleEmailChange = e => {
        setEmail(e.target.value);
            if (e.target.validity.valid) {
                setEmailError(false);
            }else {
                setEmailError(true);
            }
        };
        const handleSubmit = e => {
          e.preventDefault();
          if (e.target.checkValidity()){
            alert("Form is valid! Submitting the form...");
          } else {
            alert("Form is invalid! Please check the fields");
          }
        };



    return(
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <main className="container d-flex justify-content-center align-items-center">
        <div className="row">
          <div>
          <img src="./images/logo.png" height="250" width="250" className="mx-4 mb-5"></img>
            <div className="card px-4" style={{borderRadius:"20px", width:300}}> 

              <h2 style={{textAlign:"center"}}>Create Tours account</h2>

              <div class="row">
                <div class="col-sm">
                  <div className="mt-4" style={{fontFamily:"PT Mono", color: "#5B5A5A"}}>
                  First Name
                  </div>
                  <TextField id="textfield-firstName" size="small"></TextField>
                </div>
                <div class="col-sm">
                  <div className="mt-4" style={{fontFamily:"PT Mono", color: "#5B5A5A"}}>
                  Last Name
                  </div>
                  <TextField id="textfield-lastName" size="small"></TextField>
                </div>
              </div>

              <div className="mt-4" style={{fontFamily:"PT Mono", color: "#5B5A5A"}}>
                Email
              </div>

              <TextField 
              required 
              value={email} 
              onChange={handleEmailChange} 
              error={emailError}  
              helperText={emailError ? "Please enter your email" : ""} 
              inputProps={{type: "email",}}
              id="textfield-email" size="small" sx={{mb: 3}}/>

              <div style={{fontFamily:"PT Mono", color: "#5B5A5A"}}>
                Username
              </div>

              <TextField id="textfield-user" size="small" sx={{mb: 3}}/>

              <div style={{fontFamily:"PT Mono", color: "#5B5A5A"}}>
                Password
              </div>

              <TextField id="textfield-password" type="password" size="small"/>

              <div class="input-group pm-form-group">
            </div>

            <Button className="mt-4" variant="contained" style={{background:"#3282B8"}} type="submit">Register</Button> 
            
            </div>
          </div>
        </div>
        
      </main>
      </Box>
    )

}


    