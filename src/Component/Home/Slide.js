import { Box, makeStyles,Typography,Button,Divider} from "@material-ui/core";
import React from "react";
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { products } from "../../Constant/Data";
import Countdown from 'react-countdown';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};

const useStyle = makeStyles(theme=>({
    component:{
        marginTop:12,
        background: '#FFFFFF'
    },
    image:{
        height:150,
        width:"auto",
    },
    deal: {
        display: 'flex',
        padding: '15px 20px'
    },
    text: {
        fontSize: 14,
        marginTop: 5
    },
    dealText: {
        fontSize: 22,
        fontWeight: 600,
        lineHeight: '32px',
        marginRight: 25
    },
    timer: {
        color: '#7f7f7f',
        marginLeft: 10,
        display: 'flex',
        alignItems: 'center'
    },
    button: {
        marginLeft: 'auto',
        backgroundColor: '#2874f0',
        borderRadius: 2,
        fontSize: 13
    },
    wrapper: {
        padding: '35px 15px'
    },
    timer: {
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    }
}))
const Slide = ({timer,title}) =>{
    const classes = useStyle();
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    const renderer = ({ hours, minutes, seconds }) => {
        return <span className={classes.timer}>{hours} : {minutes} : {seconds}  Left</span>;
    };

    return(
        <Box className={classes.component}>
            <Box className={classes.deal}>
                <Typography className={classes.dealText}>{title}</Typography>
                { timer && 
                   <Box className={classes.timer}>
                                <img src={timerURL} style={{ width: 24 }} alt='time clock' />
                                <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
                        </Box>
                }
                <Button variant="contained" color="primary" className={classes.button}>View All</Button>
            </Box>
                <Divider />
        <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={10000}
        keyBoardControl={true}
        showDots={false}
        swipeable={false}
                draggable={false}>
            
            
            {
                products.map(data =>(
                    <Box textAlign="center" className={classes.wrapper}>
                    <img src={data.url} className={classes.image} />
                    <Typography className={classes.text} style={{ fontWeight: 600, color: '#212121' }}>{data.title.shortTitle}</Typography>
                    <Typography className={classes.text} style={{ color: 'green' }}>{data.discount}</Typography>
                    <Typography className={classes.text} style={{ color: '#212121', opacity: '.6' }}>{data.tagline}</Typography>
                </Box>
                    ))
                }
        </Carousel>
                </Box>
    )
}

export default Slide;