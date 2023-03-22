import React from 'react';
import bannerImage from '../../assets/image/new_banner.png'
import './banner.css'


function Banner(props) {
    return (
        <>
        <div className="bannerBox" style={{ backgroundImage: `url(${bannerImage})` }}>
            <div className='row'>
                <br></br>
                <h6 className="label">{props.title}</h6>
            </div>
        </div>
        </>
    );
}

export default Banner;