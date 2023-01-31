import React from "react";
import styled from "styled-components";
import { alamat } from "../data";
import { mobile } from "../responsive";
import Fade from "react-reveal/Fade";
import Maps from "../img/logomaps.svg";
import Footer from "../components/home/Footer";
import ScrollButton from "../components/ScrollButton";
import { Helmet } from "react-helmet";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  padding: 50px 0 50px;
  background-color: #f7fafc;
  ${mobile({ height: "80vh", paddingBottom: "50px" })};
`;

const Text = styled.h1`
  font-size: 2rem;
  color: #4faca6;
  margin-top: 0;
  ${mobile({ fontSize: "1.2rem", marginTop: "0" })};
`;
const ImgContainer = styled.a`
  display: flex;
  height: 40vh;
  margin: 30px 0px 30px;
  cursor: pointer;

  &:active {
    opacity: 0.5;
  }

  ${mobile({ height: "10vh", margin: "20px 0px 10px" })};
`;
const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: 1px solid #4faca6;
`;
const Almt = styled.p`
  position: absolute;
  color: #333;
  font-weight: 600;
  font-size: 40px;
  margin-top: 30vh;
  margin-left: 30px;
  ${mobile({ fontSize: "10px", marginTop: "60px", marginLeft: "15px" })};
`;

const ContainerIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  padding: 5px;
  height: 50px;
  border-radius: 10px;
  position: absolute;
  ${mobile({ height: "25px", marginLeft: "35vw", marginTop: "10px" })};
`;
const Icon = styled.img`
  width: 150px;
  height: 150px;
  ${mobile({ height: "75px", width: "75px" })};
`;

const Iframe = styled.iframe`
width: 600px; 
height: 450px;
${mobile({width: "300px", height: "225px"})}
`

const Alamat = () => {
  return (
    <div>
      <Helmet>
        <title>Alamat Bintang Foto ~ Studio Foto terbaik di Yogyakarta</title>
        <meta
          name="description"
          content="Alamat dari Studio terbaik, termurah, terbaru di daerah jogjakarta"
        />
      </Helmet>
      <Container>
        <Fade top>
          <Text>Alamat Bintang Photo</Text>
        </Fade>
          <Iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.9868978321224!2d110.4466341!3d-7.791211199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5a0a64e700dd%3A0xa204d3ba65b3e774!2sBintang%20Foto%20Studio!5e0!3m2!1sen!2sid!4v1658902204106!5m2!1sen!2sid"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></Iframe>
        {/* {alamat.map((item) => (
          <Fade left>
            <ImgContainer href="https://maps.app.goo.gl/G3oKXDb1Tptwjx9u8">
              <Image src={item.img} />
              <Almt>{item.tmpt}</Almt>
              <ContainerIcon>
                <Icon src={Maps} />
              </ContainerIcon>
            </ImgContainer>
          </Fade>
        ))} */}
      </Container>
      <ScrollButton />
      <Footer />
    </div>
  );
};

export default Alamat;
