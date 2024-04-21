import {useEffect, useState} from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import {useNavigate, Link, Navigate} from "react-router-dom";
import '../styles/main.css'
import AddIcon from '@mui/icons-material/Add';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
document.title="Tours"

let isLoggedIn = false
if(localStorage.getItem('access_token')!==null){
  isLoggedIn = true;
}

export default function Main(){

    useEffect(() => {
        if(isLoggedIn === false){                   
            window.location.href = '/login'
        }
        else{
         (async () => {
           try {
             const {data} = await axios.get(   
                            '/', {
                             headers: {
                                'Content-Type': 'application/json'
                             }}
                           );
          } catch (e) {
            console.log('not auth')
          }
         })()};
     }, []);




  return(
     <div>
    {/* If the user is logged in, render: */}
      {isLoggedIn ? (

    <div className="home-container">
      <span className="home-text">My Tours</span>
      <div className="home-container2 px-4">
        <Button variant="contained" color="success" endIcon={<AddIcon />}>
          Create Tour
        </Button>
      </div>
      <div className="home-container3">
        ola
      </div>
    </div>







      ) : (<></>)
      }
    </div>
  )


}