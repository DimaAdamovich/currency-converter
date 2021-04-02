import {API_KEY} from "../key";

export const exchangeRequests = {
    getLatest: async (base) => {
        let data, error
        try{
            let response = await fetch(`https://api.exchangeratesapi.io/latest?access_key=${API_KEY}&base=` + base);
            response = await response.json();
            if(response.success){
                data = response
            }else {
                error = response.error.info
            }
        }catch (e) {
            error = e
        }

        return {data, error}
    },
    getRate: async (base, symbol) => {
        let rate, error
        try{
            let response = await fetch(`https://api.exchangeratesapi.io/latest?access_key=${API_KEY}&base=${base}&symbols=${symbol}`);
            response =  await response.json();
            if(response.success){
                rate = response?.rates[symbol]
            }else {
                error = response.error.info
            }

        }catch (e) {
            error = e.message
        }

        return {rate, error}
    }

}
