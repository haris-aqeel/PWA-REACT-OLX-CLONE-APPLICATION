import React from 'react'
import './style.css'
const DisplayAdd = (props) => {
    
    const {id, title, price, description, category, image} = props;
    
    return (
        <div className='displayAdd'>
            <div className='row'>
                <div className='col col-lg-8 col-md-12 col-sm-12 col-12'>
                <div className="carousel-item image" >
                    <img src={image} alt="..." />ssssssssssssssssssssss
                </div>
                </div>
                <div className='col col-lg-4 col-md-12 col-sm-12 col-12'>
                    
            </div>
            </div>
        </div>
    )
}

export default DisplayAdd
