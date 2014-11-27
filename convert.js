var argv = require('minimist')(process.argv.slice(2)),
    fs = require('fs'),
    path = require('path'),
    ogr2ogr = require('ogr2ogr');

if (argv.help || argv.h || !(argv.i && argv.o)) {
    console.log("Usage: node convert -i {input_file} -o {output_file}");
    process.exit(1);
}

console.log("Reading '"+argv.i+"'");

ogr2ogr(path.join(__dirname, argv.i))
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
