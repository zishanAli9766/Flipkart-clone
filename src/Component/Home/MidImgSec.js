import React from 'react';
import {makeStyles} from '@material-ui/core';
import clsx from 'clsx';
import {ImageURL} from "../../Constant/Data"

const useStyle = makeStyles(theme => ({
    wrapper: {
        display: 'flex',
        marginTop: 20,
        justifyContent: 'space-between'
    },
    image: {
        width: '100%'
    },
    help: {
        [theme.breakpoints.down('md')]: {
            objectFit: 'cover',
            height: 120,
        }
    }
}));

function MidImgSec() {
    const classes = useStyle();
    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
  return (
      <>
  <div className={classes.wrapper}>
     {
         ImageURL.map((image)=>(
             <img src={image } className={classes.image} style={{width:"33%"}}/>
             ))
            }
  </div>
  <img src={url}  style={{width: '100%',objectFit: 'cover',
            height: 220 ,marginTop: 20,}} />
       
            </>
  );
}

export default MidImgSec;
