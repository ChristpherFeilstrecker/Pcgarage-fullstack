import { SubTitleTagB } from "../../../../StyledGlobal";
import "./StyledIntroSection2.css";
import { useContext } from "react";
import GlobalContext from "../../../../components/global/globalContext";
import { useNavigate } from "react-router-dom";


export default function IntroSection2() {
  const navigate = useNavigate();
  const data = useContext(GlobalContext);
  const galerias = data.galerias
  const setTitle = data.setTitle
  const setSearch = data.setSearch

  const setSearchFunction=(galeri)=>{
    console.log("id",galeri)

    setSearch(`${galeri.id}`)

    setTitle(`${galeri.nome}`)
    navigate("/produtos")
    window.scrollTo(0, 0)
}

  const listGalerias = galerias && galerias
    .map((galeri) => {

      return <div key={galeri.id} onClick={() => setSearchFunction(galeri)} className="box-container" >
        <div className="box-image" >
          <img data-aos="fade-down" className="img-box " src={galeri.imagem} alt={galeri.nome} />
        </div>
        <div className="nav-box"  onClick={() => setSearchFunction(galeri)}>
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