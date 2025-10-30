import React from 'react'
import '../../../App.css'
const ShowImages = () => {
    return (
        <div className='ShowImagesContainer'>
            <div className="ShowImageLeft">
                <img src="/images/banner5.jpg" alt="DriedFruits" />
            </div>
            <div className="ShowImageCenter">
                <img src="/images/banner6.jpg" alt="DriedFruits" />
            </div>
            <div className="ShowImageRight">
                <img src="/images/banner7.jpg" alt="freshBread" />
                <img src="/images/banner8.jpg" alt="seaFood" />
            </div>
        </div>
    )
}

export default ShowImages