import React, { useState } from "react";
import "./gallery.css";
import { GalleyPhotoPersonal } from "../../data";
import Footer from "../../components/home/Footer";
import { FiX } from "react-icons/fi";
import Fade from "react-reveal/Fade";
import ScrollButton from "../../components/ScrollButton";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const GalleryFotoPersonal = () => {
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  return (
    <>
      <Helmet>
        <title>Galeri Foto Personal ~ Bintang Foto Jogja</title>
        <meta
          name="description"
          content="Galeri foto personal / sendiri termurah di jogja 2022"
        />
      </Helmet>
      <div className="ContainerText">
        <h1>Galeri Foto Personal</h1>
        <p>
          Bikin personal brand itu yang totalitas, karena bikin banyak peluang
          lo, masa hari gini fotonya biasa aja, rugi tau
        </p>
      </div>
      <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} alt="galeriPersonal" />
        <FiX onClick={() => setModel(false)} />
      </div>

      <div className="gallery">
        {GalleyPhotoPersonal.map((item, index) => {
          return (
            <Fade top>
              <div
                className="pics"
                key={item.id}
                onClick={() => getImg(item.imgSrc)}
              >
                <img src={item.imgSrc} style={{ width: "100%" }} alt="galeriPersonal" />
              </div>
            </Fade>
          );
        })}
      </div>
      <hr style={{ height: "3px" }} />
      <div className="buttonContainer">
        <Link className="button" to="/harga-personal">
          Mau Pesan donk
        </Link>
      </div>
      <ScrollButton />
      <Footer />
    </>
  );
};

export default GalleryFotoPersonal;
