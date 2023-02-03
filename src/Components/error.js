import React from 'react'
import { Button } from '../Styles/Button'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

function error() {
  return (
    <Wrapper>
        <div className='error-container'>
            <div className='error_image'>
                <img src="./images/Error.jpg" alt='pag not found'/>
            </div>
        </div>
            <div className='go_back'>
                <NavLink to="/">
                    <Button>
                        Go Back
                    </Button>
                </NavLink>
            </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    .error-container,.go_back{
        display:flex;
        justify-content:center;
    }
`
export default error
