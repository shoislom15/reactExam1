import React, { useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import Data from '../../data/Data';
import EditWrapper from './EditWrapper';

const Edit = () => {

    const params = useParams();


    const { data, setData } = React.useContext(Data);

    const [price, setPrice] = useState(data[params.id].price);
    const [title, setTitle] = useState(data[params.id].title);
    const [img, setImg] = useState(data[params.id].img);

    console.log(price);
    console.log(title);
    console.log(img);

    console.log(data);

    const newData = Object.entries(data);
    console.log(newData);

    const navigate = useNavigate();

    const add = () => {
        const newObj = [...data];

        newObj[params.id] = {
            price: price,
            title: title,
            img: img,
        };

        setData([...newObj]);

        setPrice(0);
        setTitle("");
        setImg("");
    }

    return <>
        <EditWrapper className="container pt-2 px-sm-5 text-center">
            <h3 className="text-center fs-3">Barchasini ko'rish / qo'shish / o'zgartirish / o'chirish paneli</h3>
            <h1 className="text-center fw-bold mb-4">O'zgartirish</h1>
            <form action="">
                <div className="row mb-5">
                    <div className="col-lg-6 px-2">
                        <input className="w-100 p-2 px-3 mb-3" onChange={(e) => { setImg(e.target.value) }} value={img} type="text" placeholder='Mahsulot rasmi' />
                    </div>
                    <div className="col-lg-6 px-2">
                        <input className="w-100 p-2 px-3 mb-3" onChange={(e) => { setTitle(e.target.value) }} value={title} type="text" placeholder="Mahsulot nomi" />
                    </div>
                    <div className="col-lg-6 px-2">
                        <input className="w-100 p-2 px-3 mb-3" onChange={(e) => { setPrice(e.target.value) }} value={price} type="number" placeholder="Mahsulot narhi" />
                    </div>
                </div>
                <div className="btns text-center">
                    <div className="row justify-content-center mb-5">
                        <div className="col-lg-3 col-sm-6 col-6">
                            <NavLink to="/">
                                <button className="btn text-white btn-dark mx-2 w-100" onClick={() => { }}>Ortga qaytish</button>
                            </NavLink>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-6">
                            <NavLink to="/">
                                <button className="btn text-white btn-dark mx-2 w-100" onClick={() => { add() }}>Saqlash</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </form>
        </EditWrapper>
    </>
}

export default Edit;
