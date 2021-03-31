export const exchangeRequests = {
    getLatest: async (base) => {
        let data, error
        try{
            let response = await fetch('https://api.exchangeratesapi.io/latest?base=' + base);
            data = await response.json();
        }catch (e) {
            error = e
        }

        return {data, error}
    },
    getRate: async (base, symbol) => {
        let rate, error
        try{
            let response = await fetch(`https://api.exchangeratesapi.io/latest?base=${base}&symbols=${symbol}`);
            response =  await response.json();
            if(response.rates){
                rate = response?.rates[symbol]
            }else {
                error = response.error
            }

        }catch (e) {
            error = e.message
        }

        return {rate, error}
    }

}
