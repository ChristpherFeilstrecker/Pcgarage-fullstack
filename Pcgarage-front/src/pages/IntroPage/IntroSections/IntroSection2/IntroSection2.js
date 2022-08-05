import { SubTitleTagB } from "../../../../StyledGlobal";
import "./StyledIntroSection2.css";
import { useContext } from "react";
import GlobalContext from "../../../../components/global/globalContext";

export default function IntroSection2() {
  const data = useContext(GlobalContext);
  const galerias = data.galerias

  const listGalerias = galerias && galerias
    .map((galeri) => {

      return <div key={galeri.id} className="box-container" >
        <div className="box-image"  >
          <img data-aos="fade-down" className="img-box " src={galeri.imagem} alt={galeri.nome} />
        </div>
        <div className="nav-box">
          <div className="nav-word">{galeri.nome}</div>
        </div>
      </div>
    })

  return (
    <div id="intro-section-2">
      <div className="title-container">
        <SubTitleTagB data-aos="fade-down" className="title-text">LINHA DE PRODUTOS</SubTitleTagB>
      </div>
      <div className="container-boxes">

        {listGalerias}

      </div>

    </div>
  )
}