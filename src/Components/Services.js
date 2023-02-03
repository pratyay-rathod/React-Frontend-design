import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Button } from '../Styles/Button'
import { GlobalContext } from './context'
import { NavLink } from 'react-router-dom'


const Services = () => {

  const {services,name} = GlobalContext()


  return (
    <Wrapper className="card">
      <br></br>
      <h2 className='Heading_Services'>Our services</h2>
      <div className='grid grid-three-column'>
          {
                services.map((data) => {
                  const { id, title, image } = data
                  return (
                    <div key={id} className="container">
                      <div className='card'>
                        <div className='card-body'>
                          <div className='card-image'>
                            <img src={image} alt="service_image" />
                          </div>
                          <div>
                            <p>{title}</p>
                          </div>
                          <div className='serviceButton'>
                            <NavLink to="/contact">
                              <Button>Read More</Button>
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
          }
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  
  .card{
      margin:5rem 4rem;
      border:0.1rem solid rgb(170 170 170 / 40%)
      // padding:0.1rem
  }

  .card:hover{
      height:20rem;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  
  .card-body{
    display:flex;
    flex-direction:column;
    align-items:center; 
    padding:1rem
  }

  .serviceButton{
    margin-top:1rem;
  }

  .card-image img{
    hieght:50rem;
    width:18rem;
  }
 
  .grid{
    display:grid;
    gap:1rem;
  }
  .grid-two-column{
      grid-template-columns:repeat(2,1fr);
  }
  .grid-three-column{
      grid-template-columns:repeat(3,1fr);
  }
  .grid-four-coumn{
      grid-template-columns:1fr 1.2fr .5fr .8fr;
  }

  @media (max-width:${({theme})=>theme.media.mobile}){
    .grid-three-column{
      grid-template-columns:repeat(1fr,1fr);
    }
    .card{
      margin:4rem 1.5rem;
    }
  }
`;

export default Services
