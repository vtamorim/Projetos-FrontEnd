const canvas_test = document.getElementById("canvas_test");
const ctx = canvas_test.getContext("2d");
ctx.beginPath();
ctx.moveTo(50,20);
ctx.lineTo(20,100);
ctx.lineTo(50,130);
ctx.lineTo(80,100);
ctx.lineTo(50,20);
ctx.strokeStyle = "blue";
ctx.stroke();

//por enquanto só desenha algumas linha pq é a vida né 