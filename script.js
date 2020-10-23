function plus(){
  var a=document.forma1.p1.value;
  var b=document.forma1.p2.value;
  var s=+a + +b;
  document.forma1.res.value=s;
}
function minus(){
  var a=document.forma1.m1.value;
  var b=document.forma1.m2.value;
  var s=a - b;
  document.forma1.res2.value=s;
}
function ymnos(){
  var a=document.forma1.y1.value;
  var b=document.forma1.y2.value;
  var s=a * b;
  document.forma1.res3.value=s;
}

function delen(){
  var a=document.forma1.d1.value;
  var b=document.forma1.d2.value;
  var s=a / b;
  document.forma1.res4.value=s;
}