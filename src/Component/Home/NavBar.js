import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import { navData } from "../../Constant/Data";

const useStyle = makeStyles(theme => ({
    component: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0px 130px 0 130px',
        overflowX: 'overlay',
        '& > *': {
            color: "black",
            textDecoration: 'none',
            cursor:"pointer",
        },
        [theme.breakpoints.down('md')]: {
            margin: 0
        }
    },
    container: {
        padding: '12px 8px',
        textAlign: 'center'
    },
    image: {
        width: 64
    },
    text: {
        fontSize: 14,
        fontWeight: 600,
        fontFamily: 'inherit'
    },
    women: {
        height: 60
    },
    men: {
        marginTop: 5
    }
}));

const NavBar = () => {
    const classes = useStyle();
    const history = useHistory();
    return (
        <Box>
<Box className={classes.component}>
            {
                navData.map(temp => (
                    <Box className={classes.container} onClick={() => {  history.push("/MainDetailPage", { data: temp.id }) }}>
                        <img src={temp.url} className={classes.image} />
                        <Typography className={classes.text}>{temp.text}</Typography>
                    </Box>
                ))
            }
        </Box>
        </Box>
    )
}

export default NavBar;