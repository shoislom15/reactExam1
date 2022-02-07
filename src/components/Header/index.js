import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import logo from '../../images/Furniutr.png'
import HeaderWrapper from './HeaderWrapper';

const Header = () => {

    return <>
        <HeaderWrapper>
            <div className="container py-5 px-sm-3 d-flex align-items-center justify-content-between">
                <div className="logo">
                    <img src={logo} className="w-100" alt="" />
                </div>
                <button className="btn p-0">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </HeaderWrapper>
    </>
}

export default Header;
