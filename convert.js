var argv = require('minimist')(process.argv.slice(2)),
    fs = require('fs'),
    path = require('path'),
    ogr2ogr = require('ogr2ogr'),
    ogr2ogrOptions = [];

if (argv.help || argv.h || !(argv.i && argv.o)) {
    console.log("Usage: node convert -i {input_file} -o {output_file} [-p {precision}]");
    process.exit(1);
}

// Setup default decimal prevision to 3
var precision =
    (argv.p && !isNaN(parseInt(argv.p))) ? parseInt(argv.p) :
    (argv.precision && !isNaN(parseInt(argv.precision))) ? parseInt(argv.precision) :
    3;
ogr2ogrOptions.push('-lco', 'COORDINATE_PRECISION='+precision);

console.log("Reading '"+argv.i+"'");

ogr2ogr(path.join(__dirname, argv.i))
    .options(ogr2ogrOptions)
    .exec(function(err, data) {
        if (err) {
            console.error("Error reading input file.");
        } else {
            fs.createWriteStream(path.join(__dirname, argv.o))
                .on('error', function() {
                    console.error("Error writing output file.");
                })
                .end(JSON.stringify(data), function() {
                    console.log("Finished. Saved '"+argv.o+"'");
                });
        }
    });

process.on('uncaughtException', function() {
    console.error("Input file does not exist.");
});
