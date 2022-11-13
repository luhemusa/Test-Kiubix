import { useState } from 'react';
import axios from 'axios';
import { URL_BASE } from '../constants'


export const useGetData = () => {
    const [data, setData] = useState([])
    const getData = async () => {
        try {
            const result = await axios.get(URL_BASE)
            setData(result.data)
        } catch (error) {
            console.log(error)
        }
    }
    return [data , getData]
}