import React, { useEffect, useState } from 'react'

function Products() {

    let [products, setProducts] = useState([]);

    const getProducts = async()=> {
        let reponse = await fetch ("https://fakestoreapi.com/products?authuser=1");
        let proData = await reponse.json();
        setProducts(proData);
    }

    useEffect( ()=>{
        getProducts();
    }, [])


  return (
    <div className='row mt-5 pt-5 '>
        {
            products.map((ele)=>{
                return <div className='col-md-4 px-3 pt-5' key={ele.id}>
                    <h4>{ele.title}</h4>
                    <img src={ele.image} alt="product-image" className='w-25' />
                </div>
            }
            )
        }

    </div>
  )
}

export default Products