fetch("me.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (obj) {
    console.log(obj);
  })
  .catch(function (error) {
    console.error("Oops, looks like a failure :3 : " + error);
  });