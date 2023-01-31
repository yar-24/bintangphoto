import { React, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { Comment } from "../../data";
import { mobile } from "../../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  background-color: #f7fafc;
  ${mobile({ flexDirection: "column" })};
`;

const ContainerText = styled.div`
  display: flex;
  z-index: 1;
  position: absolute;
  width: 50%;
  height: 80%;
  justify-content: center;
  align-items: center;
  text-align: left;
  background-color: #f7fafc;
  left: 0;
  padding-left: 30px;
  ${mobile({
    top: 0,
    textAlign: "center",
    height: "20vh",
    width: "100%",
    paddingLeft: "0",
  })};
`;

const WrapperText = styled.div`
  width: 80%;
  height: 50%;
  ${mobile({
    width: "80%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  })};
`;

const TitleText = styled.h1`
  font-weight: 500;
  font-size: 2rem;
  ${mobile({ fontSize: "15px", paddingTop: "10px" })};
`;

const DescText = styled.p`
  padding: 20px 0px 30px;
  font-size: 1.5rem;
  ${mobile({ padding: "0 0 0", fontSize: "10px" })};
`;

const Button = styled.a`
  width: 25%;
  padding: 15px 40px;
  color: #fff;
  background-color: #4faca6;
  cursor: pointer;
  font-size: 1rem;
  ${mobile({padding: "5px", fontSize: "10px" })};

  &:hover {
    background-color: #fff;
    color: #4faca6;
    border: 0.1rem solid #4faca6;
  }
`;

//Card Container

const Wrapper = styled.div`
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all 1.5s ease;
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  ${mobile({
    justifyContent: "center",
    marginTop: "10%",
    height: "80%",
    marginBottom: "20px",
  })};
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  width: 30vw;
  margin-left: 60%;
  border-radius: 5px;
  box-shadow: 0px 0.3px 3.6px rgba(0, 0, 0, 0.066),
    0px 0.8px 10px rgba(0, 0, 0, 0.095), 0px 1.8px 24.1px rgba(0, 0, 0, 0.124),
    0px 6px 80px rgba(0, 0, 0, 0.19);
  ${mobile({ marginLeft: 0, height: "25vh", width: "60%" })};
`;

const WrapperInfo = styled.div`
  position: relative;
  text-align: center;
  width: 80%;
`;

const Image = styled.img`
  object-fit: cover;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-top: 20px;
  ${mobile({ width: "40px", height: "40px", marginTop: "0px" })}
`;

const Komen = styled.h1`
  font-size: 1.5rem;
  margin: 30px 0px 70px;
  ${mobile({ fontSize: "10px", margin: "15px 0px 30px" })};
`;

const Nama = styled.p`
  margin: 5px 0px;
  font-size: 1.3rem;
  font-weight: 500;
  letter-spacing: 3px;
  ${mobile({ fontSize: "9px", letterSpacing: "1px" })};
`;

const Status = styled.p`
  font-size: 1rem;
  ${mobile({ fontSize: ".5rem" })};
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
  left: ${(props) => props.direction === "left" && "50%"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
  ${mobile({ top: "60%", left: "30vw", width: "10px", height: "10px" })};
`;

const delay = 5000;

const Percaya = () => {
  const [isMoved, setIsMoved] = useState(false);
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
    setIsMoved(true);
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <ContainerText>
        <WrapperText>
          <TitleText>Sudah Dipercaya 1000+ Pelanggan Seperti Anda</TitleText>
          <DescText>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </DescText>
          <Link to="/testimoni-komentar" style={{textDecoration: "none"}}>
            <Button>Selengkapnya</Button>
          </Link>
        </WrapperText>
      </ContainerText>
      <Arrow
        direction="left"
        onClick={() => handleClick("left")}
        style={{ display: !isMoved && "none" }}
      >
        <AiFillCaretLeft />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {Comment.map((item) => (
          <Slide key={item.id}>
            <CardContainer>
              <WrapperInfo>
                <Image src={item.img} />
                <Komen>{item.komen}</Komen>
                <Nama>{item.nama}</Nama>
                <Status>{item.status}</Status>
              </WrapperInfo>
            </CardContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <AiFillCaretRight />
      </Arrow>
    </Container>
  );
};

export default Percaya;
