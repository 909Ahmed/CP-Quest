import React, { useState } from 'react'
import saveContext from "./savecontext";


function SaveState(props) {

    const host = "http://localhost:5000"

    const [probs, setprobs] = useState([]);
    const [alert, setAlert] = useState(null);
    
    const getquest = async () =>{
      const response = await fetch(`${host}/api/quest/getquest`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token')
        }
      });
      const json = await response.json();
      setprobs(json);
      return json;
    }

    const solvequest = async (name) =>{
      const response = await fetch(`${host}/api/auth/solvequest`, {
        method: "POST",
        headers: {
          "auth-token": localStorage.getItem('token'),
          "Content-Type": "application/json",
        }, body : JSON.stringify({name})
      });
      // eslint-disable-next-line
      const json = await response.json();
    }

    const contest = async () =>{
      const response = await fetch(`${host}/contest`, {
        method: "GET"
      });
      let data = await response.json();
      return data;
    }

    const getUser = async () =>{
        const response = await fetch(`${host}/api/auth/Userdet`, {
          method: "POST",
          headers: {
            "auth-token": localStorage.getItem('token'),
          },
        });
        const json = await response.json();
        return json;
    }

    const solved = async () =>{
      const response = await fetch(`${host}/api/auth/Userdet`, {
        method: "POST",
        headers: {
          "auth-token": localStorage.getItem('token'),
        },
      });
      const json = await response.json();
      return json.problems;
    }
    
    const addquest = async (contestId ,index ,name ,rating ,tags) =>{
        const response = await fetch(`${host}/api/quest/addquest`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem('token')
          }, body: JSON.stringify({contestId ,index ,name ,rating ,tags})
        });
        const json = await response.json();
        setprobs(probs.concat(json))
    }

    const delquest = async (id) =>{
        const response = await fetch(`${host}/api/quest/delquest/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem('token')
          }
        });
        // eslint-disable-next-line
        const json = await response.json();

        const newprobs = probs.filter((prob)=>{return prob._id!==id})
        setprobs(newprobs)
    }

    const showAlert = (message) => {
      setTimeout(() => {
        setAlert(message)
      }, 250);
      setTimeout(() => {
        setAlert(null)
      }, 2000);
    }

    return (
    <>
        <saveContext.Provider value={{probs,getquest,addquest,delquest,solvequest,getUser,alert,showAlert,solved,contest}}>
            {props.children}
        </saveContext.Provider>
    </>
  )
}

export default SaveState