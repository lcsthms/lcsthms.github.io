mapboxgl.accessToken = 'pk.eyJ1IjoibGNzdGhtcyIsImEiOiJjbGI0NmQ5MTgwaXkxM3dvdXh4bXh3YjZ3In0.J1PmCUuyOPQm6LW_R9HINA';
    const map = new mapboxgl.Map({
        container: 'map',
        projection: 'mercator',
        style: 'mapbox://styles/lcsthms/clcyk6syk000r14o6pfdb9mah',
        center: [65, 40],  // coordonnées indonésie [118, -2] et zoom : 3, coordonnées pays bas [5, 52] zoom 5, coordonnées afrique de l'ouest [-1, 8] zoom 4
        zoom: 1.5
});

map.scrollZoom.disable();

map.on('load', () => {
    map.addSource('cbs', {  // country-boundaries-simplified
        'type': 'geojson',
        'data': 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_countries.geojson'
    });
    
    map.addLayer({
        "id": "cf",  // country-fills
        "type": "fill",
        "source": "cbs",
        "layout": {},
        "paint": {
            "fill-color": "#3493ad",
            "fill-opacity": 0
        }
    });
    
    map.addLayer({
        "id": "cb",  // country borders
        "type": "line",
        "source": "cbs",
        "layout": {},
        "paint": {
            "line-color": "#561217",
            "line-width": 1
        }
    });
    
    map.addLayer({
        "id": "cfh",  // country-fills-hover",
        "type": "fill",
        "source": "cbs",
        "layout": {},
        "paint": {
            "fill-color": "#561217",
            "fill-opacity": 0.7
        },
        "filter": ["==", "name", ""]
    });
    
    // map.on("mousemove", function(e) {
    //     var features = map.queryRenderedFeatures(e.point, { layers: ["cf"] });
    //     if (features.length) {
    //         map.getCanvas().style.cursor = 'pointer';
    //         map.setFilter("cfh", ["==", "name", features[0].properties.name]);
    //         } else {
    //         map.setFilter("cfh", ["==", "name", ""]);
    //         map.getCanvas().style.cursor = '';
    //     }
    // });
    
    // Reset the state-fills-hover layer's filter when the mouse leaves the map
    // map.on("mouseout", function() {
    //     map.getCanvas().style.cursor = 'auto';
    //     map.setFilter("cfh", ["==", "name", ""]);
    // });


    const indonesie = document.getElementById('pays1')
    const nether = document.getElementById('pays2')
    const ghana = document.getElementById('pays3')

    indonesie.addEventListener('click', event => {
        map.flyTo({
            center:[118, -2] , zoom:3 });
        map.setFilter("cfh", ["==", "name", "Indonesia"]);
    })

    nether.addEventListener('click', event => {
        map.flyTo({
            center:[5, 52] , zoom:5 });
        map.setFilter("cfh", ["==", "name", "Netherlands"]);
    })

    ghana.addEventListener('click', event => {
        map.flyTo({
            center:[-1, 8] , zoom:4 });
        map.setFilter("cfh", ["==", "name", "Ghana"]);
    })    

});

