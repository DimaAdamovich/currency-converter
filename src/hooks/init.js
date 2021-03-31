import {useContext, useEffect} from "react";
import {CommonContext} from "../context/common/CommonContext";


export function useInit(){
    const {setBaseCurrency} = useContext(CommonContext)
    const baseCurrency = localStorage.getItem('baseCurrency')
    useEffect( () =>{
        setBaseCurrency(baseCurrency || 'USD')
    }, [])
}
