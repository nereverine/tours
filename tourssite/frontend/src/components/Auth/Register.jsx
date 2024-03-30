import React, { Component, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Checkbox, FormControlLabel, Box } from "@mui/material";
import { positions } from '@mui/system';
import {useNavigate, Link} from "react-router-dom";
import bcrypt from "bcryptjs";
import axios from 'axios';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

document.title="Register"


export default function Register(){
     const [email, setEmail] = useState("");
     const [username, setUsername] = useState("");
     const [password, setPassword] = useState("");
     const [firstName, setFirstName] = useState("");
     const [lastName, setLastName] = useState("");
     const [errors, setErrors] = useState({});
     const [successMessage, setSuccessMessage] = useState("");


    const validateForm = () => {
      const errors = {};

      if (!username.trim()){
        errors.username = 'Username is required';
      }

      if (!email.trim()){
        errors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(email)){
        errors.email = 'Email is invalid';
      }

      if (!password.trim()) {
        errors.password = 'Password is required';
      }

      if (!firstName.trim()){
        errors.firstName = 'First name is required';
      }

      if (!lastName.trim()){
        errors.lastName = 'Last name is required';
      }

      setErrors(errors);
      return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      if(validateForm()){
        try {
          //Check if the username already exists
          const checkUsernameResponse = await axios.get(`/api/user/?username=${username}`);
          if (checkUsernameResponse.data.length > 0) {
            setErrors({ ...errors, username: 'Username already exists'});
            return;
          }

          //Check if the email already exists
          const checkEmailResponse = await axios.get(`/api/user/?email=${email}`);
          if (checkEmailResponse.data.length > 0) {
            setErrors({...errors, email:"Email already exists"});
            return;
          }

          //Hash the password
          const hashedPassword = await bcrypt.hash(password,10);
          //Create the user
          /* const response = await axios.post('/api/users/', {
            username,
            email,
            password: hashedPassword,
            first_name: firstName,
            last_name: lastName,}); */
            setSuccessMessage("Account created successfully!")
          //You can handle success response here
        } catch (error) {
          console.error("Error creating user:", error);
          // You can handle error response here
        }
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
                  <TextField size="small" value={firstName} helperText={errors.firstName} onChange={(e)=> setFirstName(e.target.value)}></TextField>
                </div>
                <div class="col-sm">
                  <div className="mt-4" style={{fontFamily:"PT Mono", color: "#5B5A5A"}}>
                  Last Name
                  </div>
                  <TextField value={lastName} helperText={errors.lastName} onChange={(e)=>setLastName(e.target.value)} size="small"></TextField>
                </div>
              </div>

              <div className="mt-4" style={{fontFamily:"PT Mono", color: "#5B5A5A"}}>
                Email
              </div>

              <TextField 
              required 
              value={email}  
              inputProps={{type: "email",}}
              size="small" sx={{mb: 3}}
              helperText={errors.email}
              onChange={(e)=>setEmail(e.target.value)}/>
              <div style={{fontFamily:"PT Mono", color: "#5B5A5A"}}>
                Username
              </div>

              <TextField size="small" sx={{mb: 3}} value={username} helperText={errors.username} onChange={(e)=> setUsername(e.target.value)}/>

              <div style={{fontFamily:"PT Mono", color: "#5B5A5A"}}>
                Password
              </div>

              <TextField type="password" value={password} helperText={errors.password} onChange={(e) => setPassword(e.target.value)} size="small"/>

              <div class="input-group pm-form-group">
            </div>
            {successMessage && <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">{successMessage}</Alert>}
            <Button className="mt-4" variant="contained" style={{background:"#3282B8"}} type="submit">Register</Button> 
            
            </div>
          </div>
        </div>
        
      </main>
      </Box>
    )

}


    