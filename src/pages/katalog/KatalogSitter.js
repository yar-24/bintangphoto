import React from "react";
import styled from "styled-components";
import Footer from "../../components/home/Footer";
import Personal1 from "../../img/photoPersonal/personal1.jpeg"
import Personal2 from "../../img/photoPersonal/personal2.jpeg"
import Personal3 from "../../img/photoPersonal/personal3.jpeg"
import Personal4 from "../../img/photoPersonal/personal4.jpeg"
import Personal5 from "../../img/photoPersonal/personal5.jpeg"
import Personal6 from "../../img/photoPersonal/personal6.jpeg"
import Personal7 from "../../img/photoPersonal/personal7.jpeg"
import SlideShow from "../../components/SlideShow";
import { mobile } from "../../responsive";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import { Helmet } from "react-helmet";

const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  background-color: #f7fafc;
  padding-bottom: 50px;
  ${mobile({ height: "80vh" })};
`;
const Wrapper = styled.div`
  width: 90%;
  margin: 50px;
  ${mobile({ marginTop: "40px" })};
`;
const Title = styled.h1`
  font-size: 2rem;
  color: #4faca6;
  ${mobile({ fontSize: "1.2rem" })};
`;
const Desc = styled.p`
  ${mobile({ fontSize: ".7rem" })};
`;

const KatalogSitter = () => {
  return (
    <>
    <Helmet>
        <title>Katalog Sitter ~ Bintang Foto Jogja</title>
        <meta
          name="description"
          content="background keren untuk foto personal, group, keluarga, prewedding, baby di jogja 2022"
        />
      </Helmet>
      <Container>
        <Wrapper>
          <Fade top>
            <Title>Katalog Sitter</Title>
          </Fade>
          <Bounce left>
            <Desc>
              Yuk abadikan momen kamu bersama Bintang Photo. Kini Bintang Photo telah memilih 10 + katalog background yang beragam.
              Semuanya bisa kamu pilih sesuka hati loh!
            </Desc>
          </Bounce>
          <hr />
        </Wrapper>
        <Bounce bottom>
          <SlideShow
            interval={3000}
            images={[
                Personal1,
                Personal2,
                Personal3,
                Personal4,
                Personal5,
                Personal6,
                Personal7,
            ]}
          />
        </Bounce>
      </Container>
      <Footer />
    </>
  );
};

export default KatalogSitter;
