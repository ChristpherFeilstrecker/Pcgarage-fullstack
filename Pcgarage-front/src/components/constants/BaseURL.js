export const BASE_URL = 
"https://lojapcgarage.com.br/app"
//"http://localhost:21046/app"
//"https://pcgarage-api.herokuapp.com/app"

if (window.location.protocol == 'http:') {
      
    console.log("you are accessing us via "
        +  "an insecure protocol (HTTP). "
        + "Redirecting you to HTTPS.");
          
    window.location.href = 
        window.location.href.replace(
                   'http:', 'https:');
} 
else if
    (window.location.protocol == "https:") {
        console.log("you are accessing us via"
            + " our secure HTTPS protocol.");
    }
