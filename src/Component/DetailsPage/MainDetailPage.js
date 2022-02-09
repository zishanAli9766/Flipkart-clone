import { Card, CardActionArea, CardContent, CardMedia,Button, Typography, LinearProgress } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation,useHistory } from 'react-router-dom';
import "./Search.css"
import { handleDrawerVisibility, manipulateCart } from '../../components/redux/action';
import { ADD_TO_CART, HANDLE_DRAWER_VISIBILITY, REMOVE_FROM_CART } from '../../components/redux/actions-type';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from '../Home/NavBar';
import { Box } from '@mui/system';

const MainDetailPage = () => {
  const [data, setData] = useState([]);
  const [isLoaderVisible, setIsLoaderVisible] = useState(false);
  const location = useLocation()
  const history = useHistory();
  const cartList = useSelector((state) => state.cartList);
  const dispatch = useDispatch();

  useEffect(() => {
    GetData();

    console.log('data : ,', location)
  }, [location])

  const GetData = async() => {
    setIsLoaderVisible(true);
  await  axios
      .get(`https://fakestoreapi.com/products/category/${location?.state?.data}`).then((resp) => {
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


  return (
   <>
   <NavBar/>
    <div style={{ width: "100%", marginTop: "50px" }}>

<div className="cardContainer">
{isLoaderVisible &&   <Box sx={{ width: '50%',marginTop:"16%",marginLeft:"25%" }}>
      <LinearProgress />
    </Box>}
  {!isLoaderVisible && data?.map((item) => {
         return (
      
      <Card sx={{ maxWidth: 250, margin: "20px" ,height:410 }} >
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={item.image}
            
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" className='titles'>
              {item.title}
            </Typography>
              </CardContent>
        </CardActionArea>
          {!cartList.some((data) => data.id === item.id) ? (
              <Button onClick={() => handleAddToCart(item)} style={{backgroundColor:"#ff9f00",color:"#FFFFFF",fontSize:18,marginLeft:10,marginRight:20,width:150,marginBottom:5}}>
                Add To Cart
              </Button>
            ) : (
              <>
              <Button onClick={() => handleDrawerOpen(true)} style={{backgroundColor:"#ff9f00",color:"#FFFFFF",fontSize:18,marginLeft:10,marginRight:20,width:150,marginBottom:5}}>
                Go To cart
              </Button>
               {/* <Button onClick={() => handleDelete(item.id)}>
               Remove From Cart
             </Button> */}
              </>
            )}
             <Button onClick={()=>{history.push("/detailspage",{data:item.id})}} style={{backgroundColor:"#2874f0",color:"#FFFFFF",fontSize:18,marginLeft:10,marginRight:20,width:180}}>
               More Details
             </Button>
      </Card>
    );
  })}
</div>
</div>
   </>
    );
}

export default MainDetailPage;