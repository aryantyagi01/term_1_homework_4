function alphaRange (start, end) {
  return new Array(end.charCodeAt(0) - start.charCodeAt(0)+1).fill().map((d, i) => String.fromCharCode(i + start.charCodeAt(0)));
}
console.log(alphaRange('c','h'));
var reverseArray = alphaRange.reverse();
console.log(reverseArray);
