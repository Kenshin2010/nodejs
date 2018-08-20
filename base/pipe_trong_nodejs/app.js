var fs = require("fs");
var zlib = require("zlib");

var readable = fs.createReadStream(__dirname + "/readme.txt", {
    encoding: "utf8",
    highWaterMark: 16 * 1024
});

var writeable = fs.createWriteStream(__dirname + "/readme_copy.txt");
var compressed = fs.createWriteStream(__dirname + "/readme.txt.gz");

var gzip = zlib.createGzip();

//copy
readable.pipe(writeable);

//compress
readable.pipe(gzip).pipe(compressed);