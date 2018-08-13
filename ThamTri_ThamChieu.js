// value

function changbyValue(b) {
    b = 2;
}

var a = 1;
changbyValue(a);
console.log(a);

// Reference

function changeByRef(obj) {
    obj.propv1 = function () {
        // do something
    }

    obj.newProp = {};
    obj.mNum = 10;
    
}

var c = {};
c.prop1 = {};
changeByRef(c);
console.log(c);
