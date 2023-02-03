import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '../../Styles/Button'
import { FaInstagram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const footer = () => {
  return (
    <Wrapper>
        <section className='contact-short'>
            <div className='grid grid-two-column'>
                <div>
                    <h3>Ready To Get Started?</h3>
                    <h3>Talk To Us Today</h3>
                </div>
                <div>
                    <NavLink to="/">
                        <Button>
                            Get Started
                        </Button>
                    </NavLink>
                </div>
            </div>
        </section>
        <footer>
            <div className='container grid grid-four-coumn'>
                <div className='footer-about'>
                    <h3>Tesla</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className='footer-subscribe'>
                    <h3>Subscribe to get important updates</h3>
                    <form className='footer-form'>
                        <input 
                            type="email"
                            placeholder='Email'
                            autoComplete='off'
                            required
                        />
                        <Button className='mybtn' style={{margin:"1.5rem 0"}}>
                            Send Message
                        </Button>
                    </form>
                </div>
                <div className='social'>
                    <h3>Follow US</h3>
                    <div className='footer-social-icons'>
                        <div>
                            <a href="https://discord.com/" target="_blank">
                                <FaDiscord className="icons"/>
                            </a>
                        </div>
                        <div>
                            <a href="https://www.youtube.com/watch?v=uTWBItHrKeE&t=6018s" target="_blank">
                                <FaYoutube className="icons"/>
                            </a>
                        </div>
                        <div>
                            <a href="https://www.instagram.com/" target="_blank">
                                <FaInstagram className="icons"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='contact-part'>
                    <h3>Pratyay Rathod</h3>
                    <h3>+91 9426635929</h3>
                </div>
            </div>
            <div className='footer-bottom--section'>
                <hr/>
                <div className='container grid grid-two-column'>
                    <p>
                        @{new Date().getFullYear()} Tesla All Right Reserved
                    </p>
                    <div>
                        <p>PRIVACY POLICY</p>
                        <p>TERMS & CONDITION</p>
                    </div>
                </div>
            </div>
        </footer>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    .contact-short{
        max-width:70vw;
        height:10rem;
        margin:auto;
        padding:3rem 3rem;
        background-color:${({theme})=>theme.colors.bg};
        border-radius:1rem;
        box-shadow:${({theme})=>theme.colors.shadowSupport};
        transform:translateY(50%);

        .grid div:last-child{
            justify-self:end;
            align-self:center;
        }
    }
    .footer-form{
        display:flex;
        flex-direction:column;
    }

    .mybtn{
        width:10rem;
    }

    .grid-two-column{
        grid-template-columns:repeat(2,1fr);
    }
    
    footer{
        margin:auto;
        padding:10rem  3rem;
        background-color:${({theme})=>theme.colors.footer_bg};

        h3{
            color:${({theme})=>theme.colors.hr};
            margin-bottom:2.4rem;
        }
        p{
            color:${({theme})=>theme.colors.white};
        }
    }
    .footer-social-icons{
        display:flex;
        gap:2rem;

        div{
            padding:1rem;
            border-radius:40%;
            border:2px solid ${({theme})=>theme.colors.white};

            .icons{
                color:${({theme})=>theme.colors.white};
                font-size:1.4rem;
                position:relative;
                cursor:pointer;
            }
        }
    }
`

export default footer

