import React from "react";
import WhatApp from "../../img/wa.svg"
import styled from "styled-components";
import { mobile } from "../../responsive";

const Container = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  margin: 0px 30px 30px;
  border-radius: 50%;
  bottom: 0;
  right: 0;
  z-index: 3;
  cursor: pointer;
  box-shadow: 0px 0.3px 3.6px rgba(0, 0, 0, 0.066),
    0px 0.8px 10px rgba(0, 0, 0, 0.095), 0px 1.8px 24.1px rgba(0, 0, 0, 0.124),
    0px 6px 80px rgba(0, 0, 0, 0.19);
    ${mobile({ height: "30px", width: "30px"})};
`;

const Image = styled.img`
  width: 60px;
  height: 60px;
  :active{
    opacity: 0.7;
  }
  ${mobile({ height: "30ps", width: "30px"})};
`;

const Wa = () => {
  return (
    <Container href="https://api.whatsapp.com/message/2IWBOLPBAO5TO1" >
      <Image src={WhatApp} />
    </Container>
  );
};

export default Wa;
