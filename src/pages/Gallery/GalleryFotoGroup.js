import React, { useState } from "react";
import "./gallery.css";
import { GalleryPhotoGroup } from "../../data";
import { FiX } from "react-icons/fi";
import ScrollButton from "../../components/ScrollButton";
import Fade from "react-reveal/Fade";
import Footer from "../../components/home/Footer";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const GalleryFotoGroup = () => {
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  return (
    <>
      <Helmet>
        <title>Galeri Foto Group ~ Bintang Foto Jogja</title>
        <meta
          name="description"
          content="Galeri foto Group terbagus di jogja pada tahun 2022. "
        />
      </Helmet>
      <div className="ContainerText">
        <h1>Galeri Foto Group</h1>
        <p>
          Bikin personal brand itu yang totalitas, karena bikin banyak peluang
          lo, masa hari gini fotonya biasa aja, rugi tau
        </p>
      </div>
      <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} alt="galeriGroup" />
        <FiX onClick={() => setModel(false)} />
      </div>

      <div className="gallery">
        {GalleryPhotoGroup.map((item, index) => {
          return (
            <Fade top>
              <div
                className="pics"
                key={item.id}
                onClick={() => getImg(item.imgSrc)}
              >
                <img src={item.imgSrc} style={{ width: "100%" }}  alt="galeriGroup" />
              </div>
            </Fade>
          );
        })}
      </div>
      <hr style={{ height: "3px" }} />
      <div className="buttonContainer">
        <Link className="button" to="/harga-group">
          Mau Pesan donk
        </Link>
      </div>
      <ScrollButton />
      <Footer />
    </>
  );
};

export default GalleryFotoGroup;
