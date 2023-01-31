import React from "react";
import styled from "styled-components";
import Footer from "../../components/home/Footer";
import Katalog1 from "../../img/katalog/katalog1.jpg";
import Katalog2 from "../../img/katalog/katalog2.jpeg";
import Katalog3 from "../../img/katalog/katalog3.jpg";
import Katalog4 from "../../img/photoGroup/group1.jpeg"
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

const KatalogCakeSmash = () => {
  return (
    <>
    <Helmet>
        <title>Katalog Cake Smash | Bintang Photo </title>
        <meta
          name="description"
          content="pakaian gaun dan jas keren untuk foto personal, group, keluarga, prewedding, baby di jogja 2022"
        />
      </Helmet>
      <Container>
        <Wrapper>
          <Fade top>
            <Title>Katalog Cake Smash</Title>
          </Fade>
          <Bounce left>
            <Desc>
              Menjadi cantik dan anggun secara sempurna dengan gaun dan jas dari
              Bintang Photo yang sudah disediakan. Yuk abadikan momen
              terindah kamu bersama pasangan dan keluarga hanya di Bintang Photo.
            </Desc>
          </Bounce>
          <hr />
        </Wrapper>
        <Bounce bottom>
          <SlideShow
            interval={3000}
            images={[
              Katalog1,
              Katalog2,
              Katalog3,
              Katalog4,
              Katalog2,
              Katalog3,
            ]}
          />
        </Bounce>
      </Container>
      <Footer />
    </>
  );
};

export default KatalogCakeSmash;
