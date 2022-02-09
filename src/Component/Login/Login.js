// import { Dialog, DialogContent, makeStyles } from "@material-ui/core";
// import React, { useEffect } from "react";
// import LoginForm from '../../LoginForm/LoginForm'

// const useStyle = makeStyles({
// component:{
//     height:"72vh",
//     width:"90vh"
// }
// })

// const Login = ({open,setOpen}) =>{
//     const classes = useStyle()
//     useEffect(()=>{
//         {!localStorage.getItem("email","password")&& openLoginDailog()}
//     },[])
//     const openLoginDailog = () =>{
//         setOpen(true);
//     }
// const handleClose = () =>{
//     setOpen(false);
// }
//     return(
//         <Dialog open={open} onClose={handleClose}>
//             <DialogContent className={classes.component}>
//                 {/* <LoginForm/> */}
//             </DialogContent>
//         </Dialog>
//     )
// }

// export default Login ;
import React, { useEffect, useState} from 'react';
import { Dialog, DialogContent, TextField, Box, Button, makeStyles, Typography } from '@material-ui/core';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { handleDrawerVisibility, manipulateCart } from '../../components/redux/action';
import { ADD_TO_EMAIL, HANDLE_LOGIN_VISIBILITY } from '../../components/redux/actions-type';
import { useHistory } from 'react-router-dom';
import NavBar from '../Home/NavBar';
// import { useHistory } from 'react-router-dom';

const useStyle = makeStyles({
    component: {
        height: '72vh',
        width: '90vh',
        maxWidth: 'unset !important'
    },
    image: {
        backgroundImage: `url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,
        background: '#2874f0',
        backgroundPosition: 'center 85%',
        backgroundRepeat: 'no-repeat',
        height: '72vh',
        width: '40%',
        padding: '45px 35px',
        '& > *': {
            color: '#FFFFFF',
            fontWeight: 600
        }
    },
    login: {
        padding: '25px 35px',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        '& > *': {
            marginTop: 20
        }
    },
    loginbtn: {
        textTransform: 'none',
        background: '#FB641B',
        color: '#fff',
        height: 48,
        borderRadius: 2
    },
    requestbtn: {
        textTransform: 'none',
        background: '#fff',
        color: '#2874f0',
        height: 48,
        borderRadius: 2,
        boxShadow: '0 2px 4px 0 rgb(0 0 0 / 20%)'
    },
    text: {
        color: '#878787',
        fontSize: 12
    },
    createText: {
        margin: '5px 0 5px 0',
        textAlign: 'center',
        color: '#2874f0',
        fontWeight: 600,
        fontSize: 14,
        cursor: 'pointer'
    },
    error: {
        fontSize: 10,
        color: '#ff6161',
        lineHeight: 0,
        marginTop: 10,
        fontWeight: 600
    }
})

const accountInitialValues = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here",
        subHeading: 'Signup to get started'
    }
}

const Login = () => {
    const classes = useStyle();
    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    const [error, showError] = useState(false);
    const [account, toggleAccount] = useState(accountInitialValues.login);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [data, setData] = useState([])
    const dispatch = useDispatch();
    const history = useHistory();
    const isLoginVisbible = useSelector((state)=>state.isLoginVisbible);
    console.log("is login main wale ka:",isLoginVisbible);
    const names = useSelector((state)=>state.name);
    console.log("email is login useselector:",names);

    useEffect(()=>{
        {!localStorage.getItem("email","password")&& handleLoginOpen(true)}
    },[])

    const handleAddToEmail = (email) => {
        dispatch(manipulateCart(ADD_TO_EMAIL, [ ...names,email]));
        console.log("first email",email);
      };

    const handleLoginOpen = (status) => {
        dispatch(handleDrawerVisibility(HANDLE_LOGIN_VISIBILITY, status));
       };
       // this is use for submit a form 
      const SubmitForm = (e) => {
        e.preventDefault();
        if (email && password) {


            const newEntry = { email: email, password: password }
            setData([...data, newEntry])
            handleAddToEmail(email);


            axios
            .post("https://reqres.in/api/login", newEntry).then((res) => { console.log(res.data); history.push("/") }).catch((err) => {
                console.log(err?.response?.data?.error)
                alert(err?.response?.data?.error)
              })
            localStorage.setItem("email", email)
            localStorage.setItem("password", password)

            setEmail("");
            setPassword("");
            handleLoginOpen(false);
        } else {
            alert("Please Fill Valid Email/Password ☢✔")
        }
    }
    // this is use for signup a form
    const signups = (e) => {
        e.preventDefault();
        if (email && password) {


            const newEntry = { email: email, password: password,username:username }
            setData([...data, newEntry])
            handleAddToEmail(email);


            axios
            .post("https://reqres.in/api/login", newEntry).then((res) => { console.log(res.data); history.push("/") }).catch((err) => {
                console.log(err?.response?.data?.error)
                alert(err?.response?.data?.error)
              })
            localStorage.setItem("email", email)
            localStorage.setItem("password", password)
            localStorage.setItem("username", username)
           

            setEmail("");
            setPassword("");
            setUsername("");
            setPhone("");
            handleLoginOpen(false);
          
        } else {
            alert("Please Fill Valid Email/Password ☢✔")
        }
    }
    // this is use for change login to signup 
    const toggleSignup = () => {
        toggleAccount(accountInitialValues.signup);
    }

    

    return (
        <>
        {/* {!localStorage.getItem("email","password") && <NavBar/>} */}
       
        <Dialog open={isLoginVisbible} onClose={()=>{handleLoginOpen(false); toggleAccount(accountInitialValues.login);}}>
            <DialogContent className={classes.component} >
                <Box style={{ display: 'flex' }}>
                    <Box className={classes.image}>
                        <Typography variant="h5">{account.heading}</Typography>
                        <Typography style={{ marginTop: 20 }}>{account.subHeading}</Typography>
                    </Box>
                    {
                        account.view === 'login' ?
                            <Box className={classes.login}>
                                <TextField value={email}
                                    onChange={(e) => setEmail(e.target.value)} name='email' label='Enter Email/Mobile number' />
                                {error && <Typography className={classes.error}>Please enter valid Email ID/Mobile number</Typography>}
                                <TextField value={password}
                                    onChange={(e) => setPassword(e.target.value)} name='password' label='Enter Password' />
                                <Typography className={classes.text}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                                <Button className={classes.loginbtn} onClick={ SubmitForm} >Login</Button>
                                <Typography className={classes.text} style={{ textAlign: 'center' }}>OR</Typography>
                                <Button className={classes.requestbtn}>Request OTP</Button>
                                <Typography className={classes.createText} onClick={() => toggleSignup()}>New to Flipkart? Create an account</Typography>
                            </Box> :
                            <Box className={classes.login}>
                                <TextField value={username}
                                    onChange={(e) => setUsername(e.target.value)} name='username' label='Enter Username' />
                                <TextField value={email}
                                    onChange={(e) => setEmail(e.target.value)} name='email' label='Enter Email' />
                                <TextField value={password}
                                    onChange={(e) => setPassword(e.target.value)} name='password' label='Enter Password' />
                                <TextField value={phone}
                                    onChange={(e) => setPhone(e.target.value)} name='phone' label='Enter Phone' />
                                <Button className={classes.loginbtn} onClick={signups} >Continue</Button>
                            </Box>
                    }
                </Box>
            </DialogContent>
        </Dialog>
        </>
    )
}

export default Login;