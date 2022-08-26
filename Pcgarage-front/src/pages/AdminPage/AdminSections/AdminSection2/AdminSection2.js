import { Route, Routes } from "react-router-dom";
import "./StyledAdminSection2.css";
import SubSection1Admin2 from "./SubSectionAdmin2/SubSection1Admin2";
//import { useNavigate } from "react-router-dom";
import SubSection2Admin2 from "./SubSectionAdmin2/SubSection2Admin2";
import SubSection3Admin2 from "./SubSectionAdmin2/SubSection3Admin2";
import SubSection4Admin2 from "./SubSectionAdmin2/SubSection4Admin2";



export default function AdminSection2() {
 //   let navigate = useNavigate();
    return (
        <div id="about-section-2">
           
            <div className="body-container-about-section-2">

                <Routes id="routes" className="routes-container-about-section-2">
                    <Route exact path={""} element={<SubSection1Admin2 />} />
                    <Route exact path={"painel_de_controle"} element={<SubSection2Admin2 />} />
                    <Route exact path={"painel_de_controle/add"} element={<SubSection3Admin2 />} />
                    <Route exact path={"painel_de_controle/edit"} element={<SubSection4Admin2 />} />
                </Routes>

            </div>
        </div>
    )
}