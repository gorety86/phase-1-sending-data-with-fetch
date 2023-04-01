const submitData = {
  Name: "Doreen",
  Email: "doreen@gmail.com",
};
const configurationObject = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({submitData}),
};
function submitData() {
  fetch(`http://localhost:3000/users`, configurationObject)
  .then(function (response) {
    return response.json();})
  .then(function (object) {
    console.log(object);
  })
    .catch(function(error) {
      alert("message");
      console.log(error.message);
    });
  
};


  