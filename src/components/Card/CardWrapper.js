import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
    img{
        object-fit: cover;
        border-radius: 16px;
        max-height: 370px
    }

    .btns{
        bottom: 15px;
        text: center;
        width: 100%;
        display: none;

        .btn{
            border-radius: 9px;
            border-width: 2px; 
            margin: 7px;
        }
    }

    .box{
        &:hover{
            // .img{
            //     backdrop-filter: blur(7px);
            //     background: linear-gradient(180deg, rgba(170, 170, 170, 0) 0%, rgba(0, 0, 0, 0.46) 100%);
            //     filter: drop-shadow(0px 6px 20px rgba(0, 0, 0, 0.06));
            // }
            .btns{
                display: block;
            }
        }
    }

    h4{
        font-size: 21px;
    }

    p{
        font-weight: 500;
    }
`

export default CardWrapper;