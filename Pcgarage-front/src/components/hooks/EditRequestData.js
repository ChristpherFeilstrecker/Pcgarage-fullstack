import axios from "axios";
//import { useState } from "react";

const editDestaqueData = (url,body) => {
    let data = "";
    let urlLink = url

        axios
            .put(urlLink,body)
            .then((response) => {

                data=response.data;
            })
            .catch((error) => {
                console.log("erro", error.response)
            });
  
    return data;

}

export default editDestaqueData