import React from "react";
import styled from "styled-components";
import { Comment } from "../data";
import Footer from "../components/home/Footer";
import ScrollButton from "../components/ScrollButton";
import { mobile } from "../responsive";
import YouTube from "react-youtube";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import { Helmet } from "react-helmet";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f7fafc;
  height: 100%;
`;
const Title = styled.h1`
  color: #4faca6;
  margin: 50px 10px 50px;
  ${mobile({ fontSize: "1.2rem", margin: "50px 10px 20px" })};
`;
const VideoContainer = styled.div`
  width: 50vw;
  border-radius: 10px;
  margin-bottom: 10px;
  ${mobile({ width: "80vw" })};
`;

const NamaVideo = styled.h3`
  ${mobile({ fontSize: ".8rem" })};
`;

const Desc = styled.p`
  ${mobile({ fontSize: ".5rem" })};
`;

const KomentarContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 50vw;
  height: 100% ;
  padding:20px 10px 20px ;
  background-color: #fff;
  margin-bottom: 20px ;
  border-radius: 10px;
  box-shadow: 2px 7px 21px -12px rgba(0, 0, 0, 0.7);
  -webkit-box-shadow: 2px 7px 21px -12px rgba(0, 0, 0, 0.7);
  -moz-box-shadow: 2px 7px 21px -12px rgba(0, 0, 0, 0.7);
  ${mobile({ width: "80vw", height: "20vh" })};
`;
const ImgContainer = styled.div`
  width: 100px;
  height: 100px;
  margin: 10px 0 10px;
  ${mobile({ width: "50px", height: "50px" })};
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  ${mobile({ paddingTop: "10px" })};`;

const Text = styled.h3`
  ${mobile({ fontSize: ".6rem", padding: "0 20px 0" })};
`;

const Nama = styled.h4`
  padding-top: 30px;
  margin:0 ;
  ${mobile({ fontSize: ".5rem", paddingTop: "5px" })};
`;

const Status = styled.p`
  ${mobile({ fontSize: ".5rem" })};
`;

const Testimoni = () => {
  const opts = {
    height: "200" ,
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return (
    <>
      <Helmet>
        <title>Testimoni Pelanggan Kami ~ Bintang Foto</title>
        <meta
          name="description"
          content="Rekomendai/komentar dari beberapa pelanggan Bintang Foto yang sudah terbukti hasilnya."
        />
      </Helmet>
      <Container>
        <Fade top>
          <Title>Testimoni</Title>
        </Fade>
        <Bounce bottom cascade>
          <VideoContainer>
            <YouTube
              videoId="MsntDa_6TQw"
              opts={opts}
            />
            <NamaVideo>Bintang Foto</NamaVideo>
            <Desc>Photo & Vidio Profesional</Desc>
          </VideoContainer>
          {Comment.map((item) => (
            <KomentarContainer key={item.id}>
              <ImgContainer>
                <Image src={item.img} />
              </ImgContainer>
              <Text>{item.komen}</Text>
              <Nama>{item.nama}</Nama>
              <Status>{item.status}</Status>
            </KomentarContainer>
          ))}
        </Bounce>
        <ScrollButton />
        <Footer />
      </Container>
    </>
  );
};

export default Testimoni;
