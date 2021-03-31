import React, {useContext, useState} from 'react'
import {AppPage} from "../components/AppPage";
import {TextField} from "@material-ui/core";
import {CommonContext} from "../context/common/CommonContext";
import {exchangeRequests} from "../utils/api";


export const ConverterPage = () => {
    const {currenciesList} = useContext(CommonContext)
    const [value, setValue] = useState('')
    const [result, setResult] = useState('')
    const [error, setError] = useState('')

    const onChange = async (e) => {
        setResult('')
        setError('')
        let value = e.target.value
        setValue(value)
        let [count, base, _, symbol] = value.split(' ')
        if (count && base && symbol) {
            if(!Number.isFinite(+count)){
                setError(`Введите число`)
                return
            }
            if(base.length === 3 && symbol.length === 3){
                base = base.toUpperCase()
                symbol = symbol.toUpperCase()
                if(!currenciesList.includes(base)){
                    setError(`Валюта ${base} не поддерживается`)
                    return
                }
                if(!currenciesList.includes(symbol)){
                    setError(`Валюта ${symbol} не поддерживается`)
                    return
                }
                const {rate, error} = await exchangeRequests.getRate(base, symbol)

                if (rate) {
                    const resultRate = (+count * +rate).toFixed(2)
                    setResult(`${resultRate} ${symbol}`)
                }else {
                    setResult(error.toString())
                }
            }
        }
    }
    return (
        <AppPage>
            <TextField id="standard-basic" label="Введите выражение" variant="outlined"
                       helperText="пример: 15 USD in RUB" value={value} onChange={onChange}/>
            {result && <h2>
                Результат: {result}
            </h2>}
            {error && <h2>
                Ошибка: {error}
            </h2>}
        </AppPage>
    )
}
