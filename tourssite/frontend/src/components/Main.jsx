import {useEffect, useState} from "react";
import axios from "axios";
import { Button } from "reactstrap";
import {useNavigate, Link, Navigate} from "react-router-dom";
document.title="Tours"

let isLoggedIn = false
if(localStorage.getItem('access_token')!==null){
  isLoggedIn = true;
}

export default function Main(){
alert(localStorage.getItem('access_token'));
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
        <Button>Logged in</Button>
      ) : (<></>)
      }
    </div>
  )


}