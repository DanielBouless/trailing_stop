import {  useState } from "react"
import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"


const Home = ()=>{

    const [ coinData, setCoinData ] = useState({
        name: '',
        price: '---',
    })
    
    const fetchProductData = async(e)=>{
        e.preventDefault()
        if( coinData.name.length > 2 ){
            const fetchData = async ()=>{
                const response = await fetch(`http://localhost:5050/cat/product`,
                    {
                        method: "GET",
                        headers:{
                            "Content-Type":"application/json"
                        },
                    }
                )
                const data = response.json()
                console.log(data)
                
            }
            fetchData()
        } else {
            setCoinData({...coinData, price: '---'})
        }
        
    }

    
    return(
        
        <>
            <Form onSubmit={(e)=>fetchProductData(e)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Search Crypto Coin</Form.Label>
                    <Form.Control type="text" placeholder="Enter TOKEN TICKER, i.e. BTC" onChange={(e)=> setCoinData({...coinData, name: (e.target.value).toUpperCase()+"-USD"})}/>
                </Form.Group>
            </Form>
            <Card>
                <Card.Body>
                    Name {coinData.name}    
                </Card.Body>
                 <Card.Body>
                    Price {coinData.price}    
                </Card.Body>
                
            </Card>
            <Button type="submit">Search</Button>
        
        </>
    )
}

export default Home
