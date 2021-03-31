import React, {useContext} from 'react'
import {AppPage} from "../components/AppPage";
import {Grid, makeStyles, MenuItem, TextField} from "@material-ui/core";
import {CommonContext} from "../context/common/CommonContext";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    title: {
        margin: theme.spacing(4, 0, 2),
    },
}));

export const ExchangeRatesPage = () => {
    const classes = useStyles();
    const {currenciesList, currenciesRates, baseCurrency, setBaseCurrency} = useContext(CommonContext)

    const handleChange = (event) => {
        setBaseCurrency(event.target.value)
    };


    return (
        <AppPage>
            <TextField
                id="outlined-select-currency"
                select
                label="Валюта"
                value={baseCurrency}
                onChange={handleChange}
                helperText="Выберерите базовую валюту"
                variant="outlined"
            >
                {currenciesList.map((option) => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </TextField>
            <div>
                <Typography variant="h6" className={classes.title}>
                    Курсы валют на сегодня
                </Typography>
                <Grid container spacing={3}>
                    {currenciesRates
                        .filter(item => item.currency !== baseCurrency)
                        .map(item => (
                            <Grid key={item.currency} item xl={4} lg={4} md={6} sm={12} xs={12}>
                                <Typography variant='h6'>
                                    {`1 ${item.currency} = ${item.value.toFixed(4)} ${baseCurrency}`}
                                </Typography>
                            </Grid>
                        ))}
                </Grid>
            </div>
        </AppPage>
    )
}
