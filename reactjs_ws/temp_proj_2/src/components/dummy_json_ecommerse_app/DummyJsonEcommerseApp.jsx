import {useState, useEffect} from 'react'
import './ecommerse_app.css'
function DummyJsonEcommerseApp(){
    const [productsList, setProductsList] =  useState([]);
    const [categoriesList, setCategoriesList] = useState([]);
    const [category, setCategory] =  useState('');

    // fetching default products
    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then(result=>result.json())
        .then(data=>{
            console.log(data);
            setProductsList(data.products)
        })
    }, [])
    // fetching products categories list 
    useEffect(()=>{
        fetch('https://dummyjson.com/products/category-list')
        .then(result=>result.json())
        .then(data=>{
            console.log('fetching products categories list ');
            
            console.log(data);
            setCategoriesList(data)
            // setProductsList(data.products)
        })
    }, [])

    // fetching search result
    const search = ()=>{
        // alert(category)
        fetch('https://dummyjson.com/products/category/'+category)
        .then(result=>result.json())
        .then(data=>{
            console.log('fetching search result ');
            
            console.log(data);
            setProductsList(data.products)
        })
    }
    return (
        <div className='container'>
            <h3>DummyJson Ecommerse App</h3>
            <div className="row my-4">
                <div className="col-3 text-end">
                    <label htmlFor="">Enter Intem for Searching</label>
                </div>
                <div className="col-6">
                    {/* <input type="text" className="form-control" /> */}
                    <select name="" id="" className='form-control'
                        style={{textTransform: 'capitalize'}}
                        onChange={ e=> setCategory(e.target.value)}
                    >
                        {
                            categoriesList.map(category=>{
                                return <option value={category} key={category}
                                    style={{textTransform: 'capitalize'}}
                                >{category}</option>
                            })
                        }
                        
                    </select>
                </div>
                <div className="col-3 text-start">
                    <button className="btn btn-primary"
                        onClick={search}
                    >Seach</button>
                </div>
            </div>
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