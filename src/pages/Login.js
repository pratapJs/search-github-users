import React from 'react'
import styled from 'styled-components'
import loginImg from "../images/login-img.svg"
import {Button} from "../styles"
import {useAuth0} from '@auth0/auth0-react'

const Login = () => {
    const{loginWithRedirect}= useAuth0()
    return (
        <Wrapper>
            <div className="container">
                <img src={loginImg} alt="github user "/>
                <h1> github user</h1>
                <Button onClick={loginWithRedirect} >login/signup</Button>
            </div>
            
        </Wrapper>
    )
}

const Wrapper= styled.section`
min-height:100vh;
display:grid;
place-items:center;
.container{
    width:90vw;
    max-width:600px;
    text-align:center;
}
img{
    margin-bottom: 2rem;
}

`

export default Login
