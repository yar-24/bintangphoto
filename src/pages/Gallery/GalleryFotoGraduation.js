import React, { useState } from "react";
import "./gallery.css";
import { GalleryPhotoWisuda } from "../../data";
import Footer from "../../components/home/Footer";
import { FiX } from "react-icons/fi";
import Fade from "react-reveal/Fade";
import ScrollButton from "../../components/ScrollButton";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const GalleryFotoGraduation = () => {
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
        <title>Galeri Foto Wisuda ~ Bintang Foto Jogja</title>
        <meta
          name="description"
          content="Galeri foto wisuda / graduation terbagus di jogja 2022. Semua foto tersebut menggunakan jasa fotografi kami."
        />
      </Helmet>
      <div className="ContainerText">
        <h1>Galeri Foto Wisuda</h1>
        <p>
          Pencapaian yang sangat berharga harus diabadikan dengan jasa kami, dijamin tidak akan menyesal dengan hasilnya😎
        </p>
      </div>
      <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} alt="galeriWisuda" />
        <FiX onClick={() => setModel(false)} />
      </div>
      {loading ? (
        <div className="gallery">
          <Skeleton
            duration={1.5}
            height={200}
            count={21}
            style={{
              marginBottom: "10px",
            }}
          ></Skeleton>
        </div>
      ) : (
        <div className="gallery">
          {GalleryPhotoWisuda.map((item, index) => {
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
                    alt="galeriWisuda"
                  />
                </div>
              </Fade>
            );
          })}
        </div>
      )}
      <hr style={{ height: "3px" }} />
      <div className="buttonContainer">
        <Link className="button" to="/harga-graduation">
          Mau Pesan donk
        </Link>
      </div>
      <ScrollButton />
      <Footer />
    </>
  );
};

export default GalleryFotoGraduation;
