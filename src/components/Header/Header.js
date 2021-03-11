import React from 'react';
import Banner from '../../images/banner img.jpg'
import './Header.css'

const Header = () => {
    return (
        <div className="">
            <div>
                <img className = "banner-img" src={Banner} alt="..."/>
                <div className="centered">
                    <h1 className="header-title">PREMIER LEAGUE</h1>
                </div>
            </div>
        </div>
    );
};

export default Header;