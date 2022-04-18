let coin=100;
// let counter=document.getElementById("coins")
// let counter=document.getElementsByClassName("nc").value
var isPaused = false;

function update() {

  isPaused = true;

fetch('https://api.thingspeak.com/channels/1630944/fields/1.json?results=2')
    .then(response => response.json())
    .then(data => {
      coin = data.feeds[0]["field1"];
      console.log(coin)
      location.assign("100.html")
      // location.replace("dashboard.html")
      // console.log(data.feeds[0]["field1"]) 
    })


    .catch(error => console.error(error))
  isPaused = false;
  // setTimeout(function () { change() }, 1000);
  ready()
  
}


