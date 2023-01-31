import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar/Navbar";

const Container = styled.div`
box-sizing: border-box;
margin: 0;
padding: 0;
`

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <Container>{children}</Container>
        </>
    );
};

export default Layout;