# UK Postcodes

ShapeFile to GeoJSON converter and Leaflet.js viewer.

### Initialise GeoJSON Files

```
zip data/Areas.zip data/Areas.*
zip data/Districts.zip data/Districts.*
zip data/Sectors.zip data/Sectors.*

node convert -i data/Areas.zip -o data/Areas.geojson
node convert -i data/Districts.zip -o data/Districts.geojson
node convert -i data/Sectors.zip -o data/Sectors.geojson
```

### Serve files

```
python3 -m http.server
```
