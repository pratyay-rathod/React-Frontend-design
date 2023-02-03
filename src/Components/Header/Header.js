import {React} from 'react'
import { NavLink } from 'react-router-dom'
import NavBar from './NavBar'
import styled from 'styled-components'

const Header = ({theme}) => {
    const bgColor = theme.colors.bg;
    return(
        <MainHeader style={{backgroundColor: bgColor}}>
            <NavLink to="/">
                <img src="./images/my_logo.jpg" alt='logo' className='logo'/>
            </NavLink>  
            <NavBar/>
        </MainHeader>
    );
}

const MainHeader = styled.header`
    padding:0 4.8rem;
    height:7rem;
    display:flex;
    justify-content:space-between;
    background-color:'blue';
    align-items:center;

    .logo{
        height:auto;
        max-width:28%;
        mix-blend-mode: multiply;
        margin-left:-5rem;
    }

    @media (max-width:${({theme})=>theme.media.mobile}){
        .logo{
            max-width:60%;
        }
    }
`;

export default Header