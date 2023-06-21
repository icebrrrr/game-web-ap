fetch("me.json").then(function (response){
  return response.jason();
}).then(function (obj){
  console.log(obj);
}).catch(function (error) {
  console.error("oops looks like a failure (you) :3"); //either a network error or the jason file has a parcing error
  
})