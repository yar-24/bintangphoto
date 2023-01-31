import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/home/Footer";
import ScrollButton from "../components/ScrollButton";
import Fade from "react-reveal/Fade";
import { Daftar_harga } from "../data";
import { mobile } from "../responsive";
import { Helmet } from "react-helmet";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f7fafc;
`;

const WrapperDaftar = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  ${mobile({ height: "100%", marginBottom: "30vh" })};
`;

const ContainerDaftar = styled.div`
  margin: 20px;
`;

const Title = styled.h1`
  color: #4faca6;
  font-size: 2rem;
  ${mobile({ fontSize: "1.2rem", marginTop: "20px" })};
`;

const Image = styled.img`
  width: 100w;
  ${mobile({ width: "37vw" })};
`;

const DaftarHarga = () => {
  return (
    <>
      <Helmet>
        <title>
          Daftar harga / Price List Bintang Foto ~ Studio Foto terbaik di
          Yogyakarta
        </title>
        <meta
          name="description"
          content="Harga photo / foto termurah dan hemat dari fotografi terbaik di jogjakarta"
        />
      </Helmet>
      <Container>
        <Fade top>
          <Title>Daftar Harga</Title>
        </Fade>
        <WrapperDaftar>
          {Daftar_harga.map((item) => (
            <Link to={item.path}>
              <ContainerDaftar>
                <Fade left cascade>
                  <Image src={item.img} />
                </Fade>
              </ContainerDaftar>
            </Link>
          ))}
        </WrapperDaftar>
        <Footer />
        <ScrollButton />
      </Container>
    </>
  );
};

export default DaftarHarga;
