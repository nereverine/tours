import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Checkbox, FormControlLabel } from "@mui/material";
import { positions } from '@mui/system';

export default class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
          activeItem: this.props.activeItem,
        };
    }

    render() {

        return (
            <main className="container d-flex justify-content-center align-items-center">
        {/* <h1 className="text-black text-uppercase text-center my-4">Todo app</h1> */}
        <div className="row">
          <div>
          <img src="./images/logo.png" height="250" width="250" className="mx-4 mb-5"></img>
            <div className="card px-4" style={{borderRadius:"20px", width:300}}>
              <h2 style={{textAlign:"center"}}>Sign in to your Tours account</h2>
              <div className="mt-4" style={{fontFamily:"PT Mono", color: "#5B5A5A"}}>
                Email or username
              </div>
              <TextField id="textfield-user" size="small" sx={{mb: 3}}/>
              <div style={{fontFamily:"PT Mono", color: "#5B5A5A"}}>
                Password
              </div>
              <TextField id="textfield-password" type="password" size="small"/>
              {/* {this.renderTabList()} */}
              <div class="input-group pm-form-group">
              <div class="flex space-between">
              <FormControlLabel control={<Checkbox/>} label={<span style={{ fontSize: '12px', fontFamily:"PT Mono"}}>Stay signed in</span>}/>
                <a class="trouble-signing-in-link" style={{fontSize:"11px"}}
                  href="/trouble-signing-in">Forgot password?</a>
              </div>
            </div>
            <Button variant="contained" style={{background:"#3282B8"}}>Sign in</Button>
            <div class="my-2" style={{textAlign:"center", fontFamily:"PT Mono"}}>
              or
            </div>
            <Button variant="outlined" style={{background:"white", color:"black", border:"1px solid black"}}>Register</Button>
              <ul className="list-group list-group-flush border-top-0">
                {/* {this.renderItems()} */}
              </ul>
            </div>
          </div>
        </div>
        
      </main>
        );
    }


}