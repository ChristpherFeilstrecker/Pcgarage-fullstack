
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export const useProtectedPage = () => {
    let navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token === null) {
          navigate("/admin");
        }
    }, [navigate]); 
} 