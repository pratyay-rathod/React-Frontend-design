import styled from "styled-components";

export const Button = styled.button`
    text-decoration:none;
    max-width:auto;
    background-color:#2E5984;
    color:rgb(255,2255,255);
    padding:1.0rem 1.0rem;
    border:none;
    text-reansform:uppercase;
    text-align:center;
    cursor:pointer;
    transition:all 0.3s ease;
    -webkit-transition:all 0.3 ease 0s;
    -moz-transition:all 0.3 ease 0s;
    -o-transition:all 0.3s ease 0s;
    border-radius:6px;

    &:hover,
    &:active{
        box-shadow:0 2rem 2rem 0 rgb(132 144 255 / 30%);
        box-shadow:${({theme})=>theme.colors.shadowSupport};
        transform:scale(0.96);
    }

    a{
        text-decoration:none;
        color:rgb(255,255,255);
        font-size:1.8rem;
    }

`