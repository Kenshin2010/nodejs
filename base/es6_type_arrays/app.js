var buffer = new ArrayBuffer(16);
var view = new Int32Array(buffer);

view[0] = 5;
view[1] = 10;
view[2] = 15;
view[3] = 15;

console.log(view);
