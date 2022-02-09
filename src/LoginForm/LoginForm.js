// import React from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";
import {React,useState} from "react";
import {  useHistory } from "react-router-dom";
import './stzyle.css'

function Pr() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [data, setData] = useState([])
    let history = useHistory();

    const emailValidator = /^(([^<>().,;:\s@"]+(\.[^<>().,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const passwordValidator = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


    const SubmitForm = (e) =>{
        e.preventDefault();
        if (email && password) {
            
            
            const newEntry = {email : email, password: password}
            setData([ ...data,newEntry])
            
            
            axios
            .post("https://reqres.in/api/users",newEntry).then((res)=>{console.log(res.data); history.push("/")}).catch((err)=>{
                console.log(err)
            })
            localStorage.setItem("email",email)
            localStorage.setItem("password",password)
            
            setEmail("");
            setPassword("");
        } else {
            alert("Please Fill Valid Email/Password ☢✔")
        }
    }
    return (
        <div className='Box1'>
             <div className="box">
       <form action="" className='Formbox'>
       <div className="row">
          <div className="col-sm-5 col-xs-1 box1">
            <div className="inline-text">
              <h1>Login</h1>
              <p>
              Get access to your<br /> 
              Orders, Wishlist and<br />
                Recomadations
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-xs-1 box2">
            <div className="user-id user-data">
              <input type="Email " name="email" id="Email" required
              value={email}
              onChange={(e)=>setEmail(e.target.value)}/>
              <label>Enter Email/Mobile Number</label>
            </div>
            <div className="user-id user-data">
              <input type="password" name="password" id="password" required
              value={password}
              onChange={(e)=>setPassword(e.target.value)}/>
              <label>Enter Password</label>
              
            </div>
            <Link><span className='Forgot'>Forgot?</span></Link>
                
            <div className="user-id button">
            <button type="submit" onClick={SubmitForm } >Sign</button>
            </div>
            <div className="user-id">
            <p>OR</p>
        </div>
            <div className="user-id button">
              <input type="reset" name="" id="" value="Request OTP" />
            </div>
            <div className="user-id">
              <p className="footer"><Link>New to Flipkart? Create an account</Link></p>
            </div>
          </div>
        </div>
       </form>
      </div>
        </div>
    )
}

export default Pr
