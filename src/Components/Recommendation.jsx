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
            <h4>Fresh recommendations</h4>
            <div className='recommendation__component__list'>
            {data.map((current)=> {
              return <DisplayCard 
              key={current.id}
              title={current.title}
              description = {current.description}
              img={current.image}
              /> 
            })}
            
            
            </div>
            
        </div>
    )
}

export default Recommendation 
