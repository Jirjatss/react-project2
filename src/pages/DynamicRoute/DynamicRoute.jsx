import { useParams } from "react-router-dom";
import "./DynamicRoute.css";
import FotoArtis from "../../components/Image/FotoArtis";
import Foto1 from "../../assets/Angelina-Jolie.jpg";

const RouteDynamic = () => {
  let params = useParams();
  return (
    <>
      <h3>Ini {params.nama_artis}</h3>
      <FotoArtis gambar={Foto1} />
    </>
  );
};

export default RouteDynamic;
