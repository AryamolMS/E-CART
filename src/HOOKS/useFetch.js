import { useEffect, useState } from "react"

const useFetch=(url)=>{

    //logic
    const [data,setData]=useState(null)
    useEffect(()=>{
        fetch(url).then(response=>{
            response.json().then(result=>{
                setData(result.products)
            })
        })
    },[])
    return data
}

export default useFetch;