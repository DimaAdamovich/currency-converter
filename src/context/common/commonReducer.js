import {COMMON_TYPE} from "../types";

export const commonReducer = (state, action) => {
    switch (action.type) {
        case COMMON_TYPE.SET_CURRENCIES: {
            return {
                ...state,
                currenciesRates: action.payload.currenciesRates,
                currenciesList: action.payload.currenciesList,
            };
        }
        case COMMON_TYPE.SET_BASE_CURRENCY: {
            localStorage.setItem('baseCurrency', action.payload)
            return {
                ...state,
                baseCurrency: action.payload
            };
        }

        default: {
            return state;
        }
    }
};
