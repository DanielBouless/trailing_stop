import { useState, useEffect } from "react"
import Form from "react-bootstrap/Form"


const Home = ()=>{

    const [ coinData, setCoinData ] = useState({
        name: '',
        price: 0,
    })

    useEffect(()=>{

        if( coinData.name.length() === 3 ){
            const fetchData = async ()=>{
                const response = await fetch(`https://api.coinbase.com/api/v3/brokerage/products/${coinData.name}`,
                    {
                        method: "GET",
                        headers:{
                            "Content-Type":"application/json"
                        },
                        Authorization: "Bearer Token"
                    }
                )
        
                const data = response.json()
                console.log(data)
            }
            fetchData()
        }
    }, [coinData.name])



    return(

        <>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Search Crypto Coin</Form.Label>
                    <Form.Control type="text" placeholder="Enter TOKEN TICKER, i.e. BTC" onChange={(e)=> setCoinData({...coinData, name: (e.target.value).toUpperCase()+"-USD"})}/>
                </Form.Group>
            </Form>
            {coinData.name}
        </>
    )
}

export default Home
