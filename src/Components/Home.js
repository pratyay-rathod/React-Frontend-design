import React, { useEffect } from 'react'
import HeroSection from './HeroSection/HeroSection'
import { GlobalContext } from './context'
import Services from './Services'
import styled from 'styled-components'
import ContactUs from './ContactUs'


const Home = () => {

  const { updateHome, name, image } = GlobalContext()

  useEffect(() => {
    updateHome();
  }, []);

  return (
    <Homecss>
      <div>
        <HeroSection name={name} image={image} />
        <div className='ourServices'>
          <Services />
        </div>
        <div className='contactUs'>
          <ContactUs />
        </div>
      </div>
    </Homecss>

  )
}

const Homecss = styled.section`
  .ourServices{
    background-color:#FAFAFA;
  }
`

export default Home
