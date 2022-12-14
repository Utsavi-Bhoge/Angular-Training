var Cone = /** @class */ (function () {
    function Cone(Radius, Length) {
        this.radius = Radius;
        this.length = Length;
    }
    Cone.prototype.areaCone = function () {
        var area = 3.14 * this.radius * this.length;
        console.log("Area of Cone is :" + area);
    };
    Cone.prototype.printName = function () {
        console.log("Name of the shape is:" + this.shapeName);
    };
    return Cone;
}());
var Sphere = /** @class */ (function () {
    function Sphere(Radius) {
        this.radius = Radius;
    }
    Sphere.prototype.areaSphere = function () {
        var area = 4 * 3.14 * this.radius * this.radius;
        console.log("Area of sphere is :" + area);
    };
    Sphere.prototype.printName = function () {
        console.log("Name of the shape is:" + this.shapeName);
    };
    return Sphere;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(Length, Width) {
        this.length = Length;
        this.width = Width;
    }
    Rectangle.prototype.areaRectangle = function () {
        var area = this.length * this.width;
        console.log("Area of Rectangle is " + area);
    };
    Rectangle.prototype.printName = function () {
        console.log("Name of the shape is:" + this.shapeName);
    };
    return Rectangle;
}());
var objCone = new Cone(10, 12);
objCone.areaCone();
var objSphere = new Sphere(10);
objSphere.areaSphere();
var objRectangle = new Rectangle(10, 12);
objRectangle.areaRectangle();
