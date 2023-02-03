import React from 'react'
import styled from 'styled-components';
import {FaArrowAltCircleUp} from 'react-icons/fa';

const TopTo = () => {

    const Topto = () => {
        window.scrollTo({top:0,left:0,behavior:"smooth"});
    }
    return(
        <Wrapper>
            <div className='top-btn' onClick={Topto}>
                <FaArrowAltCircleUp/>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    display:flex;
    justify-content:center;
    align-items:center;

    .top-btn{
        font-size:2.4rem;
        width:4rem;
        height:4rem;
        color:#fff;
        background-color:${({theme})=>theme.colors.btn};
        box-shadow:${({theme})=>theme.colors.shadow};
        border-radius:50%;
        position:fixed;
        bottom:5rem;
        right:5rem;
        z-index:999;
        display:flex;
        justify-content:center;
        align-items:center;
        cursor:pointer;
    }


`

export default TopTo