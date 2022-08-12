import axios from "axios";

const delRequestData = (url) => {
    let data = "";
    let urlLink = url
   
    const headers = {
        'headers': {
            'Content-Type': 'application/json'
        }
    }

    axios
        .delete(urlLink,headers)
        .then((response) => {

            data = response.data;
        })
        .catch((error) => {
            console.log("erro", error.response.data)
        });

    return data;
}

export default delRequestData