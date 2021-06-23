    const lat = document.querySelector('.lat')
    const lng = document.querySelector('.lng')
    let mymap = L.map('map').setView([0, 0], 2);  
    let button = document.querySelector('.get-location');
    let truckIcon = L.icon({
        iconUrl: 'house.png',
        iconSize: [40, 50],
        iconAnchor: [20, 25],
    });
    
    const marker = L.marker([lat.textContent, lng.textContent], {icon: truckIcon})


    //check for location
    if (`geolocation` in navigator) {
        console.log('geolocation is supported');

   
        const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
        const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        const tiles =  L.tileLayer(tileUrl, { attribution });

        tiles.addTo(mymap)
        button.addEventListener('click', ()=> {
            marker.addTo(mymap)
            navigator.geolocation.getCurrentPosition( (pos) => {
                lat.innerHTML = `${pos.coords.latitude}`
                lng.innerHTML = `${pos.coords.longitude}`
                marker.setLatLng([lat.textContent, lng.textContent]) // set marker position to the given geolocation
            });
    
            marker.bindPopup('<p>This is probably your location</p>').openPopup();
        });
        document.querySelector('#map').classList.toggle('toggle')

        
    } else {
        console.log('Your browser does not support geolocation');
    }