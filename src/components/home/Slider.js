import React from "react";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import { useState, useEffect, useRef } from "react";
import { sliderItems } from "../../data";
import styled from "styled-components";
import { mobile } from "../../responsive";
import Swing from "react-reveal/Swing";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 85vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ height: "50%" })};
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all 1.5s ease;
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
  ${mobile({ height: "30%" })};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  object-fit: cover;
  height: 85%;
  width: 100%;
  border-radius: 10px;
  padding: 20px 0px 20px;
`;

//PROMO

const PromoContainer = styled.div`
  position: absolute;
  padding: 20px;
  margin-left: 70vw;
  margin-bottom: 50px;
  width: 20vw;
  height: 30vh;
  background-color: rgb(255, 255, 255, 70%);
  bottom: 0;
  ${mobile({
    height: "10vh",
    width: "25vw",
    marginLeft: "65vw",
    padding: "5px",
    marginBottom: "40px",
  })};
`;

const WrapperPromo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  ${mobile({ height: "100%" })};
`;

const Promo = styled.h1`
  font-size: 30px;
  color: teal;
  font-weight: bolder;
  margin-top: 0;
  ${mobile({ fontSize: "12px", paddingBottom: "4px", margin: 0 })};
`;

const Title = styled.p`
  font-weight: 900;
  font-size: 25px;
  padding: 0;
  margin: 0;
  ${mobile({ fontSize: "10px" })};
`;

const Desc = styled.p`
  font-size: 18px;
  font-weight: 500;
  padding: 0;
  margin: 0;
  ${mobile({ fontSize: "8px" })};
`;

const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 50%;
  padding: 15px;
  right: 0;
  border: none;
  text-decoration: none;
  cursor: pointer;
  transition: 0.3s ease all;
  background-color: #4faca6;
  color: white;
  letter-spacing: 2px;
  font-weight: 500;
  animation: blink-animation 1s steps(5, start) infinite;
  -webkit-animation: blink-animation 2s steps(5, start) infinite;
  @keyframes blink-animation {
    to {
      visibility: hidden;
    }
  }
  @-webkit-keyframes blink-animation {
    to {
      visibility: hidden;
    }
  }

  &:hover {
    background-color: #fff;
    color: #4faca6;
    border: 1px solid #4faca6;
  }
  ${mobile({
    width: "70%",
    fontSize: "8px",
    fontWeight: "500",
    marginTop: "10px",
    padding: "5px 10px",
    letterSpacing: "0",
  })};
`;

const Arrow = styled.div`
  width: 40px;
  height: 40px;
  background-color: #ffffff;
  color: #4faca6;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.3;
  z-index: 1;
  ${mobile({ height: "20px", width: "20px" })};
`;

//CARD
const ContainerCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  padding: 20px;
  margin-top: 5%;
  margin-left: 70px;
  border-radius: 5px;
  width: 30%;
  height: 70%;
  background-color: rgb(255, 255, 255, 70%);
  ${mobile({
    textAlign: "justify",
    textJustify: "interWord",
    width: "40%",
    height: "50%",
    marginTop: "15%",
    marginLeft: "20px",
  })};
`;

const WrapperCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  width: 90%;
  height: 100%;
  ${mobile({ width: "100%" })};
`;

const TitleCard = styled.h1`
  font-weight: 600;
  font-size: 30px;
  ${mobile({ fontSize: ".7rem", padding: 0, margin: 0 })};
`;

const DescCard = styled.p`
  padding: 0px 0px 10px;
  font-size: 20px;
  font-weight: 500;
  ${mobile({ fontSize: ".5rem", padding: "5px 5px 5px 0" })};
`;
const ButtonCard = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 90%;
  padding: 20px;
  border: none;
  letter-spacing: 2px;
  background-color: #4faca6;
  color: white;
  margin-bottom: 20px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s ease all;

  &:hover {
    background-color: #fff;
    color: #4faca6;
    border: 0.1rem solid #4faca6;
  }

  ${mobile({
    fontSize: "10px",
    width: "100%",
    letterSpacing: 0,
    padding: "10px 20px",
    fontWeight: 400,
  })};
`;

const delay = 4000;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setSlideIndex((direction) => {
          if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
          } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
          }
        }),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [slideIndex]);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <AiFillCaretLeft />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <PromoContainer>
              <WrapperPromo>
                <Swing>
                  <Promo>DISKON 20%</Promo>
                </Swing>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Link to={item.path} style={{textDecoration: "none"}} >
                  <Button>Lihat Promo</Button>
                </Link>
              </WrapperPromo>
            </PromoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <AiFillCaretRight />
      </Arrow>
      <ContainerCard>
        <WrapperCard>
          <TitleCard>
            Jasa Fotografi Untuk Segala Kebutuhan Acara Spesial Anda
          </TitleCard>
          <DescCard>
            Banyak diskon yang ditawarkan , jangan sampai menyesal tidak
            menggunakan jasa kami
          </DescCard>
          <ButtonCard href="https://linktr.ee/bintangphoto">
            Pesan Sekarang
          </ButtonCard>
        </WrapperCard>
      </ContainerCard>
    </Container>
  );
};

export default Slider;
