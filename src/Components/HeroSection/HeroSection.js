import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Button } from '../../Styles/Button'
import { GlobalContext } from '../context'
import Services from '../Services'

const HeroSection = ({name,image}) => {
    return (
    <HeroSet>
        <div className='Hero-section'>
            <div className='hero-section-data'>
                <p className='hero-heading'>This is Me</p>
                <h1 className='hero-name'>{name}</h1>
                <p className='hero-para'>I'm {image} Rathod I am full stack developer, artist, and dancer I'm Pratyay Rathod I am full stack developer, artis, and dancer </p>
                <Button btn hireme-btn>
                    <NavLink to="/contact">Custome Order</NavLink>
                </Button>
            </div>
            <div className='hero-section-image'>
                <picture>
                    <img src={image} alt='tasla_1' className='Hero-img'></img>
                </picture>
            </div>
        </div>
        
    </HeroSet>
  )
}

const HeroSet = styled.section`
    padding:9rem;

    .hero-name{
        text-transform:uppercase;
    }

    .ourServices{
        margin:9rem -10rem 1rem -10rem;
        background-color:red;
    }

    .hero-heading{
        color:red
    }

    .Hero-section{
        display:flex;
        justify-content: space-between;
    }
    
    .btn{
        max-width:1rem;
    }
   
    .Hero-img{
        height:20rem;
        max-width:auto;
    }
    .hero-para{
        margin:1.5rem 0 3.4rem 0;
        max-width:30rem;
    }
    @media (max-width:${({theme})=>theme.media.mobile}){
        .Hero-section{
            display:flex;
            flex-direction:column-reverse;
            justify-content:space-between;
        }
        .hero-para{
            // margin:0 .5rem 0 3.4rem 0;
            max-width:30rem;

        }
        .hero-section-data{
            margin: 0 -5rem 0 -7rem;
        }
        .hero-section-image{
            margin: 0 -60rem 0 -5rem;
        }
        .Hero-img{
            height:10rem;
            width:20rem;
            margin-left:-2.5rem;
            margin-top:-3rem;
        }        
    }
`
export default HeroSection
