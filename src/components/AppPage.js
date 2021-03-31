import {Container} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(6),
    },
}));

export const AppPage = ({children}) =>{
    const classes = useStyles();
    return <Container maxWidth="md" classes={classes}>
        {children}
    </Container>
}
