var Emitter = require("events");
var eventConfig = require("./config").events;

var emitter = new Emitter();

emitter.on(eventConfig.BAD_SCORE, function () {
    console.log("Mot mon nao do diem kem");
});

emitter.on(eventConfig.BAD_SCORE, function () {
    console.log("Mot mon nao do diem kem can dua toi cho phu huynh");
});

var scores = [10,4];
for (var s of scores) {
    if(s < 5){
        console.log("Diem kem qua", s);
        emitter.emit(eventConfig.BAD_SCORE);
    }
    // insert db
}