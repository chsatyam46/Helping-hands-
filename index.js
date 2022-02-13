const menu = document.querySelector('.menu');
const sidebar = document.querySelector('#sidebar')
menu.addEventListener('click',()=>{
    sidebar.classList.toggle('move');
})
// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.036 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  function sendMail(params){
    var tempParams= {
        user_name:document.getElementById("name").value,
        user_subj:document.getElementById("subj").value,
        user_email:document.getElementById("email").value,
        message:document.getElementById("message").value
    };
    emailjs.send('service_y66vpvr','template_ba0apmq',tempParams).then(function(res){
        console.log(res.status);
        if(res.status == 200){
            document.getElementById("response").innerText="Message Sent";
        }
    })
}
function geoFindMe() {
  const status = document.querySelector("#status");
  console.log(status)
  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    status.innerText="NGO's Near :" + String(latitude) +" , " + String(longitude)
  }

  function error() {
    status.textContent = "Unable to retrieve your location";
  }

  if (!navigator.geolocation) {
    status.textContent = "Geolocation is not supported by your browser";
  } else {
    navigator.geolocation.getCurrentPosition(success, error);
  }
}

document.querySelector("#find-me").addEventListener("click", geoFindMe);