import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import Banner from "./Banner";
import MidImgSec from "./MidImgSec";
import Slide from './Slide'
import NavBar from "./NavBar"

const useStyle = makeStyles({
    component: {
        padding: 10,
        background: "#F2F2F2"
    },
    rightComponent: {
        background: "#FFFFFF",
        padding: 5,
        margin: "12px 0 0 10px",
        width: "17%",
    }
})

const Home = () => {
    const classes = useStyle()
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    return (
        <div>
            <NavBar/>
            <Box className={classes.component}>
                <Banner />
                <Box style={{ display: "flex" }}>
                    <Box className={classes.leftComponent} style={{ width: "82%" }}>
                        <Slide
                            title='Deals of the Day'
                            timer={true}
                        />
                    </Box>
                    <Box className={classes.rightComponent}>
                        <img src={adURL} style={{ width: 215, height: 352 }} />
                    </Box>
                </Box>
                <MidImgSec/>
                <Slide
                    title='Discout For You'
                    timer={false}
                    />
                <Slide
                    title='Suggested Items'
                    timer={false}
                    />
                <Slide
                    title='Grab It Now'
                    timer={true}
                    />
                     <MidImgSec/>
                <Slide
                    title='Top Selections'
                    timer={false}
                    />
                <Slide
                    title='Best Sellers'
                    timer={false}
                    />
            </Box>
        </div>
    )
}

export default Home