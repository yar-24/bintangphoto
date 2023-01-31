import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MenuPoto } from "../../data";
import { mobile } from "../../responsive";

const Container = styled.div`
  text-align: center;
  padding: 50px;
  background-color: #f7fafc;
  ${mobile({ padding: "10px" })};
`;
const Title = styled.h1`
  color: #4faca6;
  font-size: 2rem;
  ${mobile({ fontSize: "1rem" })};
`;
const WrapperMenu = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  ${mobile({ padding: "10px" })};
`;
const ImgContainer = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20vw;
  height: 30vh;
  background-color: #fff;
  border-radius: 10px;
  margin: 5px;
  padding: 5px;
  cursor: pointer;
  box-shadow: 2px 7px 21px -12px rgba(0, 0, 0, 0.7);
  -webkit-box-shadow: 2px 7px 21px -12px rgba(0, 0, 0, 0.7);
  -moz-box-shadow: 2px 7px 21px -12px rgba(0, 0, 0, 0.7);
  &:hover {
    transform: translateY(-1em);
    transition: 0.5s ease all;
  }
  &:active {
    transform: translateY(-1em);
    transition: 0.5s ease all;
    background-color: grey;
  }

  ${mobile({ width: "18vw", height: "8vh", margin: "5px", padding: 0 })};
`;

const ContainerMenu = styled.div``;

const Image = styled.img`
  padding-top: 10px;
  width: px;
  height: 100px;
  ${mobile({ width: "30px", height: "30px", paddingTop: "5px" })};
`;
const Desc = styled.p`
  color: #4faca6;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 500;
  ${mobile({ fontSize: ".7rem", fontWeight: "500" })};
`;

const Menu = () => {
  return (
    <Container>
      <Title>Galeri Bintang Photo</Title>
      <WrapperMenu>
        {MenuPoto.map((item, index) => (
          <ContainerMenu key={index}>
            <Link to={item.path}>
              <ImgContainer>
                <Image src={item.icon} />
              </ImgContainer>
            </Link>
            <Desc>{item.desc}</Desc>
          </ContainerMenu>
        ))}
      </WrapperMenu>
    </Container>
  );
};

export default Menu;
