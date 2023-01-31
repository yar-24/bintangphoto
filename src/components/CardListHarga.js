import React from "react";
import styled from "styled-components";
import { Harga_Wisuda } from "../data";
import { mobile } from "../responsive";

const ContainerPrice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  text-align: left;
  ${mobile({ flexDirection: "column", display: "box" })};
`;

const ContainerHarga = styled.div`
  height: 100%;
  width: 25%;
  border-top: 10px solid #${(props) => props.bg};
  border-radius: 10px;
  background-color: #fff;
  margin: 20px;
  box-shadow: -1px 3px 21px -7px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -1px 3px 21px -7px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 3px 21px -7px rgba(0, 0, 0, 0.75);

  ${mobile({ height: "50vh", width: "80%" })};

  &:hover {
    border-left: 1px solid #${(props) => props.bg};
    border-right: 1px solid #${(props) => props.bg};
    border-bottom: 1px solid #${(props) => props.bg};
    transform: scale(1.1);
    transition: 0.5s ease all;
  }
`;
const WrapperHarga = styled.div`
  margin: 20px;
  ${mobile({ margin: "20px" })};
`;
const NamaHarga = styled.h2`
color: #4faca6 ;
  margin-top: 50px;
  ${mobile({ marginTop: "20px", fontSize: "20px" })};
`;
const Desc = styled.h3`
  margin-bottom: 20px;
  font-size: 1.2rem;
  font-weight: 500;
  color: #4faca6;
  ${mobile({ marginBottom: "10px" })};
`;
const Harga = styled.h2`
  margin: 20px 0 20px;
  ${mobile({ margin: "10px 0 10px", fontSize: "20px" })};
`;

const ContainerButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0 50px;
  width: 100%;
  height: 50px;
  border-radius: 30px;
  color: #4faca6;
  border: 1px solid #4faca6;
  cursor: pointer;
  ${mobile({ fontSize: ".5rem", height: "40px", margin: "15px 0 25px" })};

  &:hover {
    background-color: #4faca6;
    color: #fff;
  }
`;

const Button = styled.p`
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 2px;
  ${mobile({ fontSize: "15px" })};
`;

const ListHarga = styled.ul`
display: flex;
flex-direction: column;
  ${mobile({ marginTop: "10px" })};
`;

const List = styled.li`
  margin-left: 10px;
  ${mobile({ marginLeft: "15px", fontSize: "15px" })};
`;

const CardListHarga = () => {
  return (
    <>
      <ContainerPrice>
        {Harga_Wisuda.map((item) => (
          <ContainerHarga bg={item.bg}>
            <WrapperHarga>
              <NamaHarga>{item.namaHarga}</NamaHarga>
              <hr style={{ width: "20%", marginLeft: "0" }} />
              <Harga>{item.harga}</Harga>
              <ContainerButton>
                <Button>Pesan</Button>
              </ContainerButton>
              <Desc>Fasilitas</Desc>
              <ListHarga>
                <List>Lorem ipsum dolor si</List>
                <List>Lorem ipsum dolor si</List>
                <List>Lorem ipsum dolor si</List>
                <List>Lorem ipsum dolor si</List>
                <List>Lorem ipsum dolor si</List>
                <List >Lorem ipsum dolor si</List>
              </ListHarga>
            </WrapperHarga>
          </ContainerHarga>
        ))}
      </ContainerPrice>
    </>
  );
};

export default CardListHarga;
