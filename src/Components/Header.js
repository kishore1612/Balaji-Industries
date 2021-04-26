import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Footer from './Footer';
import { Card } from '@material-ui/core';




const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    }
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>

            <Box display="flex" justifyContent="center">
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            BALAJI INDUSTRIES
                    </Typography>
                    </Toolbar>
                    {/* <ImageSlider slides={SliderData} />; */}
                </AppBar>
            </Box>
            <Box>
                <img src='/assets/boiler.jpeg' alt='' />
            </Box>
            <Card>
                <Footer />
            </Card>
        </div>
    );
}
