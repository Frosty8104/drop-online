const canvas = document.querySelector('.myCanvas');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');


ctx.fillStyle = 'rgb(0, 0, 0)';
ctx.fillRect(0, 0, height, width);

ctx.fillStyle = 'white';
ctx.font = '3.125em open sans';
ctx.fillText('DRoP', 685, 300);

function degToRad(degrees) {
    return degrees * Math.PI / 180;
}
ctx.fillStyle = 'rgb(60, 207, 255)';
ctx.beginPath();
ctx.arc(750, 375, 50, degToRad(0), degToRad(360), false);
ctx.fill();

ctx.fillStyle = 'rgb(175, 255, 120)';
ctx.beginPath();
ctx.arc(950, 600, 50, degToRad(0), degToRad(360), false);
ctx.fill();

ctx.fillStyle = 'white';
ctx.font = '1.5em open sans';
ctx.fillText('USERNAME', 685, 475);

ctx.fillStyle = 'rgb(255, 255, 255)';
ctx.fillRect(660, 500, 175, 50);
ctx.strokeStyle = 'rgb(90, 90, 90)';
ctx.lineWidth = 1;
ctx.strokeRect(660, 500, 175, 50);

ctx.fillStyle = 'white';
ctx.font = '1.5em open sans';
ctx.fillText('PASSWORD', 685, 595);

ctx.fillStyle = 'rgb(255, 255, 255)';
ctx.fillRect(660, 625, 175, 50);
ctx.strokeStyle = 'rgb(90, 90, 90)';
ctx.lineWidth = 1;
ctx.strokeRect(660, 625, 175, 50);

ctx.fillStyle = 'rgb(255, 255, 255)';
ctx.fillRect(680, 700, 125, 50);
ctx.fillStyle = 'rgb(0, 0, 0)';
ctx.font = '1.5em open sans';
ctx.fillText('LOGIN', 705, 735);
ctx.strokeStyle = 'rgb(90, 90, 90)';
ctx.lineWidth = 1;
ctx.strokeRect(680, 700, 125, 50);

ctx.fillStyle = 'rgb(255, 50, 50)';
ctx.beginPath();
ctx.arc(750, 835, 50, degToRad(0), degToRad(360), false);
ctx.fill();

ctx.fillStyle = 'rgb(255, 255, 125)';
ctx.beginPath();
ctx.arc(550, 600, 50, degToRad(0), degToRad(360), false);
ctx.fill();

ctx.fillStyle = 'white';
ctx.font = '3.125em open sans';
ctx.fillText('ONLINE', 650, 1000);