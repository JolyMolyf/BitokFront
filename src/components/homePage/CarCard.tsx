import React from 'react'
import './carCard.scss'
import carSample from '../../imgs/homepage/carSample.webp'
const CarCard = (props:any) =>{


    return(
        <div className='carCard'>
            <div className='carCard-image'>
                <div className='carCard-image-fade'></div>
                <img className='carCard-image-item' src={carSample}></img>
            </div>
            <div className='carCard-details'>
                <div className='carCard-details-header'>Volksvagen Golf IV </div>
                <div className='carCard-details-price'>2300 zl</div>
            </div>
        </div>
    )
}


export default CarCard;