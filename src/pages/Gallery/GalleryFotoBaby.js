import React, { useState } from "react";
import "./gallery.css";
import { GalleyPhotoBaby } from "../../data";
import Footer from "../../components/home/Footer";
import { FiX } from "react-icons/fi";
import Fade from "react-reveal/Fade";
import ScrollButton from "../../components/ScrollButton";
import { Helmet } from "react-helmet";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const GalleryFotoBaby = () => {
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
        <title>Galeri Foto Baby NewBorn ~ Bintang Foto Jogja</title>
        <meta
          name="description"
          content="Galeri foto bayi imut, lucu dan estetik. Semua foto tersebut menggunakan jasa kami. kami akan mengatur gaya bayi anda sebaik mungkin supaya hasilnya akan estetik."
        />
      </Helmet>
      <div className="ContainerText">
        <h1>Galeri Foto Baby Newborn</h1>
        <p>Buatkan moment tergemasnya si kecil untuk kenangan hari esok 😊</p>
      </div>
      <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} alt="galleryBaby" />
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
          {GalleyPhotoBaby.map((item) => {
            return (
              <div
                className="pics"
                key={item.id}
                onClick={() => getImg(item.imgSrc)}
              >
                <Fade top>
                  <img
                    src={item.imgSrc}
                    style={{ width: "100%" }}
                    alt="galleryBaby"
                  />
                </Fade>
              </div>
            );
          })}
        </div>
      )}
      <hr style={{ height: "3px" }} />
      <div className="buttonContainer">
        <a className="button" href="https://wa.link/a53glr">
          Mau Pesan donk
        </a>
      </div>
      <ScrollButton />
      <Footer />
    </>
  );
};

export default GalleryFotoBaby;
