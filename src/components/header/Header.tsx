import React from 'react'
import './header.scss'
import phoneIcon from '../../imgs/header/phoneIcon.png'

const Header = () => {


    return(
        <div className="header">
            <div className="header-menu">
                <div className="header-menu-item hover-underline-animation">Home</div>
                <div className="header-menu-item hover-underline-animation">Offers</div>
                <div className="header-menu-item hover-underline-animation">Calculator</div>
                <div className="header-menu-item hover-underline-animation">Contacts</div>
                <div className="header-menu-item hover-underline-animation">LogIn</div>
            </div>
            <div className="header-phone">
                <img src={phoneIcon}></img><p>+ (48) 663-207-664</p>
            </div>
        </div>
    )
}


export default Header