import {React} from 'react'
import styled from 'styled-components'
import { Button } from '../Styles/Button'

const ContactUs = () => {
    return(
        <Wrapper>
            <div className='HeadingContact'>
                <h2 className='common-heading'>Feel Free To Contact Us</h2>
            </div>
            <div className='Map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.9969383600005!2d72.5442243144717!3d23.09720791933166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e836e3c353fe3%3A0x3d456685453731bb!2sNirman%20Homes!5e0!3m2!1sen!2sin!4v1675251175334!5m2!1sen!2sin" width="100%" height="350" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='contact-info'>
                <form action='https://formspree.io/f/xqkoegwy' method='POST' className='contact-form'>
                    <input
                        type="text"
                        name="username"
                        placeholder='Enter User Name'
                        autoComplete="off" 
                        required
                    ></input>
                    <input
                        type="email"
                        name="email"
                        placeholder='Enter Email Id'
                        autoComplete="off" 
                        required
                    />
                    <textarea placeholder='Enter Message' cols="30" rows="6" autoComplete="off" required></textarea>
                    <Button className='mybtn'>
                        Send Message
                    </Button>
                </form>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    .HeadingContact{
        margin:2rem
    }
    .contact-info{
        padding:5rem;
        margin-bottom:2rem;
        max-width:50rem;
        margin:auto;
    }
    .contact-form{
        display:flex;
        flex-direction:column;
        gap:3rem;
    }
    .mybtn{
        width:10rem;
    }
    .mybtn:hover{
        background-color:${({theme})=>theme.colors.white};
        border:1px solid ${({theme})=>theme.colors.btn};
        color:${({theme})=>theme.colors.btn};
        transform:scale(0.9)
    }
`

export default ContactUs
