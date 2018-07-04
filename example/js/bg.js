var CANVAS_WIDTH = window.innerWidth;
var CANVAS_HEIGHT = window.innerHeight;

var dot;

function init() {
    dot = {
        x: 100,
        y: 100,
        speed: 3,
        direction: Math.PI * 2 * Math.random()
    };
}

function updatePosition() {
    var dx = dot.x + dot.speed * Math.cos(dot.direction);
    var dy = dot.y + dot.speed * Math.sin(dot.direction);

    if (dx < 0 || dx > CANVAS_WIDTH || dy < 0 || dy > CANVAS_HEIGHT) {
        dot.direction = Math.PI * 2 * Math.random();
        updatePosition();
    } else {
        dot.x = dx;
        dot.y = dy;
    }
}

function loop() {
    var canvas = document.getElementById('canvas');

    if (canvas && canvas.getContext) {
        var context = canvas.getContext('2d');
        canvas.width = CANVAS_WIDTH;
        canvas.height = CANVAS_HEIGHT;

        context.beginPath();
        context.moveTo(100, CANVAS_HEIGHT - 100);//左下角
        context.lineTo(100, 100);//左上角
        context.lineTo(CANVAS_WIDTH - 100, 100);//右上角

        context.moveTo(100, CANVAS_HEIGHT - 100);//左下角
        context.lineTo(CANVAS_WIDTH - 100, CANVAS_HEIGHT - 100);//右下角
        context.lineTo(CANVAS_WIDTH - 100, 100);//右上角

        //context.closePath();
        context.stroke();//描边
    }
}


