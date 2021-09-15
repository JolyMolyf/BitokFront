import React , {useState, useEffect} from 'react'
import './offers.scss'




const Offers = (props:any) => {

    const [offer, setOffer] = useState({
        name: 'Volkswagen Gold IV',
        localization: 'Mazowia, Warsaw',
        price: '1300 $'
    });

    useEffect(()=>{

    }, [])

    return(
        <div className='offers-header'>
            <div className='offers-header-item'><p className='offers-header-item-name'>{offer.name}</p></div>
            <div className='offers-header-item'><p className='offers-header-item-loc'>{offer.localization}</p></div>
            <div className='offers-header-item'><p className='offers-header-item-price'>{offer.price}</p></div>
            <div className='offers-header-item'></div>
        </div>
    )
    
}


export default Offers