import React from "react";
import styled from "styled-components";
import ScrollButton from "../components/ScrollButton";
import { mobile } from "../responsive";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import Footer from "../components/home/Footer";
import { Helmet } from "react-helmet";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  background-color: #f7fafc;
`;
const Title = styled.h1`
  padding-top: 20px;
  font-size: 2rem;
  color: #4faca6;
  ${mobile({ fontSize: "1.2rem" })};
`;
const ContainerList = styled.ul`
  text-align: left;
  margin: 0 10% 20px;
  ${mobile({ margin: "0px 0px 20px" })};
`;

const ContainerText = styled.div`
  margin: 0 10% 20px;
  ${mobile({ margin: "0px 20px 20px" })};
`;

const Text = styled.p`
  text-align: justify;
  text-justify: interWord;
  font-size: 1.3rem;
  ${mobile({ fontSize: "1rem" })};
`;
const TextKeunggulan = styled.h3`
  color: #4faca6;
  ${mobile({ fontSize: "1.1rem" })};
`;
const List = styled.li``;

const About = () => {
  return (
    <>
      <Helmet>
        <title>Tentang Bintang Foto sebagai jasa Fotografi Anda</title>
        <meta
          name="description"
          content="Bintang Photo Cinema hadir sebagai vendor foto dan video wedding prewedding sejak 2018. Setiap tahun kami menemukan berbagai perubahan dan kemajuan trend dalam pernikahan, namun ada satu kesamaan yang kami temukan dari berbagai moment pernikahan yang kami temui yaitu kebahagiaan.Bintang Photo Cinema  menghadirkan hasil pemotretan dengan ciri khas setiap foto dan vdieo yang menjelaskan momen-momen yang penting yang hanya terjadi seumur hidup kedua mempelai.Kami sangat bahagia bisa menjadi tim serta saksi hidup dalam acara sakral para mempelai, dan ini menjadi harapan kami juga Terima kasih para mempelai, dan untuk para calon mempelai, semoga kami bisa menjadi salah satu saksi perjalanan bahagia para mempelai."
        />
        <meta name="keyword" content="Photo" />
        <meta name="keyword" content="foto" />
        <meta name="keyword" content="jogja" />
        <meta name="keyword" content="jogjakarta" />
        <meta name="keyword" content="pernikahan" />
        <meta name="keyword" content="baby" />
        <meta name="keyword" content="bayi" />
        <meta name="keyword" content="Bintang" />
        <meta name="keyword" content="anak-anak" />
        <meta
          name="description"
          content="Bintang Photo Manajemen berhasil memenuhi pasar pemotratan Bayi dan Anak-anak dengan kesan premium dan mewah. Melalui brand baru bernama Bitang Baby Newborn kebutuhan pemotretan Bayi dan Anak-anak bisa dilayani di Bintang Photo. Hadirnya Bitang Baby Newborn, menjadi salah satu respon kami menanggapi permintaan para pelanggan di Bintang Photo yang menginginkan pemotretan anaknya bersama kami. Bintang Baby Newborn soft launching mulai tanggal 1 Juli 2019 dan sudah dipercaya oleh para orang tua untuk memotret lebih dari 200 bayi dan anak=anak. Baby stylish Bintang Baby Newborn di handle langsung oleh perempuan, bersama Citra Maharani para orang tua tidak usah ragu dan kawatir untuk pemotretan bayi nya di Bintang Baby Newborn."
        />
      </Helmet>
      <Container>
        {/* BintangFotoCinema */}
        <Fade top>
          <Title>Bintang Photo Cinema </Title>
        </Fade>
        <Bounce left>
          <ContainerText>
            <Text>
              Bintang Photo Cinema hadir sebagai vendor foto dan video wedding
              prewedding sejak 2018. Setiap tahun kami menemukan berbagai
              perubahan dan kemajuan trend dalam pernikahan, namun ada satu
              kesamaan yang kami temukan dari berbagai moment pernikahan yang
              kami temui yaitu kebahagiaan.
            </Text>
            <Text>
              Bintang Photo Cinema menghadirkan hasil pemotretan dengan ciri
              khas setiap foto dan vdieo yang menjelaskan momen-momen yang
              penting yang hanya terjadi seumur hidup kedua mempelai.
            </Text>
            <Text>
              Kami sangat bahagia bisa menjadi tim serta saksi hidup dalam acara
              sakral para mempelai, dan ini menjadi harapan kami juga Terima
              kasih para mempelai, dan untuk para calon mempelai, semoga kami
              bisa menjadi salah satu saksi perjalanan bahagia para mempelai.
            </Text>
          </ContainerText>
        </Bounce>

        {/* BintangBabyNewborn */}
        <Fade top>
          <Title>Bintang Baby Newborn</Title>
        </Fade>
        <Bounce left>
          <ContainerText>
            <Text>
              Bintang Photo Manajemen berhasil memenuhi pasar pemotratan Bayi
              dan Anak-anak dengan kesan premium dan mewah.
            </Text>
            <Text>
              Melalui brand baru bernama Bitang Baby Newborn kebutuhan
              pemotretan Bayi dan Anak-anak bisa dilayani di Bintang Photo.
            </Text>
            <Text>
              Hadirnya Bitang Baby Newborn, menjadi salah satu respon kami
              menanggapi permintaan para pelanggan di Bintang Photo yang
              menginginkan pemotretan anaknya bersama kami.
            </Text>
            <Text>
              Bintang Baby Newborn soft launching mulai tanggal 1 Juli 2019 dan
              sudah dipercaya oleh para orang tua untuk memotret lebih dari 200
              bayi dan anak=anak.
            </Text>
            <Text>
              Baby stylish Bintang Baby Newborn di handle langsung oleh
              perempuan, bersama Citra Maharani para orang tua tidak usah ragu
              dan kawatir untuk pemotretan bayi nya di Bintang Baby Newborn.
            </Text>
            <Text>
              Terima kasih atas support dan saran para orang tua dan para klien
              yang sangat tinggi.
            </Text>
          </ContainerText>
        </Bounce>

        {/* Keunggulan */}
        <Fade top cascade>
          <Title>Keunggulan Bintang Photo Studio</Title>
        </Fade>
        <Bounce left cascade>
          <ContainerList>
            <TextKeunggulan>Expert Photo/videographer</TextKeunggulan>
            <List>
              Tim kami akan mengarahkan gaya kamu tanpa membuat canggung dan
              membuat kamu semakin terlihat luar biasa
            </List>
            <TextKeunggulan>Fast Action</TextKeunggulan>
            <List>
              Kamu bisa melihat langsung hasil foto setelah pemotretan dan
              menerima hasil cetak kurang dari 7 hari (studio package)
            </List>
            <List>Foto dan video prewedding jadi kurang dari 24 jam</List>
            <List>Foto dan video wedding jadi kurang dari 96 jam</List>
            <TextKeunggulan>Good Quality</TextKeunggulan>
            <List>
              Kami hanya menggunakan profesional gear, mulai dari kamera, lensa,
              lighting
            </List>
            <List>
              Kami sempurnakan gambar dengan editing, mulai dari membuat gambar
              clean, soft dan pastel, menghilangkan noda terkecil sampe dengan
              membuat tubuh proporsional
            </List>
            <List>
              Kami hanya menggunakan bahan kertas, tinta kualitas terbaik
              sehingga tahan lama
            </List>
            <List>
              Semua proses produksi dilakukan di studio kami dan di awasi
              standar quality control
            </List>
            <TextKeunggulan>Good Service</TextKeunggulan>
            <List>Tim kami fast respon dan totalitas</List>
            <List>Ramah, asik, sopan dan friendly</List>
            <List>Kami akan melayani dari A sampai Z</List>
          </ContainerList>
        </Bounce>
        <ScrollButton />
        <Footer />
      </Container>
    </>
  );
};

export default About;
