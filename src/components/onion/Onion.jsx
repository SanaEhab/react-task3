import React, { useEffect, useState } from 'react'

function Onion() {
    let [onion, setOnion] = useState([]);
    const getOnion = async()=>{
        let respone = await fetch("https://forkify-api.herokuapp.com/api/search?q=onion");
        let onionData = await respone.json();
        setOnion(onionData.recipes)
    }

    useEffect (()=>{
        getOnion();
    },[]
    )


  return (
    <div className='row mt-5 pt-5 '>
        { onion.map((ele)=>{
            return <div className='col-md-4 px-3 pt-5' key={ele.recipe_id}>
              <h4>{ele.title}</h4>
              <img src={ele.image_url} alt="onion-image" className='w-25' />
            </div>
        })

        }
    </div>
  )
}

export default Onion