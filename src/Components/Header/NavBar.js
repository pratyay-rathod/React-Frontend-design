import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { CgMenu,CgCloseR } from "react-icons/cg";

const NavBar = () => {
    const [OpenMenu,setOpenMenu] = useState(false);

    const NavBar = styled.nav`
        .navbarList{
            display:flex;
            gap:4.8rem;
            a{
                text-decoration:none
            }
            li{
                list-style:none
            }
            .navbar-link{
                font-size:3.0rem;
                &:link,
                &:visited{
                    display:inline-block;
                    font-size:1.0rem;
                    text-transform:uppercase;
                    color:${({theme})=>theme.colors.black};
                    transition:color 0.3s linear;
                }

                &:hover,
                
                &:active{
                    color:${({theme})=>theme.colors.helper};
                }
            } 
        }
        .mobile-navbar-btn{
            display:none;
            .close-outline{
                display:none;
            }
        }
        .mobile-navbar-btn[name="close-outline"]{
            display:none;
        }
        
        @media (max-width:${({theme})=>theme.media.mobile}){
            .mobile-navbar-btn{
                display:inline-block;
                z-index:999;
                border:${({theme})=>theme.colors.black};

                .mobile-nav-icons{
                    font-size:4.2rem;
                    colors:${({theme})=>theme.colors.black};
                }
            }
            .navbarList{
                width:100vw;
                height:100vh;
                position:absolute;
                top:0;
                left:0;
                background-color:#fff;

                display:flex;
                flex-direction:column;
                justify-content:center;
                text-align:center;

                transform:translateX(100%);

                visibility:hidden;
                opacity:0;

                li{
                    .navbar-link{
                        &:link,
                        &:visited{
                            font-size:3.0rem;
                        }
                        &:hover,
                        &:active{
                            color:${({theme})=>theme.colors.helper};
                        }
                    }
                }
            }
            .active .mobile-nav-icons{
                display:none;
                font-size:4.2rem;
                position:absolute;
                top:3%;
                right:10%;
                color:${({theme})=>theme.colors.black};
                z-index:9999;

            }
            .active .close-outline{
                display:inline-block;
            }
            .active .navbarList{
                visibility:visible;
                opacity:1;
                transform:translateX(0);
                z-index:9999;
            }
        }
    `; 
  return (
    <NavBar>
        <div className= {OpenMenu ? 'navIcon active' : 'navIcon'} >
            <ul className='navbarList'>
                <li>
                    <NavLink to="/" className="navbar-link" onClick={()=>setOpenMenu(false)}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className="navbar-link" onClick={()=>setOpenMenu(false)}>About Us</NavLink>
                </li><li>
                    <NavLink to="/contact" className="navbar-link" onClick={()=>setOpenMenu(false)}>Contact Us</NavLink>
                </li><li>
                    <NavLink to="/services" className="navbar-link" onClick={()=>setOpenMenu(false)}>Services</NavLink>
                </li>
            </ul>
            <div className='mobile-navbar-btn'>
                <CgMenu name='menu-outline' className='mobile-nav-icons' onClick={()=>setOpenMenu(true)}/>
                <CgCloseR name='Close-outline' className='close-outline mobile-nav-icons' onClick={()=>setOpenMenu(false)}/>
            </div>
        </div>
    </NavBar>
  )
}

export default NavBar
