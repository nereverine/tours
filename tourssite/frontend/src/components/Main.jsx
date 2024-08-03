import {useEffect, useState} from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import {useNavigate, Link, Navigate} from "react-router-dom";
import '../styles/main.css'
import AddIcon from '@mui/icons-material/Add';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { jwtDecode} from "jwt-decode";
document.title="Tours"

const token = localStorage.getItem('access_token')
//const userId = jwtDecode(token).user_id

let isLoggedIn = false
if(token!==null){
  isLoggedIn = true;
}

export default function Main(){
  const [state, setState] = useState({
    toursList:[],
  })

  const refreshList = () => {
    axios.get("/tours", {
       params: { 
        //userId: userId
      } 
    })
      .then((res) => setState({ toursList: res.data })); alert(state.toursList)
      .catch((err) => console.log(err));
  };

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
         refreshList();
     },  
      []);

  


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
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4}>
        <Grid item xs={8}>
          <Card>xs=8</Card>
        </Grid>
        <Grid item xs={4}>
          <Card>xs=4</Card>
        </Grid>
        <Grid item xs={4}>
          <Card>xs=4</Card>
        </Grid>
        <Grid item xs={8}>
          <Card>xs=8</Card>
        </Grid>
      </Grid>
    </Box>
      </div>
      
    </div>







      ) : (<></>)
      }
    </div>
  )


}