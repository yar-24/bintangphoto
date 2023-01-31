import React from "react";
import styled from "styled-components";
import Footer from "../components/home/Footer";
import Fade from "react-reveal/Fade";
import { KontakAdmin } from "../data";
import { mobile } from "../responsive";
import { Helmet } from "react-helmet";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  height: 100%;
  padding-bottom: 15vh;
  background-color: #f7fafc;
`;
const Title = styled.h1`
  font-size: 2rem;
  color: #4faca6;
  margin-top: 50px;
  ${mobile({ fontSize: "1.2rem" })};
`;
const Text = styled.p`
  font-size: 1.2rem;
  margin: 0px 30px 0px;
  ${mobile({ fontSize: "1rem" })};
`;
const ButtonContainer = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30vw;
  padding: 0px 20px 0px;
  margin-top: 30px;
  text-decoration: none;
  color: #fff;
  border-radius: 10px;
  border: 2px solid #333;
  background-color: #4faca6;

  &:hover {
    border: 2px solid #4faca6;
    background-color: #fff;
    color: #4faca6;
  }

  ${mobile({ width: "50vw", height: "auto" })};
`;
const Telp = styled.p`
  font-size: 20px;
  font-weight: 500;
  ${mobile({ fontSize: "15px" })};
`;
const Icon = styled.img`
  width: 30px;
  height: 30px;
  ${mobile({ height: "15px", width: "15px" })};
`;

const Kontak = () => {
  return (
    <>
     <Helmet>
        <title>Kontak Kami Paket Jasa Fotografi Terbaik Yogyakarta</title>
        <meta
          name="description"
          content="Kontak dari jasa fotografi terbaik dijogjakarta."
        />
      </Helmet>
      <Container>
        <Fade top>
          <Title>Hubungi Kami</Title>
          <Text>
            Dikarenakan pandemi covid 19 semua nomor customer service kami
            arahakan di satu nomor untuk semua cabang
          </Text>
        </Fade>
        {KontakAdmin.map((item) => (
          <Fade bottom >
            <ButtonContainer href={item.link} key={item.id}>
              <Telp>{item.nama}</Telp>
              <Icon src={item.icon} />
            </ButtonContainer>
          </Fade>
        ))}
      </Container>
      <Footer />
    </>
  );
};

export default Kontak;
