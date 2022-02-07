import React from 'react';
import styled from 'styled-components';

const MainWrapper = styled.div`
    width: 100%;

    h3{
        font-weight: 600;
        font-size: 30px;
    }

    h1 {
        -webkit-text-fill-color: white; 
        -webkit-text-stroke: 2px black;
        font-size: calc(2.5rem + 4.5vw)
    }

    .plus{
        font-size: 27px;
        border: 2px solid black;
        height: 46px;
        width: 46px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        border-radius: 10px;
        margin-top: 40px;
        margin-bottom: 50px;
    }

    .line{
        margin-top: 100px;
        width: 100%;
        height: 2px;
        background-color: #282A30 !important;
    }

    .alg{
        background: #143043;
        border-radius: 20px;
        margin-bottom: 80px;
    }

`

export default MainWrapper;