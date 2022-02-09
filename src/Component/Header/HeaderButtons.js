import { Badge, Box, Button,makeStyles, Typography } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import {React,useEffect,useState} from "react";
import { Link, useHistory } from "react-router-dom";
import Login from "../Login/Login";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { handleDrawerVisibility } from "../../components/redux/action";
import { HANDLE_DRAWER_VISIBILITY, HANDLE_LOGIN_VISIBILITY } from "../../components/redux/actions-type";

const useStyle = makeStyles({
    container: {
        display: 'flex',
       cursor:"pointer"
    },
    wrapper :{
        margin: '0 5px 0 auto', 
        display: 'flex',   
        '& > *':{
            
                marginRight: 40,
                textDecoration: 'none',
                color: '#FFFFFF',
                fontSize: 12,
                alignItems: 'center',
        },
    },
    login :{
        color: 'black',
        background: '#FFFFFF',
        textTransform: 'none',
        fontWeight: 600,
        borderRadius: 2,
        padding: '5px 40px',
        height: 32,
        boxShadow: 'none',
    }
})
const HeaderButtons = () =>{
    const classes = useStyle();
    const cartList = useSelector((state)=>state.cartList);
    const names = useSelector((state)=>state.name);
    console.log("email is login useselector:",names);
    const dispatch = useDispatch()
  const useremail = localStorage.getItem("email")


    const handleDrawerOpen = (status) => {
        dispatch(handleDrawerVisibility(HANDLE_DRAWER_VISIBILITY, status));
        console.log("check email is :",names);
      };
      const handleLoginOpen = (status) => {
        dispatch(handleDrawerVisibility(HANDLE_LOGIN_VISIBILITY, status));
      };
      useEffect(()=>{
        console.log("check email is :",names);

    },[handleDrawerOpen])


    return(
        <Box className={classes.wrapper}>
            {!localStorage.getItem("email","password") ? <Button variant="contained" onClick={ ()=> handleLoginOpen(true)} className={classes.login}>login</Button>:  <Typography>{useremail} </Typography> }
           
            <Box className={classes.container} onClick={handleDrawerOpen}>
            
                <Badge badgeContent={cartList.length} color="secondary">
                    <ShoppingCart/>
                </Badge>
               
                <Typography style={{marginLeft:"5px"}}>Cart</Typography>
               
                
            </Box>
            <Login />
        </Box>
    )
}

export default HeaderButtons