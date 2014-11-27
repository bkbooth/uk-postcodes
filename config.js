var config = {
    mapBox: {
        url: 'http://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png',
        id: 'your.mapbox.id',
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'
    },
    fileAreas: 'data/Areas.geojson',
    fileDistricts: 'data/Districts.geojson',
    fileSectors: 'data/Sectors.geojson',
    shapeStyle: {
        weight: 2,
        opacity: 1,
        color: 'white',
        fillOpacity: 0.3
    }
};
