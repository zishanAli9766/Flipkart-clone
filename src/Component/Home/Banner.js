import { makeStyles } from "@material-ui/core";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { bannerData } from "../../Constant/Data";

const useStyle = makeStyles({
    image:{
        width:"100%",
        height:280
    },
    carousel:{
        marginTop:5,
    }
   
})
const Banner = ()=>{
    const classes = useStyle()
    return (

        <div>
            <Carousel className={classes.carousel} 
            autoPlay={true} animation="slide" indicators={false} navButtonsAlwaysVisible={true}
            cycleNavigation={true} navButtonsProps={{
                style:{
                    background:"#FFFFFF",
                    color:"#494949",
                    borderRadius: 0,
                    margin: 0,
                    width: 50,
                }
            }}
            >
                {
                    bannerData.map(image=>(
                        <img src={image} className={classes.image} alt="" />
                    ))
                }
            </Carousel>
        </div>
    )
}

export default Banner;