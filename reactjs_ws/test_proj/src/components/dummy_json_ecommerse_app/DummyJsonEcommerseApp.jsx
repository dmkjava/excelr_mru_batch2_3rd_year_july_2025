import {useState, useEffect} from 'react'
import './ecommerse_app.css'
function DummyJsonEcommerseApp(){
    const [productsList, setProductsList] =  useState([]);

    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then(result=>result.json())
        .then(data=>{
            console.log(data);
            setProductsList(data.products)
        })
    }, [])
    return (
        <div className='container'>
            <h3>DummyJson Ecommerse App</h3>
            
            <div className='flex-container'>
                {
                    productsList.map(product=>{
                        return <div key={product.id}
                            className='card'
                            style={{maxWidth: "250px"}}
                        >
                            <img src={product.images[0]} 
                                className='card-top-image'
                            alt=""></img>
                            <div>
                                <h5>{product.title}</h5>
                                <h5>{product.price}$</h5>
                            </div>
                        </div>
                    })
                }
            </div>


        </div>
    )
}
export default DummyJsonEcommerseApp;