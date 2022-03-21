// data to be sent to the POST request


 function postInformation() {
   let clientName = (document.querySelector('#name')).value;
let gmail = (document.querySelector("#gmail")).value;
let msg = (document.querySelector("#message")).value;

let data = {
  name: clientName,
  email: gmail,
  message: msg
};


fetch('https://devhub-backend01.herokuapp.com/api/clients', {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json" }
      })

      .then(response => response.json())
      .then(json => console.log(json))
      .catch(err => console.log(err));
      
      return false;
} 
