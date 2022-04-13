// data to be sent to the POST request

function postInformation(event) {
  let clientName = document.querySelector("#name").value;
  let gmail = document.querySelector("#gmail").value;
  let msg = document.querySelector("#message").value;

  let data = {
    name: clientName,
    email: gmail,
    message: msg,
  };

  event.preventDefault()
  document.querySelector("#name").value = ' '
  document.querySelector("#gmail").value = ' '
  document.querySelector("#message").value = ' '
  alert(`You just sent us a message we'll get back to you soonest`)

  fetch("https://devhub-backend01.herokuapp.com/api/clients", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-type": "application/json" },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((err) => console.log(err));

  return false;
}
