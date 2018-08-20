var Emitter = require("./emitter");

var emitter = new Emitter();

emitter.on("bad", function () {
    console.log("Mot mon nao do diem kem");
});

emitter.on("bad", function () {
    console.log("Mot mon nao do diem kem can dua toi cho phu huynh");
});

var scores = [10,4];
for (var s of scores) {
    if(s < 5){
        console.log("Diem kem qua", s);
        emitter.emit("bad");
    }
    // insert db
}