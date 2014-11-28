var config = {
    openStreetMap: {
        url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
    },
    mapbox: {
        url: 'http://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png',
        id: 'your.mapbox.id',
        attribution: "<a href='https://www.mapbox.com/about/maps/' target='_blank'>&copy; Mapbox &copy; OpenStreetMap</a> <a class='mapbox-improve-map' href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a>"
    },
    files: {
        areas: 'data/Areas.geojson',
        districts: 'data/Districts.geojson',
        sectors: 'data/Sectors.geojson'
    },
    shapeStyle: {
        weight: 2,
        opacity: 1,
        color: 'white',
        fillOpacity: 0.3
    },
    zoom: {
        areas: 4,
        districts: 11,
        sectors: 15,
        max: 16
    }
};
