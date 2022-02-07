import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Data from '../../data/Data';
import CardWrapper from './CardWrapper';

const Card = ({ img, title, price, id, setArrId }) => {

    const { data, setData } = React.useContext(Data);

    const navigate = useNavigate();


    const edit = (id) => {
        setArrId(id);
        console.log(id);
        navigate(`/edit/${id}`)
    }

    const del = (id) => {
        console.log(id);
        let tempArr = data;
        tempArr.splice(id, 1);
        console.log(tempArr);
        setData([...tempArr]);
    }

    return <>
        <CardWrapper key={id} className=" col-6 col-lg-3 col-md-4 col-sm-6 col-xs-12 ">
            <div className="box text-center">
                <div className="img w-100 position-relative">
                    <img className="w-100" src={img} alt="" />
                    <div className="btns position-absolute">
                        <button className="btn text-warning border-warning" onClick={() => { edit(id) }}>
                            <FontAwesomeIcon icon={faPencilAlt} />
                        </button>

                        <button className="btn text-danger border-danger" onClick={() => { del(id) }} >
                            <FontAwesomeIcon icon={faTrashAlt} />
                        </button>
                    </div>
                </div>
                <h4 className="fw-bold mt-5">{title}</h4>
                <p className="fs-5 text-muted">${price}</p>
            </div>
        </CardWrapper>
    </>
}

export default Card;
