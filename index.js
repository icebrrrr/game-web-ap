fetch("me.json")//http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=DF10C6945517FC63BBDCC3B9EE3753C1&steamids=76561199092973836
  .then(function (response) {
    return response.json();
  })
  .then(function (obj) {
    console.log(obj);
  })
  .catch(function (error) {
    console.error("Oops, looks like a failure :3 : " + error);
  });