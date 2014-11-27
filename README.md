# UK Postcodes

ShapeFile to GeoJSON converter and Leaflet.js viewer.

### Initialise GeoJSON Files

```
node convert -i data/Areas.shp -o data/Areas.geojson
node convert -i data/Districts.shp -o data/Districts.geojson
node convert -i data/Sectors.shp -o data/Sectors.geojson
```

(optionally pass `-p {precision}` to set decimal precision (eg. `-p 2`)

### Serve files

```
python3 -m http.server
```
