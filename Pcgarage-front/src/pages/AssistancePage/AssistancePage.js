import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import GlobalContext from "../../components/global/globalContext";
import "./StyledAssistancePage.css";


export default function AssistancePage() {
    let navigate = useNavigate();
    const data = useContext(GlobalContext);
    let videos = data.videos

let listVideos = videos && videos
.map((video)=>{
return<div key={video.id} className="video-container">
<iframe width="380" height="200" src={video.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
<div className="title-video-container">{video.nome}</div>
<div className="text-video-container">{video.descricao}</div>
</div>
})


     //<iframe width="1350" height="480" src="https://www.youtube.com/embed/CDl9ZMfj6aE?list=RDs88r_q7oufE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    return (
<div className="assistance-page">
    <div className="videos-container">

        {listVideos}
        
        <div className="video-container">
            <iframe width="380" height="200" src="https://www.youtube.com/embed/3Wf29RiKp70" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
            <div className="title-video-container">Titulo Video</div>
            <div className="text-video-container">Descrição do video</div>
        </div>

        <div className="video-container">
            <iframe width="380" height="200" src="https://www.youtube.com/embed/s88r_q7oufE?list=RDs88r_q7oufE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
            <div className="title-video-container">Titulo Video</div>
            <div className="text-video-container">Descrição do video</div>
        </div>

        <div className="video-container">
            <iframe width="380" height="200" src="https://www.youtube.com/embed/SBjQ9tuuTJQ?list=RDs88r_q7oufE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
            <div className="title-video-container">Titulo Video</div>
            <div className="text-video-container">Descrição do video</div>
        </div>

        <div className="video-container">
            <iframe width="380" height="200" src="https://www.youtube.com/embed/hTWKbfoikeg?list=RDs88r_q7oufE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
            <div className="title-video-container">Titulo Video</div>
            <div className="text-video-container">Descrição do video</div>
        </div>

        <div className="video-container">
            <iframe width="380" height="200" src="https://www.youtube.com/embed/CDl9ZMfj6aE?list=RDs88r_q7oufE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
            <div className="title-video-container">Titulo Video</div>
            <div className="text-video-container">Descrição do video</div>
        </div>



    </div>
   

</div>
    )
}