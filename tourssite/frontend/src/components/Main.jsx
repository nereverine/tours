import {useEffect, useState} from "react";
import axios from "axios";
import { Button } from "reactstrap";
import {useNavigate, Link, Navigate} from "react-router-dom";
document.title="Tours"

export default function Main(){

    useEffect(() => {
        if(localStorage.getItem('access_token') === null){                   
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
    //If the user is logged in, render:
      {localStorage.getItem('access_token') ? (
        <Button>Logged in</Button>
      ) : (<></>)
      }
    </div>
  )


}