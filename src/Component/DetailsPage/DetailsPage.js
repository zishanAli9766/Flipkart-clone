import { Box, Button, Card, CardActionArea, CardContent, CardMedia, LinearProgress, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import "./Search.css"
import { CircularProgress } from "@mui/material";
import { handleDrawerVisibility, manipulateCart } from '../../components/redux/action';
import { ADD_TO_CART, HANDLE_DRAWER_VISIBILITY, REMOVE_FROM_CART, RESET_CART } from '../../components/redux/actions-type';
import { useDispatch, useSelector } from 'react-redux';

const
  Fakefolder = () => {
    const [data, setData] = useState([]);
    const location = useLocation()
    const [isLoaderVisible, setIsLoaderVisible] = useState(false);
    const cartList = useSelector((state) => state.cartList);
    const dispatch = useDispatch();
    useEffect(() => {
      GetData();

      console.log('data : ,', location)
    }, [location])

    const GetData = async () => {
      setIsLoaderVisible(true);
      await axios
        .get(`https://fakestoreapi.com/products/${location?.state?.data}`).then((resp) => {
          setData(resp.data); console.log("CardDetails", resp.data);
        }).catch((err) => {
          console.log("we Got error Card", JSON.stringify(err));
        });
      setIsLoaderVisible(false);
    }
    const handleAddToCart = (item) => {
      dispatch(manipulateCart(ADD_TO_CART, [item, ...cartList]));
      handleDrawerOpen(true);
    };
    const handleDrawerOpen = (status) => {
      dispatch(handleDrawerVisibility(HANDLE_DRAWER_VISIBILITY, status));
    };
    const handleDelete = (id) => {
      dispatch(
        manipulateCart(
          REMOVE_FROM_CART,
          cartList.filter((item) => item.id !== id)
        )
      );
    };
    const emptyCart = () => {
      dispatch(manipulateCart(RESET_CART, []));
    };
    useEffect(() => {
      console.log("Cart List from mensclothing : ", cartList);
    }, [cartList]);


    return (
      <div style={{ width: "100%", marginTop: "0px" }}>

        <div className="cardContainer">
          {isLoaderVisible &&   <Box sx={{ width: '50%',marginTop:"16%",marginLeft:"25%" }}>
      <LinearProgress />
    </Box>}

          {!isLoaderVisible && <Card sx={{ Width: 700, margin: "20px", height: 570 }}>
            <Box style={{display:"flex"}}>
              <Box>
                <CardActionArea >
                  <CardMedia
                    component="img"
                    height="400"
                    image={data.image}
                    alt="green iguana"
                    style={{
                      width: 300,
                      height: 500,
                    }}
                  />

                </CardActionArea>
              </Box>
              <Box>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" className='titles' >
                    {data.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" className='description'>
                    {data.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" style={{color:"#26a541",fontSize:"18px",margin:"5px 0px 5px 0",marginRight:"52pc"}} >
                  Special price
                  </Typography>
                  <Typography variant="body2"  color="text.secondary" className='description posi'>
                 <span style={{fontSize:"30px",margin:"0 15px 0 0"}}> ₹{data.price}</span> <del style={{fontSize:"20px",margin:"0 15px 0 5px"}}>₹599</del> <span style={{color:"#26a541",fontSize:"30px",margin:"0 15px 0 0"}}> 60% off</span>
                  </Typography>
                  <h5 style={{float:"left"}}>Available offers</h5>
                  <Box style={{marginTop:"50px"}}>
                  <h6 className="tlh">
                    🎉 Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card.
                  </h6>
                  <h6 className="tlh">
                    🎉 Bank Offer 10% Off on Bank of Baroda Mastercard debit card first
                    time transaction, Terms and Condition apply.
                  </h6>
                  <h6 className="tlh">
                    🎉 Purchase this Furniture or Appliance and Get Extra ₹500 Off on
                    Select ACs.
                  </h6>
                  <h6 className="tlh">
                    🎉 Partner OfferExtra 10% off upto ₹500 on next furniture purchase.
                  </h6>
                  </Box>
                  <Typography>{}</Typography>
                </CardContent>
              </Box>
            </Box>
            <Box style={{float:"left",marginTop:13}}>
            {!cartList.some((datas) => datas.id === data.id) ? (
              <Button onClick={() => handleAddToCart(data)} style={{backgroundColor:"#ff9f00",color:"#FFFFFF",fontSize:18, marginLeft:10,marginRight:20,width:200}}>
                Add To Cart
              </Button>
            ) : (
              <>
                <Button onClick={() => handleDrawerOpen(true)} style={{backgroundColor:"#ff9f00",color:"#FFFFFF",fontSize:18,marginLeft:10,marginRight:20,width:200}}>
                  Go To cart
                </Button>
                {/* <Button onClick={() => handleDelete(data.id)}>
                     Remove From Cart
                   </Button> */}
              </>
            )}
            <Button onClick={()=>{handleDelete(data.id);
        alert("Your Order Placed SuccessFully... 🏃‍♂️ ✔🛒")}}style={{backgroundColor:"#fb641b",color:"#FFFFFF",fontSize:18,marginLeft:10,marginRight:20,width:200}}>
                   BUY NOW
                   </Button>
                   </Box>
          </Card>}

        </div>
      </div>);
  }

export default
  Fakefolder;
