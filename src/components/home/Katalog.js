import React from "react";
import styled from "styled-components";
import { ListKatalog } from "../../data";
import { AiOutlineRightCircle } from "react-icons/ai";
import { mobile } from "../../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: auto;
  padding-bottom: 40px;
  ${mobile({ paddingBottom: "20px" })};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  margin: 20px;
  ${mobile({ margin: "10px" })};
`;

const ContainerCard = styled.a`
  border-radius: 5px;
  margin-top: 40px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 2px 7px 21px -12px rgba(0,0,0,0.7);
-webkit-box-shadow: 2px 7px 21px -12px rgba(0,0,0,0.7);
-moz-box-shadow: 2px 7px 21px -12px rgba(0,0,0,0.7);

  &:hover {
    transform: translateY(-1em);
    transition: 0.3s ease all;
  }

  &:active {
    transform: translateY(-2em);
    transition: 0.5s ease all;
    opacity: 0.5;
  }
  ${mobile({ marginTop: "20px", width: "25vw", margin: "5px" })};
`;

const ImageContainer = styled.div`
  height: 45vh;
  width: 20vw;
  ${mobile({ height: "15vh", width: "25vw"})};
`;

const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  border-radius: 5px 5px 0 0;
`;

const Text = styled.p`
color: #4faca6;
font-weight: 600;
  ${mobile({ fontSize: ".5rem" })};
`;

const Icon = styled.div`
color: #4faca6;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  font-size: 15px;

  ${mobile({ fontSize: "10px" })};
`;

const Katalog = () => {
  return (
    <Container>
      <Wrapper>
        {ListKatalog.map((item) => (
          <ContainerCard key={item.id} >
            <Link to={item.path} style={{textDecoration: "none"}}>
              <ImageContainer>
                <Image src={item.img} />
              </ImageContainer>
              <Icon>
                <Text>{item.text}</Text>
                <AiOutlineRightCircle />
              </Icon>
            </Link>
          </ContainerCard>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Katalog;
