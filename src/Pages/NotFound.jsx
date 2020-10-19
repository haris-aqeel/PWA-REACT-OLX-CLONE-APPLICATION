import React from 'react'
import Header from "../Components/Header";
import datanotfound from "../Images/datanotfound.png";
const NotFound = () => {
    return (
        <div>
            < Header />
            <div className='header__notfound'>
               <h4>Unfortunately! We are not able to find related data</h4> 
            </div>
            <div className='notfound'>
                <img src={datanotfound} alt='Not Found' />
            </div>
        </div>  
    )
}

export default NotFound
