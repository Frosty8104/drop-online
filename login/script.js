const canvas = document.querySelector('.myCanvas');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'rgb(0, 0, 0)';
ctx.fillRect(300, 0, 1200, 1200);

ctx.fillStyle = 'rgb(255, 255, 255)';
ctx.font = '3.125em open sans';
ctx.fillText('DRoP', 800, 300);

function degToRad(degrees) {
    return degrees * Math.PI / 180;
}

var gradientBlue = ctx.createRadialGradient(860, 375, 50, 840, 360, 1);
gradientBlue.addColorStop(0, 'rgb(60, 207, 255)');
gradientBlue.addColorStop(1, 'rgb(255, 255, 255)');
ctx.fillStyle = gradientBlue;
ctx.arc(860, 375, 50, 800, 375, 1);
ctx.fill();

ctx.fillStyle = 'rgb(255, 255, 255)';
ctx.font = '1.5em open sans';
ctx.fillText('USERNAME', 800, 460);

ctx.fillStyle = 'rgb(255, 255, 255)';
ctx.fillRect(780, 480, 175, 50);

var gradientYellow = ctx.createRadialGradient (700, 600, 50, 680, 590, 1);
gradientYellow.addColorStop(0, 'rgb(255, 255, 125)');
gradientYellow.addColorStop(1, 'rgb(255, 255, 255)');
ctx.fillStyle = gradientYellow;
ctx.beginPath();
ctx.arc(700, 600, 50, 680, 590, 1);
ctx.fill();

var gradientGreen = ctx.createRadialGradient(1050, 600, 50, 1070, 590, 1);
gradientGreen.addColorStop(0, 'rgb(175, 255, 120)');
gradientGreen.addColorStop(1, 'rgb(255, 255, 255)');
ctx.fillStyle = gradientGreen;
ctx.arc(1050, 600, 50, 1070, 590, 1);
ctx.fill();

ctx.fillStyle = 'rgb(255, 255, 255)';
ctx.font = '1.5em open sans';
ctx.fillText('PASSWORD', 800, 570);

ctx.fillStyle = 'rgb(255, 255, 255)';
ctx.fillRect(780, 590, 175, 50);

ctx.fillStyle = 'rgb(255, 255, 255)';
ctx.fillRect(800, 660, 125, 50);
ctx.fillStyle = 'rgb(0, 0, 0)';
ctx.font = '1.5em open sans';
ctx.fillText('LOGIN', 825, 695);

var gradientRed = ctx.createRadialGradient(860, 790, 50, 840, 800, 1);
gradientRed.addColorStop(0, 'rgb(255, 50, 50)');
gradientRed.addColorStop(1, 'rgb(255, 255, 255)');
ctx.fillStyle = gradientRed;
ctx.beginPath();
ctx.arc(860, 790, 50, 840, 800, 1);
ctx.fill();

ctx.fillStyle = 'rgb(255, 255, 255)';
ctx.font = '3.125em open sans';
ctx.fillText('ONLINE', 770, 900);