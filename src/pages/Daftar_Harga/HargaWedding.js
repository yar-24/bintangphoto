import React from "react";
import styled from "styled-components";
import Footer from "../../components/home/Footer";
import { mobile } from "../../responsive";
import Shake from "react-reveal/Shake";
import Slide from "react-reveal/Slide";
import ScrollButton from "../../components/ScrollButton";
import { Helmet } from "react-helmet";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 120vh;
  background-color: #f7fafc;
  ${mobile({ height: "90vh", marginBottom: "20px" })};
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #4faca6;
  padding: 50px 0 10px;
  ${mobile({ fontSize: "1.2rem", padding: "20px 0 5px" })};
`;

const Text = styled.p`
  font-size: 1rem;
  text-align: center;
`

const ContainerButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 80px 0px;
  margin-top: 40px;
  border-radius: 30px;
  color: #4faca6;
  border: 1px solid #4faca6;
  text-decoration: none;
  cursor: pointer;
  ${mobile({
    fontSize: ".5rem",
    height: "40px",
    padding: "0px 40px 0px",
  })};

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

const HargaWedding = () => {
  return (
    <>
      <Helmet>
        <title>Paket Foto Nikah termurah dan terbagus di tahun 2022 ~ Bintang Photo</title>
        <meta
          name="description"
          content="Paket Foto Wedding/pernikahan dengan harga termurah di wilayah jogja. Abadikan momen pernikahan anda dengan menggunakan jasa kami, banyak fasilitas yang menarik untuk kelengkapan pernikahan anda."
        />
      </Helmet>
      <Container>
        <Shake>
          <Title>Harga Foto Wedding</Title>
        </Shake>
        <Slide bottom cascade>
        <Text><Text>Untuk melihat harga, chat langsung ke Adminnya ya! atau tekan tombol pesan sekarang</Text></Text>
          <ContainerButton href="https://rb.gy/ccmuiz">
            <Button>Pesan Sekarang</Button>
          </ContainerButton>
        </Slide>
      </Container>
      <ScrollButton />
      <Footer />
    </>
  );
};

export default HargaWedding;
