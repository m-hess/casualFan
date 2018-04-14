/* Sources:
* Map Initialization: https://www.mapbox.com/mapbox-gl-js/example/simple-map/,
* Custom Icons: https://www.mapbox.com/mapbox-gl-js/example/custom-marker-icons/,
* Attaching Markers: https://www.mapbox.com/help/custom-markers-gl-js/#add-markers-to-the-map,
*/

mapboxgl.accessToken = 'pk.eyJ1IjoibWhlc3MiLCJhIjoiY2pja3F6dml1M2xqNDMzdDVjcmZyaWk1dCJ9.ONgNzFewg2rKF7bRvd7TPA';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v9', // stylesheet location
    center: [-122.3, 37.7749], // starting position [lng, lat]
    zoom: 8 // starting zoom
});

var geojson = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "message": "Foo",
                "iconSize": [60, 60],
                "iconName": "goldenStateWarriors",
                "team": "Golden State Warriors",
                "sport": "basketball",
                "arena": "Oracle Arena"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -122.201832526,
                    37.750163666
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "message": "Bar",
                "iconSize": [50, 50],
                "iconName": "sfGiants",
                "team": "SF Giants",
                "sport": "baseball",
                "arena": "AT&T Park"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -122.3893,
                    37.7786
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "message": "Baz",
                "iconSize": [40, 40],
                "team": "SF 49ers",
                "iconName": "sf49ers",
                "sport": "football",
                "arena": "Oracle Arena"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -121.9698,
                    37.4032
                ]
            }
        }
    ]
};

// add markers to map
geojson.features.forEach(function(marker) {
    // create a DOM element for the marker
    var el = document.createElement('div');
    el.className = 'marker';
    //el.style.backgroundImage = 'url(https://placekitten.com/g/' + marker.properties.iconSize.join('/') + '/)';
    el.style.backgroundImage = 'url(icon/' + marker.properties.iconName + '.png)';
    console.log('url(icon/' + marker.properties.iconName + '.png)');
    //el.style.width = '60px';
    //el.style.height = '60px';

    // el.addEventListener('click', function() {
    //     window.alert(marker.properties.message);
    // });

    // add marker to map
    new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML('<h3>' + marker.properties.team + '</h3><p>' + marker.properties.arena + '</p>'))
        .addTo(map);

});
