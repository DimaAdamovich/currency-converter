import React, {useReducer} from 'react';
import {COMMON_TYPE} from '../types';
import {commonReducer} from "./commonReducer";
import {CommonContext} from "./CommonContext";
import {exchangeRequests} from "../../utils/api";

export const CommonState = ({children}) => {
    const [state, dispatch] = useReducer(commonReducer, {
        currenciesRates: [],
        currenciesList: [],
        baseCurrency: 'USD'
    });

    const setBaseCurrency = async (currency) => {
        dispatch({type: COMMON_TYPE.SET_BASE_CURRENCY, payload: currency});
        const {data} = await exchangeRequests.getLatest(currency)
        if (data) {
            const currenciesRates = Object.entries(data.rates)
                .map(e => ({currency: e[0], value: e[1]}))
            const currenciesList = currenciesRates.map(item => item.currency)
            if (!currenciesList.includes(currency)) {
                currenciesList.push(currency)
            }
            currenciesRates.sort(
                (a, b) => {
                    if (a.currency < b.currency) return -1
                    if (a.currency > b.currency) return 1
                    return 0
                })
            currenciesList.sort()
            dispatch({
                type: COMMON_TYPE.SET_CURRENCIES, payload: {
                    currenciesRates,
                    currenciesList
                }
            });
        }
    };

    return (
        <CommonContext.Provider
            value={{
                currenciesRates: state.currenciesRates,
                currenciesList: state.currenciesList,
                baseCurrency: state.baseCurrency,
                setBaseCurrency
            }}
        >
            {children}
        </CommonContext.Provider>
    );
};
