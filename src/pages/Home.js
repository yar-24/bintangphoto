// import Garansi from "../components/home/Garansi";
// import Percaya from "../components/home/Percaya";
// import Keunggulan from "../components/home/Keunggulan";
import React from "react";
import Slider from "../components/home/Slider";
import Menu from "../components/home/Menu";
import Katalog from "../components/home/Katalog";
import Accordion from "../components/home/Accordion";
import Footer from "../components/home/Footer";
import Wa from "../components/home/Wa";
import ScrollButton from "../components/ScrollButton";
import { Helmet } from "react-helmet";
import Dipercaya from "../components/home/Dipercaya";


const Home = () => {
  return (
    <div style={{ overflow: "hidden" }}>
     <Helmet>
        <title>Studio Foto murah di Yogyakarta | Bintang Foto</title>
        <meta
          name="description"
          content="Studio foto di kota Jogja yang Menyediakan segala macam jenis jasa fotografi dan videografi, mulai dari foto Prewedding, Wedding, Wisuda, Family Portrait, Personal, Group, Maternity hingga Newborn Photography. Based in Jogja - Indonesia, and available to travel anywhere."
        />
        <meta
          name="keyword"
          content="fotografi"
        />
          <meta
            name="keyword"
            content="photo"
          />
        <meta
          name="keyword"
          content="jogja"
        />
        <meta
          name="keyword"
          content="2022"
        />
        <meta
          name="keyword"
          content="termurah"
        />
        <meta
          name="keyword"
          content="terbaik"
        />
      </Helmet>
      <Slider />
        <Menu />
        <Katalog />
        {/* <Percaya /> */}
        {/* <Garansi /> */}
        <Dipercaya/>
        <Accordion />
        <Wa />
        <ScrollButton />
      <Footer />
    </div>
  );
};

export default Home;
