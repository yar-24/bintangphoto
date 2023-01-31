import { React } from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 50px;
  margin-bottom: 50px;
  ${mobile({ flexDirection: "column" })};
`;

const WrapperText = styled.div`
  width: 80%;
  height: 50%;
  text-align: center;
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
  margin-bottom: 40px;
  ${mobile({ fontSize: "15px", paddingTop: "10px" })};
`;

const Button = styled(Link)`
  color: #fff;
  background-color: #4faca6;
  cursor: pointer;
  font-size: 1rem;
  padding: 10px 40px;
  text-decoration: none;
  ${mobile({ padding: "10px 20px", fontSize: "10px" })};

  &:hover {
    background-color: #fff;
    color: #4faca6;
    border: 0.1rem solid #4faca6;
  }
`;

const Dipercaya = () => {
  return (
    <Container>
      <WrapperText>
        <TitleText>Sudah Dipercaya 1000+ Pelanggan Seperti Anda</TitleText>
        <Button to="/testimoni-komentar">
          Selengkapnya
        </Button>
      </WrapperText>
    </Container>
  );
};

export default Dipercaya;
