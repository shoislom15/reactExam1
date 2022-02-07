import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Card from '../../components/Card';
// import Data from '../../data/Data';
import MainWrapper from './MainWrapper';
import alg from "../../images/image.png"
import Data from '../../data/Data';

const Main = ({ setArrId }) => {

    const { data, setData } = React.useContext(Data);

    console.log(data);

    return <MainWrapper>
        <div className="container pt-2 px-sm-5 text-center">
            <h3 className="text-center fs-3">Barchasini ko'rish / qo'shish / o'zgartirish / o'chirish paneli</h3>
            <h1 className="text-center fw-bold mb-4">Mahsulotlar</h1>
            <NavLink to="add">
                <button className="btn fs-24 plus">
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </NavLink>

            <div className="row">
                {data.map((obj, index) => {
                    return <>
                        <Card title={obj.title} price={obj.price} id={index} img={obj.img} key={index} setArrId={setArrId} />
                    </>
                })}
            </div>
            <div className="line mb-5"></div>
            <button className="w-100 btn alg py-4">
                <img src={alg} alt="img" />
            </button>
        </div>
    </MainWrapper>
}

export default Main;