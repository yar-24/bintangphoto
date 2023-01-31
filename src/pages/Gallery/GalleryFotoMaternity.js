import React, { useState } from "react";
import "./gallery.css";
import { GalleryPhotoMaternity } from "../../data";
import Footer from "../../components/home/Footer";
import { FiX } from "react-icons/fi";
import Fade from "react-reveal/Fade";
import ScrollButton from "../../components/ScrollButton";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const GalleryFotoMaternity = () => {
  const [model, setModel] = useState(false);
  const [loading, setLoading] = useState(true);
  const [tempimgSrc, setTempImgSrc] = useState("");

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  return (
    <>
      <Helmet>
        <title>Galeri Foto Maternity ~ Bintang Foto Jogja</title>
        <meta
          name="description"
          content="Galeri foto maternity/kehamilan terbagus ditahun 2022"
        />
      </Helmet>
      <div className="ContainerText">
        <h1>Galeri Foto Maternity</h1>
        <p>
          Abadikan moment spesial bersama si kecil dikandungan, membuat hati bergembira saat menanti buah hati hadir didunia ini. 🤰 
        </p> 
        <div className={model ? "model open" : "model"}>
          <img src={tempimgSrc} alt="galeriMaternity" />
          <FiX onClick={() => setModel(false)} />
        </div>
      </div>
      {loading ? (
        <div className="gallery">
          <Skeleton
            duration={1.5}
            height={200}
            count={12}
            style={{
              marginBottom: "10px",
            }}
          ></Skeleton>
        </div>
      ) : (
        <div className="gallery">
          {GalleryPhotoMaternity.map((item, index) => {
            return (
              <Fade top>
                <div
                  className="pics"
                  key={item.id}
                  onClick={() => getImg(item.imgSrc)}
                >
                  <img
                    src={item.imgSrc}
                    style={{ width: "100%" }}
                    alt="galeriMaternity"
                  />
                </div>
              </Fade>
            );
          })}
        </div>
      )}
      <hr style={{ height: "3px" }} />
      <div className="buttonContainer">
        <Link className="button" to="/harga-maternity">
          Mau Pesan donk
        </Link>
      </div>
      <ScrollButton />
      <Footer />
    </>
  );
};

export default GalleryFotoMaternity;
