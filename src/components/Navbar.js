import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link, useLocation} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        marginRight: theme.spacing(2),
        cursor: 'pointer'
    },
}));

export const NavBar = () => {
    const classes = useStyles();
    let location = useLocation();
    return(
        <AppBar position="static" color="default">
            <Toolbar>
                <Link to="/">
                    <Typography variant="h6" className={classes.title}
                                color={location.pathname === '/'? 'primary' : 'initial'}>
                        Конвертер из одной валюты в другую
                    </Typography>
                </Link>
                <Link to="/rates">
                    <Typography variant="h6" className={classes.title}
                                color={location.pathname === '/rates'? 'primary' : 'initial'}>
                        Текущие курсы валют
                    </Typography>
                </Link>
            </Toolbar>
        </AppBar>
    )
}
