import React from "react";
import styled from "styled-components";
import Footer from "../../components/home/Footer";
import IconCheckList from "../../img/check.svg";
import { mobile } from "../../responsive";
import Shake from "react-reveal/Shake";
import Slide from "react-reveal/Slide";
import ScrollButton from "../../components/ScrollButton";
import { Helmet } from "react-helmet";

const Container = styled.div`
  text-align: center;
  flex-wrap: wrap;
  height: 100%;
  margin: 0px 0 20px;
  background-color: #f7fafc;
  ${mobile({ height: "100%", padding: "20px 0px 30px", marginBottom: "20px" })};
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #4faca6;
  padding: 50px 0 10px;
  ${mobile({ fontSize: "1.2rem", padding: "20px 0 5px" })};
`;

const ContainerPrice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: left;
  ${mobile({ flexDirection: "column", display: "box" })};
`;

const ContainerHarga = styled.div`
  height: 100%;
  width: 25%;
  border-top: 10px solid #${(props) => props.bg};
  border-radius: 10px;
  background-color: #fff;
  margin: 20px;
  box-shadow: -1px 3px 21px -7px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -1px 3px 21px -7px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 3px 21px -7px rgba(0, 0, 0, 0.75);

  ${mobile({ height: "100%", width: "80%" })};

  &:hover {
    transform: scale(1.1);
    transition: 0.5s ease all;
  }
`;
const WrapperHarga = styled.div`
  margin: 20px;
  ${mobile({ margin: "20px" })};
`;
const NamaHarga = styled.h2`
  color: #4faca6;
  margin-top: 50px;
  ${mobile({ marginTop: "20px", fontSize: "20px" })};
`;
const Desc = styled.h3`
  margin-bottom: 20px;
  font-size: 1.2rem;
  font-weight: 500;
  color: #4faca6;
  ${mobile({ marginBottom: "10px" })};
`;

const Diskon =styled.h4`
color: red;
`

const Harga = styled.h2`
  margin: 20px 0 20px;
  ${mobile({ margin: "10px 0 10px", fontSize: "20px" })};
`;

const ContainerButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0 50px;
  width: 100%;
  height: 50px;
  border-radius: 30px;
  color: #4faca6;
  border: 1px solid #4faca6;
  text-decoration: none;
  cursor: pointer;
  ${mobile({ fontSize: ".5rem", height: "40px", margin: "15px 0 25px" })};

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

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${mobile({ marginTop: "10px" })};
`;

const ListFasilitas = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;

`

const Icon = styled.img`
  width: 25px;
  margin-right: 20px;
`

const List = styled.li`
  margin-left: 10px;
  list-style: none;
  ${mobile({ marginLeft: "15px", fontSize: "15px" })};
`;

const HargaGraduation = () => {
  return (
    <>
      <Helmet>
        <title>Paket Foto Wisuda ~ Bintang Photo</title>
        <meta
          name="description"
          content="Paket Foto Wisuda jogja termurah, terbaik 2022. Abadikan momen kelulusan anda dengan jasa kami."
        />
      </Helmet>
      <Container>
        <Shake>
          <Title>Paket Harga Foto Wisuda</Title>
        </Shake>
        <Slide bottom cascade>
          <ContainerPrice>

          {/* Basic */}

            <ContainerHarga style={{borderTop: "10px solid red" }}>
              <WrapperHarga>
                <NamaHarga>Basic</NamaHarga>
                <hr style={{ width: "20%", marginLeft: "0",}} />
                
                <hr style={{ width: "100px", marginLeft: "0", transform: "rotate(-40deg)",top: 35, height: "2px", zIndex: 3, position: "relative", backgroundColor: "red"}} />
                <Diskon>Rp.100.000</Diskon>
                <Harga>Rp 70.000</Harga>
                <ContainerButton href="https://rb.gy/ccmuiz">
                  <Button>Pesan</Button>
                </ContainerButton>
                <Desc>Fasilitas</Desc>
                <ListContainer>
                  <ListFasilitas>
                    <Icon src={IconCheckList} />
                    <List>1x Pose</List>
                  </ListFasilitas>
                  <ListFasilitas>
                    <Icon src={IconCheckList} />
                    <List>1x Cetak 10R</List>
                  </ListFasilitas>
                  <hr style={{ width: "100%" }} />
                  <ListFasilitas>
                    <Icon src={IconCheckList} />
                    <List>1 Background</List>
                  </ListFasilitas>
                  <ListFasilitas>
                    <Icon src={IconCheckList} />
                    <List>Max 6 Orang</List>
                  </ListFasilitas>
                  <hr style={{ width: "100%" }} />
                  <ListFasilitas>
                    <Icon src={IconCheckList} />
                    <List>Google Drive (Isi file 2 Ori 1 Edit)</List>
                  </ListFasilitas>
                </ListContainer>
              </WrapperHarga>
            </ContainerHarga>

            {/* Silver */}

            <ContainerHarga style={{borderTop: "10px solid silver" }} >
              <WrapperHarga>
                <NamaHarga>Silver</NamaHarga>
                <hr style={{ width: "20%", marginLeft: "0" }} />
                <Harga>Rp 200.000</Harga>
                <ContainerButton href="https://rb.gy/ccmuiz">
                  <Button>Pesan</Button>
                </ContainerButton>
                <Desc>Fasilitas</Desc>
                <ListContainer>
                  <ListFasilitas>
                    <Icon src={IconCheckList} />
                    <List>8x Pose</List>
                  </ListFasilitas>
                  <ListFasilitas>
                    <Icon src={IconCheckList} />
                    <List>4x Cetak 10R</List>
                  </ListFasilitas>
                  <hr style={{ width: "100%" }} />
                  <ListFasilitas>
                    <Icon src={IconCheckList} />
                    <List>2 Background</List>
                  </ListFasilitas>
                  <ListFasilitas>
                    <Icon src={IconCheckList} />
                    <List>Max 6 Orang</List>
                  </ListFasilitas>
                  <hr style={{ width: "100%" }} />
                  <ListFasilitas>
                    <Icon src={IconCheckList} />
                    <List>Unlimited shot</List>
                  </ListFasilitas>
                  <ListFasilitas>
                    <Icon src={IconCheckList} />
                    <List>Google Drive (Isi file 16 Ori 8 Edit)</List>
                  </ListFasilitas>
                </ListContainer>
              </WrapperHarga>
            </ContainerHarga>

            {/* Gold */}

            <ContainerHarga style={{borderTop: "10px solid gold" }} >
              <WrapperHarga>
                <NamaHarga>Gold</NamaHarga>
                <hr style={{ width: "20%", marginLeft: "0" }} />
                <Harga>Rp 325.000</Harga>
                <ContainerButton href="https://rb.gy/ccmuiz">
                  <Button>Pesan</Button>
                </ContainerButton>
                <Desc>Fasilitas</Desc>
                <ListContainer>
                  <ListFasilitas>
                    <Icon src={IconCheckList} />
                    <List>10x Pose</List>
                  </ListFasilitas>
                  <ListFasilitas>
                    <Icon src={IconCheckList} />
                    <List>3x Cetak 10R</List>
                  </ListFasilitas>
                  <hr style={{ width: "100%" }} />
                  <ListFasilitas>
                    <Icon src={IconCheckList} />
                    <List>3 Background</List>
                  </ListFasilitas>
                  <ListFasilitas>
                    <Icon src={IconCheckList} />
                    <List>Max 8 Orang</List>
                  </ListFasilitas>
                  <hr style={{ width: "100%" }} />
                  <ListFasilitas>
                    <Icon src={IconCheckList} />
                    <List>Unlimited shot</List>
                  </ListFasilitas>
                  <ListFasilitas>
                    <Icon src={IconCheckList} />
                    <List>Google Drive (Isi file 20 Ori 10 Edit)</List>
                  </ListFasilitas>
                </ListContainer>
              </WrapperHarga>
            </ContainerHarga>

            {/* Platinum */}

            <ContainerHarga style={{borderTop: "10px solid #979392" }} >
              <WrapperHarga>
                <NamaHarga>Platinum</NamaHarga>
                <hr style={{ width: "20%", marginLeft: "0" }} />
                <Harga>Rp 400.000</Harga>
                <ContainerButton href="https://rb.gy/ccmuiz">
                  <Button>Pesan</Button>
                </ContainerButton>
                <Desc>Fasilitas</Desc>
                <ListContainer>
                  <ListFasilitas>
                    <Icon src={IconCheckList} />
                    <List>12x Pose</List>
                  </ListFasilitas>
                  <ListFasilitas>
                    <Icon src={IconCheckList} />
                    <List>4x Cetak 10R</List>
                  </ListFasilitas>
                  <ListFasilitas>
                    <Icon src={IconCheckList} />
                    <List>1x Cetak 12R</List>
                  </ListFasilitas>
                  <hr style={{ width: "100%" }} />
                  <ListFasilitas>
                    <Icon src={IconCheckList} />
                    <List>3 Background</List>
                  </ListFasilitas>
                  <ListFasilitas>
                    <Icon src={IconCheckList} />
                    <List>Max 10 Orang</List>
                  </ListFasilitas>
                  <hr style={{ width: "100%" }} />
                  <ListFasilitas>
                    <Icon src={IconCheckList} />
                    <List>Unlimited shot</List>
                  </ListFasilitas>
                  <ListFasilitas>
                    <Icon src={IconCheckList} />
                    <List>Google Drive (Isi file 24 Ori 12 Edit)</List>
                  </ListFasilitas>
                </ListContainer>
              </WrapperHarga>
            </ContainerHarga>

            {/* Premium */}

            <ContainerHarga style={{borderTop: "10px solid #0066ff" }} >
              <WrapperHarga>
                <NamaHarga>Premium</NamaHarga>
                <hr style={{ width: "20%", marginLeft: "0" }} />
                <Harga>Rp 750.000</Harga>
                <ContainerButton href="https://rb.gy/ccmuiz">
                  <Button>Pesan</Button>
                </ContainerButton>
                <Desc>Fasilitas</Desc>
                <ListContainer>
                  <ListFasilitas>
                    <Icon src={IconCheckList} />
                    <List>15x Pose</List>
                  </ListFasilitas>
                  <ListFasilitas>
                    <Icon src={IconCheckList} />
                    <List>4x Cetak 10R</List>
                  </ListFasilitas>
                  <ListFasilitas>
                    <Icon src={IconCheckList} />
                    <List>1x Cetak 12R + Figura</List>
                  </ListFasilitas>
                  <ListFasilitas>
                    <Icon src={IconCheckList} />
                    <List>1x Cetak 20R + Figura</List>
                  </ListFasilitas>
                  <hr style={{ width: "100%" }} />
                  <ListFasilitas>
                    <Icon src={IconCheckList} />
                    <List>3 Background</List>
                  </ListFasilitas>
                  <ListFasilitas>
                    <Icon src={IconCheckList} />
                    <List>Max 10 Orang</List>
                  </ListFasilitas>
                  <hr style={{ width: "100%" }} />
                  <ListFasilitas>
                    <Icon src={IconCheckList} />
                    <List>Unlimited shot</List>
                  </ListFasilitas>
                  <ListFasilitas>
                    <Icon src={IconCheckList} />
                    <List>Google Drive (Isi file 30 Ori 15 Edit)</List>
                  </ListFasilitas>
                </ListContainer>
              </WrapperHarga>
            </ContainerHarga>

            {/* Exclusive */}

            <ContainerHarga style={{borderTop: "10px solid #4faca6" }} >
              <WrapperHarga>
                <NamaHarga>Exclusive</NamaHarga>
                <hr style={{ width: "20%", marginLeft: "0" }} />
                <Harga>Rp 1.150.000</Harga>
                <ContainerButton href="https://rb.gy/ccmuiz">
                  <Button>Pesan</Button>
                </ContainerButton>
                <Desc>Fasilitas</Desc>
                <ListContainer>
                  <ListFasilitas>
                    <Icon src={IconCheckList} />
                    <List>15x Pose</List>
                  </ListFasilitas>
                  <ListFasilitas>
                    <Icon src={IconCheckList} />
                    <List>4x Cetak 10R</List>
                  </ListFasilitas>
                  <ListFasilitas>
                    <Icon src={IconCheckList} />
                    <List>1x Cetak 12R + Figura</List>
                  </ListFasilitas>
                  <ListFasilitas>
                    <Icon src={IconCheckList} />
                    <List>1x Cetak 20R + Figura</List>
                  </ListFasilitas>
                  <ListFasilitas>
                    <Icon src={IconCheckList} />
                    <List>1x Cetak 24R + Figura</List>
                  </ListFasilitas>
                  <hr style={{ width: "100%" }} />
                  <ListFasilitas>
                    <Icon src={IconCheckList} />
                    <List>3 Background</List>
                  </ListFasilitas>
                  <ListFasilitas>
                    <Icon src={IconCheckList} />
                    <List>Max 10 Orang</List>
                  </ListFasilitas>
                  <hr style={{ width: "100%" }} />
                  <ListFasilitas>
                    <Icon src={IconCheckList} />
                    <List>Unlimited shot</List>
                  </ListFasilitas>
                  <ListFasilitas>
                    <Icon src={IconCheckList} />
                    <List>Google Drive (Isi file 30 Ori 15 Edit)</List>
                  </ListFasilitas>
                </ListContainer>
              </WrapperHarga>
            </ContainerHarga>
          </ContainerPrice>
        </Slide>
      </Container>
      <ScrollButton />
      <Footer />
    </>
  );
};

export default HargaGraduation;
