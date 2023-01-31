import React, { useState } from "react";
import "./gallery.css";
import { GalleryPhotoFamily } from "../../data";
import Footer from "../../components/home/Footer";
import { FiX } from "react-icons/fi";
import Fade from "react-reveal/Fade";
import ScrollButton from "../../components/ScrollButton";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const GalleryFotoFamily = () => {
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
        <title>Galeri Foto Keluarga terbagus ~ Bintang Foto Jogja</title>
        <meta
          name="description"
          content="Galeri foto family / keluerga terbaik, terkeren, terkece, terbagus di jogja 2022."
        />
      </Helmet>
      <div className="ContainerText">
        <h1>Galeri Foto Family</h1>
        <p>
          Bikin keluarga bahagia itu mudah, caranya ajak sekeluarga kamu untuk
          photo studio kami, dijamin akan bahagia dan tersenyum lebar 👨‍👩‍👧‍👧
        </p>
      </div>
      <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} alt="galeriFamily" />
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
          {GalleryPhotoFamily.map((item, index) => {
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
                    alt="galeriFamily"
                  />
                </div>
              </Fade>
            );
          })}
        </div>
      )}
      <hr style={{ height: "3px" }} />
      <div className="buttonContainer">
        <Link className="button" to="/harga-family">
          Mau Pesan donk
        </Link>
      </div>
      <ScrollButton />
      <Footer />
    </>
  );
};

export default GalleryFotoFamily;
