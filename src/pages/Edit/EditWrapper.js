import React from 'react';
import styled from 'styled-components';

const EditWrapper = styled.div`
    width: 100%;

    space-white: nowrap;

    h1 {
        -webkit-text-fill-color: white; 
        -webkit-text-stroke: 2px black;
        font-size: calc(2.5rem + 4.5vw)
    }

    .btn-dark{
        background-color: #282A30 !important;
        width: 25%;
    }

    input{
        border-radius: 7px;
        border: 1px solid #C9C9C9;
    }

    button{
        border-radius: 7px;
    }
`

export default EditWrapper;