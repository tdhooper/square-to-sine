
/**
 * @name square to sine
 */

export function dsp(t) {
  // 10, 200
  // 8, 150
  // t /= 2;
  var s = pulsate(t, 8, 150);
  return s;
}

function pulsate(t, x, y) {
  var pow = updown(t*x, 10);
  // return pow / 10;
  pow = pow * 2 + 4;
  var lineFunc = squareSine(pow);
  var p = t*275;
  p = t * y;
  var e = lineFunc(p);
  return e * 1;
}

function updown(t, steps) {
  var p = (Math.sin(t) * steps) + steps;
  var u = Math.round(p);
  
  // var u = Math.round(t % steps * 2);

  var reverse = u > steps;
  var v = u * (reverse ? -1 : 1) + (reverse ? steps * 2 : 0);
  return v;
}


function squareSine(pow) {
  return function(x) {
    var period = x / (Math.PI / 2) % 4;
    var a = Math.pow(period - 3, pow) - 1;
    var b = -Math.pow(period - 1, pow) + 1;
    return period > 2 ? a : b;
  };
}