import axios from "axios";

const delRequestData = (url,id) => {
    let data = "";

    let urlLink = url

    let body ={
        id:id
    }
    console.log("body:",body)

        axios
            .delete(urlLink,body)
            .then((response) => {

                data=response.data;
            })
            .catch((error) => {
                console.log("erro", error)
            });
  
    return data;

}

export default delRequestData