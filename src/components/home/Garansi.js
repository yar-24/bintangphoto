import React from "react";
import styled from "styled-components";
import LogoGaransi from "../../img/garansi.png";
import { mobile } from "../../responsive";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  ${mobile({ height: "40vh" })};
`;

const Wrapper = styled.div`
padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color:#f7fafc ;
  border-radius: 5px;
  width: 80%;
  height: 50%;
  box-shadow:
  0px 0.3px 3.6px rgba(0, 0, 0, 0.066),
  0px 0.8px 10px rgba(0, 0, 0, 0.095),
  0px 1.8px 24.1px rgba(0, 0, 0, 0.124),
  0px 6px 80px rgba(0, 0, 0, 0.19);
  ${mobile({ padding: "10px", })};
`;

const ContainerImg = styled.div`
  height: 20vh;
  width: 20vw;
  ${mobile({ height: "10vh", paddingTop: "15px" })};
`;

const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  `;

  const ContainerText = styled.div`
  text-align: center;
    height: 20vh;
    width: 50vw;
    ${mobile({  marginBottom: "5px" })};
  `;

const Title = styled.h1`
  font-size: 35px;
  ${mobile({ fontSize: "15px" })};
`;

const Text = styled.p`
  ${mobile({ fontSize: "10px" })};
`;

const Garansi = () => {
  return (
    <Container>
      <Wrapper>
        <ContainerImg>
          <Image src={LogoGaransi} />
        </ContainerImg>
        <ContainerText>
          <Title>Garansi Uang Kembali</Title>
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </Text>
        </ContainerText>
      </Wrapper>
    </Container>
  );
};

export default Garansi;
