import { useEffect, useState } from "react";
import axios from "axios";

const useRequestData = (url) => {
    const [data, setData] = useState();
    let urlLink = url

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

export default useRequestData

