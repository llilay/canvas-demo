function smoothTrail(c, cw, ch) {
    /*Variables*/
    this.c = c;
    this.ctx = c.getContext('2d');
    this.cw = cw;
    this.ch = ch;
    this.mx = 0;
    this.my = 0;

    //trail
    this.trail = [];
    this.maxTrail = 200;
    this.mouseDown = false;

    this.ctx.lineWidth = .1;
    this.ctx.lineJoin = 'round';

    this.radius = 1;
    this.speed = 0.4;
    this.angle = 0;
    this.arcx = 0;
    this.arcy = 0;
    this.growRadius = true;
    this.seconds = 0;
    this.milliseconds = 0;

    /*=============================================================================*/
    /* Utility Functions
  /*=============================================================================*/
    this.rand = function(rMi, rMa){return ~~((Math.random()*(rMa-rMi+1))+rMi);};
    this.hitTest = function(x1, y1, w1, h1, x2, y2, w2, h2){return !(x1 + w1 < x2 || x2 + w2 < x1 || y1 + h1 < y2 || y2 + h2 < y1);};
}

smoothTrail.prototype = {
    init : function () {
      this.loop();
    },

    /**
     * Animation Loop
     */
    loop : function(){
        var _this = this;
        var loopIt = function(){
            requestAnimationFrame(loopIt, _this.c);
            _this.clearCanvas();
            _this.updateArc();
            _this.updateTrail();
            _this.renderTrail();
        };
        loopIt();
    },

    /**
     * Utility Functions
     * @param rMi
     * @param rMa
     * @returns {number}
     */
    rand : function (rMi, rMa) {
        return ~~((Math.random() * (rMa - rMi + 1)) + rMi);//将操作数转化为 32 位有符号整数。
    },

    hitTest : function (x1, y1, w1, h1, x2, y2, w2, h2) {
        return !(x1 + w1 < x2 || x2 + w2 < x1 || y1 + h1 < y2 || y2 + h2 < y1);
    },

    /**
     * Create Point
     *
     * @param x
     * @param y
     */
    createPoint : function (x, y) {
        this.trail.push({
            x: x,
            y: y
        });
    },

    /**
     * Update Trail
     *
     */
    updateTrail : function () {

        if(this.trail.length < this.maxTrail){
            this.createPoint(this.arcx, this.arcy);
        }

        if(this.trail.length >= this.maxTrail){
            this.trail.splice(0, 1);
        }
    },

    /**
     * Update Arc
     */
    updateArc : function () {
        this.arcx = (this.cw/2) + Math.sin(this.angle) * this.radius;
        this.arcy = (this.ch/2) + Math.cos(this.angle) * this.radius;
        var d = new Date();
        this.seconds = d.getSeconds();
        this.milliseconds = d.getMilliseconds();
        this.angle += this.speed*(this.seconds+1+(this.milliseconds/1000));

        if(this.radius <= 1){
            this.growRadius = true;
        }
        if(this.radius >= 200){
            this.growRadius = false;
        }

        if(this.growRadius){
            this.radius += 1;
        } else {
            this.radius -= 1;
        }
    },

    /**
     * Render Trail
     */
    renderTrail : function(){
        var i = this.trail.length;

        this.ctx.beginPath();
        while(i--){
            var point = this.trail[i];
            var nextPoint = (i == this.trail.length) ? this.trail[i+1] : this.trail[i];

            var c = (point.x + nextPoint.x) / 2;
            var d = (point.y + nextPoint.y) / 2;
            this.ctx.quadraticCurveTo(Math.round(this.arcx), Math.round(this.arcy), c, d);
        }
        this.ctx.strokeStyle = 'hsla('+this.rand(170,300)+', 100%, '+this.rand(50, 75)+'%, 1)';
        this.ctx.stroke();
        this.ctx.closePath();

    },

    /**
     * Clear Canvas
     */
    clearCanvas : function () {
        //this.ctx.globalCompositeOperation = 'source-over';
        //this.ctx.clearRect(0,0,this.cw,this.ch);

        this.ctx.globalCompositeOperation = 'destination-out';
        this.ctx.fillStyle = 'rgba(0,0,0,.1)';
        this.ctx.fillRect(0,0,this.cw,this.ch);
        this.ctx.globalCompositeOperation = 'lighter';
    }
};