import React, {useEffect, useState} from 'react'
import './Recommendation.css'

import DisplayCard from '../Components/Widgets/DisplayCard' 
import Data from '../Services/Data'

const Recommendation = () => {
  
  const [data, setData] = useState([])
  
  useEffect(()=>{

    let collectData = async() => {  
      let data = await Data();
      setData(data)
    }

    collectData();

  },[])

  

    return (
        <div className='recommendation__component'>
          {data !== undefined? 
          <>
            <h4 style={{textAlign: 'center'}}>Fresh recommendations</h4>
            <div className='recommendation__component__list'>
            {data?.map((current)=> {
             return current.id !== 20 ? 
             <DisplayCard 
              id={current.id}
              key={current.id}
              title={current.title}
              description = {current.description}
              img={current.image}
              price= {current.price} 
              number= {current.number}
              name = {current.name}
              email = {current.email}
              category = {current.category}
              location= {current.location}
              />: null 
            })} 
            </div>
            </>: null}
            
        </div>
    )
}

export default Recommendation 
