debugger

var iDontKnow = "I am dumb";

var iWantToKnowOR = iDontKnow | 0;

var iWantToKnowAND = iDontKnow & 0;

    var a = 1;
    var b = 2;
    var c = 3;
    var d = 0;
    var e = "I do not know that";

var Person = function() {
    Name = "Nikhil Babar";
    Age = 25;

    Walk =  function () {
        Age = 28;
    }
};

var r1 = a | b | c | d;
var r2 = a & b & c & d;
var r3 = a | c | b | d;
var r4 = a | c | b | e;
var r5 = b | e;
var r6 = e | a;

var henceIKnow = iWantToKnow;

// I do not know that
//     I do not know that
//         I do not know that
//             I do not know that
//                 I do not know that
