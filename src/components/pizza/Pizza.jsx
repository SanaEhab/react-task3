import React, { useEffect, useState } from 'react'

function Pizza() {
    let [pizza, setPizza] = useState([]);

    const getPizza = async ()=>{
        let respon = await fetch ("https://forkify-api.herokuapp.com/api/search?q=pizza");
        let pizzaData = await respon.json();
        setPizza(pizzaData.recipes);
    }

    useEffect( ()=>{
        getPizza();
    }, [] )


    return (
        <div className='row mt-5 pt-5 '>
        {
            pizza.map((ele)=>{
                return <div className='col-md-4 px-3 pt-5' key={ele.recipe_id}>
                    <h4>{ele.title}</h4>
                    <img src={ele.image_url} alt="pizza-image" className='w-25' />
                </div>
            }
            )
        }

    </div>
      )
}

export default Pizza