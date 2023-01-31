import React from 'react'
import styled from 'styled-components'
import { mobile } from '../../responsive'

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
    width: 100%;
    height: 7vh;
    background-color: #91cac1;
    color: black;
    margin: 0;
    padding-top: 0;
    ${mobile({ height: "4vh", })};
`

const Text = styled.p`
    text-align: center;
    ${mobile({ fontSize: "5px" })};
`


const Footer = () => {
    return (
        <Container>
            <Text>Copyright © 2022. BintangPhotoStudio by artyardhan.</Text>
        </Container>
    )
}

export default Footer
