class CaseStudy02 {
    _x;
    _y;
    _width;
    _height;
    _src;
    _speed;
    constructor(x, y, width, height, src, speed) {
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
        this._src = src;
        this._speed = speed;
    }
    get x() {
        return this._x;
    }
    set x(value) {
        this._x = value;
    }
    get y() {
        return this._y;
    }
    set y(value) {
        this._y = value;
    }
    get width() {
        return this._width;
    }
    set width(value) {
        this._width = value;
    }
    get height() {
        return this._height;
    }
    set height(value) {
        this._height = value;
    }
    get src() {
        return this._src;
    }

    set src(value) {
        this._src = value;
    }
    get speed() {
        return this._speed;
    }
    set speed(value) {
        this._speed = value;
    }
    moveLeft() {
        this._x -= 10;
        if (this._x < 0) {
            this._x = 1400;
        }
    }
    moveright(){
        this._x +=10;
        if (this._x>1400){
            this._x=0;
        }
    }
    movenen(){
        this._x -= 10;
        if (this._x<-100){
            this._x=0;
        }
    }
    drawRock(ctx) {
        let image = new Image();
        image.src = this._src;
        // image.onload = () => {
        ctx.drawImage(image, this._x, this._y, this._width, this._height);
    }
    collision(stop) {
        if (this._x < 300 && this._x > 150 && stop == 470) {
            return true
        }
    }
}