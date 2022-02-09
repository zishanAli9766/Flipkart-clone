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
        if (emailValidator.test(email) && passwordValidator.test(password)) {
            
            
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
        <div>
             <div class="box">
       <form action="" className='Formbox'>
       <div class="row">
          <div class="col-sm-5 col-xs-1 box1">
            <div class="inline-text">
              <h1>Login</h1>
              <p>
                Get access to your Orders,<br />
                Wishlist and<br />
                Recomadations
              </p>
            </div>
          </div>
          <div class="col-sm-6 col-xs-1 box2">
            <div class="user-id user-data">
              <input type="Email " name="email" id="Email" required
              value={email}
              onChange={(e)=>setEmail(e.target.value)}/>
              <label>Enter Email/Mobile Number</label>
            </div>
            <div class="user-id user-data">
              <input type="password" name="password" id="password" required
              value={password}
              onChange={(e)=>setPassword(e.target.value)}/>
              <label>Enter Password</label>
              
            </div>
            <Link><span className='Forgot'>Forgot?</span></Link>
                
            <div class="user-id button">
            <button type="submit" onClick={SubmitForm } style={{width:"150px"}}>Sign</button>
            </div>
            <div class="user-id">
            <p>OR</p>
        </div>
            <div class="user-id button">
              <input type="reset" name="" id="" value="Request OTP" />
            </div>
            <div class="user-id">
              <p class="footer"><Link>New to Flipkart? Create an account</Link></p>
            </div>
          </div>
        </div>
       </form>
      </div>
        </div>
    )
}

export default Pr
