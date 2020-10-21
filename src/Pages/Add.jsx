import React, {useEffect, useState}  from 'react'
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Data from '../Services/Data';
import DisplayAdd from '../Components/Widgets/DisplayAdd'
const Add = () => {
    const link = window.location.href;
    const addNumber = +link.split('/add/')[1]
    
    const [data, setData] = useState([])

    useEffect(()=>{

        let collectData = async() => {
        let data = await Data();
        setData(data)
        }

        collectData();
    },[])
   
    return (
        <div>
            <Header />
           
            <Navbar />
            { data !== undefined && data.length > 0?
            <DisplayAdd 
            id={data[addNumber].id}
            title={data[addNumber].title}
            price={data[addNumber].price}
            description = {data[addNumber].description}
            category={data[addNumber].category}
            image = {data[addNumber].image}/>
            : <p>Loading</p>}
        </div>
    )
}

export default Add
