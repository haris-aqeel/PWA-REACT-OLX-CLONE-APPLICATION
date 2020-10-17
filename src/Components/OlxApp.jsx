import React from 'react'
import './OlxApp.css'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
const OlxApp = () => {
    return (
        <div className='olxapp__component row '>
            <div className='olxapp__component__image col col-lg-4 col-md-12 col-sm-12 col-12 '>
                <img src='https://statics.olx.com.pk/external/base/img/phone-app.png' className='img-fluid' alt='mobile Application' />
            </div>
            <div className='olxapp__component__header col col-lg-4 col-md-12 col-sm-12 col-12'>
                <h2>TRY THE OLX APP</h2>
                <p>Buy, sell and find just about anything using the app on your mobile.</p>
            </div>
            <div className='olxapp__component__applicattionicon col col-lg-4 col-md-12 col-sm-12 col-12'>
                <h6>TRY THE OLX APP</h6>
                <span>
                    <img src='https://statics.olx.com.pk/external/base/img/appstore_2x.png' alt='ios'/>
                    <img src='https://statics.olx.com.pk/external/base/img/playstore_2x.png' alt='android'/>
                </span>
            </div>
        </div>
    )
}

export default OlxApp
