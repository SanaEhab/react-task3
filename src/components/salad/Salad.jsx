import React, { useEffect, useState } from 'react'

function Salad() {

    let [salad,setSalad] = useState([]);
    const getSalad = async()=>{
        let respo = await fetch ("https://forkify-api.herokuapp.com/api/search?q=salad");
        let saladData = await respo.json();
        setSalad(saladData.recipes);
    }

    useEffect (()=>{
        getSalad();
    },[]

    )

  return (
    <div className='row mt-5 pt-5'>
        { salad.map((ele)=>{
            return <div className='col-md-4 px-3 pt-5' key={ele.recipe_id}>
                <h4>{ele.title}</h4>
                <img src={ele.image_url} alt="salad-image" className='w-25' />
            </div>
        })

        }
    </div>
  )
}

export default Salad