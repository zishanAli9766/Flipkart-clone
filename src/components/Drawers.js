import React, { useEffect } from "react";

import IconButton from "@material-ui/core/IconButton";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useDispatch, useSelector } from "react-redux";
import Drawer from "@mui/material/Drawer";

import {
  Avatar,
  Button,
  Divider,
  CardActions,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { handleDrawerVisibility, manipulateCart } from "./redux/action";
import {
  HANDLE_DRAWER_VISIBILITY,
  REMOVE_FROM_CART,
  RESET_CART,
} from "./redux/actions-type";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";



export default function Drawers() {
 
  const drawerControl = useSelector((state) => state.isDrawerVisible);
  console.log("dreawerControl:", drawerControl);

  const dispatch = useDispatch();
  
  const handleVisibility = () => {
    dispatch(handleDrawerVisibility(HANDLE_DRAWER_VISIBILITY, false));
  };

  // logic for redux using useSelector and useDispatch 
  const cartList = useSelector((state) => state.cartList);
  console.log("cart list in Drawer : ", cartList);

  const handleDelete = (id) => {
    dispatch(
      manipulateCart(
        REMOVE_FROM_CART,
        cartList.filter((item) => item.id !== id)
      )
    );
    if (cartList.filter((item) => item.id !== id).length === 0) {
      handleVisibility();
    }
  };

  const emptyCart = () => {
    dispatch(manipulateCart(RESET_CART, []));
    handleVisibility();
  };

  useEffect(() => {
    console.log("useEffect : ", drawerControl);
  }, [drawerControl]);

  return (
    <>
    <div>
      <Drawer
        anchor={"right"}
        open={drawerControl}
        onBackdropClick={handleVisibility}
      >
        <div style={{ width: 400, height: "100%" }}>
        <IconButton onClick={handleVisibility}>
            <ChevronRightIcon />
          </IconButton>
          <Button onClick={emptyCart}>Empty Cart</Button>
          {/* <Divider variant="inset" component="li" /> */}
          {cartList.length === 0 && (
            <Typography sx={{ display: "inline" }}>
              No Items in Cart...
            </Typography>
          )}
          <List
            sx={{
              width: "100%",
              bgcolor: "background.paper",
              height: "100%",
            }}
          >
            {cartList?.map((item) => {
              return (
                <>
                  <ListItem alignItems="center">
                    <ListItemAvatar>
                      <Avatar alt="Remy Sharp" src={item.image} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={item?.title}
                      secondary={
                        <React.Fragment>
                          <Typography sx={{ display: "inline" }}>
                            {"  "} Price : {item?.price} ₹
                          </Typography>
                          {"  "}
                        
                        </React.Fragment>
                      }
                    />
                 <CardActions>
                    <DeleteTwoToneIcon
                      onClick={() => handleDelete(item.id)}
                    />
                  </CardActions>
                  </ListItem>
                  <Divider variant="inset" component="li" />
             
                </>
              );
            })}
          </List>
        </div>
        <Button onClick={()=>{emptyCart();
        alert("Your Order Placed SuccessFully... 🏃‍♂️ ✔🛒")}} style={{backgroundColor:"#fb641b",color:"#FFFFFF",fontSize:18, width:200}}> Buy Now</Button>
      </Drawer>
    </div>
       </>
  );
}
