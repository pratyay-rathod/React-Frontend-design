import { React,useEffect } from 'react'
import HeroSection from './HeroSection/HeroSection'
import { GlobalContext } from './context';

const AboutUs = () => {
    
    const {updateAbout,name,image} = GlobalContext()
  
    useEffect(() => {
        updateAbout()
    }, [])


    return(
        <div>
            <HeroSection name={name} image={image}/>
        </div>
    )
}

export default AboutUs