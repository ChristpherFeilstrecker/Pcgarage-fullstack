import { useNavigate } from "react-router-dom";
import "./StyledErrorPage.css";


export default function ErrorPage() {
    let navigate = useNavigate();
    
    return (
<div id="errorpage">
    <div>Página de erro</div>
</div>
    )
}