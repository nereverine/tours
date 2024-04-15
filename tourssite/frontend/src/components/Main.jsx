import {useEffect, useState} from "react";
import axios from "axios";
import Button from '@mui/material/Button';
import {useNavigate, Link, Navigate} from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import '../styles/main.css'
import AddIcon from '@mui/icons-material/Add';
document.title="Tours"

let isLoggedIn = false
if(localStorage.getItem('access_token')!==null){
  isLoggedIn = true;
}

const tourItems = [

];


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
    <div className="home-container" style={{display:"grid"}}>
      <span className="home-text">My Tours</span>
      <div className="home-container2" style={{display:"flex", justifyContent:"flex-end"}}>
        <Button color="success" variant="contained" className="justify-content-end" endIcon={<AddIcon />}>Create Tour</Button>
      </div>
      
    </div>
      
    
    
  )


}