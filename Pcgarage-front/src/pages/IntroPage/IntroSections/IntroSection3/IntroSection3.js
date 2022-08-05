import { SubTitleTag, SubTitleTagB, TitleTagType } from "../../../../StyledGlobal";
import newYork from "../../../../images/new-york-1920x500.jpg"
import "./StyledIntroSection3.css";
import { useContext } from "react";
import GlobalContext from "../../../../components/global/globalContext";
import { useNavigate } from "react-router-dom";

export default function IntroSection3() {
    let navigate = useNavigate();
    const data = useContext(GlobalContext);
    let videos = data.videos

    let goToVideos=()=>{
        navigate("/videos");
        window.scrollTo(0, 0)

    }

    return (
        <div id="intro-section-3">
            <div className="container-section3">
                <div className="box-container-video-section3">
                    <div className="video-container">
                        <iframe width="480" height="250" src={videos && videos[0].url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
                <div className="box-container-section3">
                    <div className="text-container-section3">
                        <h3 className="title-text-section3" data-aos="fade-up">VIDEOS</h3>
                        <h4 className="title-text-section3" data-aos="fade-up">Descrição texto para seção dos videos etc...</h4>
                        <div onClick={()=>goToVideos()} className="btn-rigth-container-more margin-top" data-aos="fade-up">VER VIDEOS</div>
                    </div>
                </div>
            </div>
        </div>
    )
}