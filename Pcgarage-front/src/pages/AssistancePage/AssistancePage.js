import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { BASE_URL } from "../../components/constants/BaseURL";
//import { useNavigate } from "react-router-dom";
import GlobalContext from "../../components/global/globalContext";
import "./StyledAssistancePage.css";


export default function AssistancePage() {
 //   let navigate = useNavigate();
    const data = useContext(GlobalContext);

    const useRequestData = (url) => {
        const [data, setData] = useState();
        let urlLink = url+"?req="+ new Date().getTime()
       
        useEffect((url) => {
            axios
                .get(urlLink)
                .then((response) => {
                    setData(response.data);
                })
                .catch((error) => {
                    console.log("erro", error)
                });
        }, [url]);
    
        return data;
    
    }

    let videos = useRequestData(BASE_URL + "/videos")

let listVideos = videos && videos
.map((video)=>{
return<div key={video.id} className="video-container">
<iframe className="video" width="380" height="200" src={video.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
<div className="title-video-container">{video.nome}</div>
<div className="text-video-container">{video.descricao}</div>
</div>
})


     //<iframe width="1350" height="480" src="https://www.youtube.com/embed/CDl9ZMfj6aE?list=RDs88r_q7oufE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    return (
<div className="assistance-page">
    <div className="videos-container">

        {listVideos}
        
    </div>
   
</div>
    )
}