import React from 'react'
import{Link} from 'react-router-dom'
import styled from 'styled-components';
import{setColor, Button} from "../styles"

const Error = () => {
    return (
        <Wrapper>
           <div>
               <h1>404</h1>
               <h3>sorry, the page you tried cannot be found</h3>
               <Button as={Link} to="/" >Back Home</Button>
           </div>
        </Wrapper>
    )
}

const Wrapper= styled.section`
min-height:100vh;
display:grid;
place-items:center;
background:${setColor.primaryColor10};
text-align:center;
h1{
    font-size:10rem;
}
h3{
    color:${setColor.greyColor3};
    margin-bottom:1.5rem;
}

`

export default Error
