import { createContext } from 'react';

export const CommonContext = createContext({
    baseCurrency: '',
    currenciesRates: [],
    currenciesList: [],
    setBaseCurrency: () =>{}
});
