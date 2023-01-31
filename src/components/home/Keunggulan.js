import React from "react";
import { Unggul } from "../../data";
import styled from "styled-components";
import { mobile } from "../../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  text-align: center;
  padding: 40px;
  ${mobile({ padding: "20px" })};
`;

const Title = styled.h1`
  color: #4faca6;
  font-size: 2rem;
  ${mobile({ fontSize: "1rem" })};
`;

const ContainerPredikat = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 10vh 0 5vh;
  flex-wrap: wrap;
  ${mobile({ margin: "5vh 0 2vh" })};
`;

const Predikat = styled.div`
margin-bottom: 20px;
  ${mobile({ paddingRight: "10px", marginBottom: "10px" })};
`;
const Image = styled.img`
  color: #4faca6;
  width: 50px;
  ${mobile({ width: "20px" })};
`;

const Nama = styled.p`
  color: #4faca6;
  font-size: 30px;
  ${mobile({ fontSize: "10px", color: "teal" })};
`;
const Desc = styled.p`
  color: #4faca6;
  ${mobile({ fontSize: "5px", display: "none" })};
`;

const Button = styled.a`
  padding: 15px 40px;
  color: #4faca6;
  cursor: pointer;
  font-size: 1rem;
  ${mobile({ fontSize: "10px", padding: "10px" })};

  &:hover {
    color: blue;
  }
`;

const Keunggulan = () => {
  return (
    <Container>
      <Title>Keunggulan Bintang Photo Studio</Title>
      <ContainerPredikat>
        {Unggul.map((item) => (
          <Predikat>
            <Image src={item.icon} />
            <Nama>{item.nama}</Nama>
            <Desc>{item.desc}</Desc>
          </Predikat>
        ))}
      </ContainerPredikat>
      <Link to="keunggulan-bintangfotostudio">
        <Button>Baca Lebih Detail...</Button>
      </Link>
    </Container>
  );
};

export default Keunggulan;
