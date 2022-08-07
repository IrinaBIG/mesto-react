import React from 'react';
// import headerCss from './Header.css';
import headerLogo from '../images/Vector.svg';

function Header() {
    return (
        <div className='header'>
            <img className="logo" src={headerLogo} alt="логотип Mesto" />
        </div>
    );
}

export default Header;