import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import HargaPersonal from "./pages/Daftar_Harga/HargaPersonal";
import HargaGraduation from "./pages/Daftar_Harga/HargaGraduation";
import HargaGroup from "./pages/Daftar_Harga/HargaGroup";
import HargaPrewedding from "./pages/Daftar_Harga/HargaPrewedding";
import Alamat from "./pages/Alamat";
import Kontak from "./pages/Kontak";
import GalleryFotoGroup from "./pages/Gallery/GalleryFotoGroup";
import GalleryFotoGraduation from "./pages/Gallery/GalleryFotoGraduation";
import GalleryFotoFamily from "./pages/Gallery/GalleryFotoFamily";
import GalleryFotoBaby from "./pages/Gallery/GalleryFotoBaby";
import GalleryFotoPrewedding from "./pages/Gallery/GalleryFotoPrewedding";
import GalleryFotoWedding from "./pages/Gallery/GalleryFotoWedding";
import GalleryFotoMaternity from "./pages/Gallery/GalleryFotoMaternity";
import GalleryFotoPersonal from "./pages/Gallery/GalleryFotoPersonal";
import DaftarHarga from "./pages/DaftarHarga";
import Testimoni from "./pages/Testimoni";
import HargaFamily from "./pages/Daftar_Harga/HargaFamily";
import HargaBabyNewborn from "./pages/Daftar_Harga/HargaBabyNewborn";
import HargaMaternity from "./pages/Daftar_Harga/HargaMaternity";
import HargaWedding from "./pages/Daftar_Harga/HargaWedding";
import About from "./pages/About";
import KatalogNewBorn from "./pages/katalog/KatalogNewBorn";
import KatalogCakeSmash from "./pages/katalog/KatalogCakeSmash";
import KatalogSitter from "./pages/katalog/KatalogSitter";

function Routers() {
  return (
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/alamat" element={<Alamat />} />
        <Route path="/daftar-harga" element={<DaftarHarga />} />
        <Route path="/harga-personal" element={<HargaPersonal />} />
        <Route path="/harga-family" element={<HargaFamily />} />
        <Route path="/harga-group" element={<HargaGroup />} />
        <Route path="/harga-baby_newborn" element={<HargaBabyNewborn />} />
        <Route path="/harga-maternity" element={<HargaMaternity />} />
        <Route path="/harga-graduation" element={<HargaGraduation />} />
        <Route path="/harga-prewedding" element={<HargaPrewedding />} />
        <Route path="/harga-wedding" element={<HargaWedding />} />
        <Route
          path="/gallery-foto-personal"
          element={<GalleryFotoPersonal />}
        />
        <Route path="/gallery-foto-group" element={<GalleryFotoGroup />} />
        <Route
          path="/gallery-foto-graduation"
          element={<GalleryFotoGraduation />}
        />
        <Route path="/gallery-foto-family" element={<GalleryFotoFamily />} />
        <Route path="/gallery-foto-baby" element={<GalleryFotoBaby />} />
        <Route
          path="/gallery-foto-prewedding"
          element={<GalleryFotoPrewedding />}
        />
        <Route path="/gallery-foto-wedding" element={<GalleryFotoWedding />} />
        <Route
          path="/gallery-foto-maternity"
          element={<GalleryFotoMaternity />}
        />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="/about" element={<About />} />
        <Route path="/katalog-CakeSmash" element={<KatalogCakeSmash />} />
        <Route path="/katalog-Sitter" element={<KatalogSitter />} />
        <Route path="/katalog-NewBorn" element={<KatalogNewBorn />} />
        <Route path="/testimoni-komentar" element={<Testimoni />} />
      </Routes>
  )
}

export default Routers;
