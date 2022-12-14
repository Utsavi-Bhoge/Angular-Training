interface Shape{
    shapeName:string,
    printName()
}

//Class Cone
class Cone implements Shape{
    radius:number;
    length:number;
    shapeName:"Cone";

constructor(Radius:number, Length:number)
{
this.radius=Radius;
this.length=Length;
}
areaCone()
{
    var area= 3.14* this.radius*this.length;
    console.log("Area of Cone is :" +area);
}
printName() {
    console.log("Name of the shape is:"+this.shapeName);
}
}

//Class Sphere
class Sphere implements Shape{
    shapeName:"Sphere";
    radius:number;
    constructor(Radius:number)
{
this.radius=Radius;
}
areaSphere()
{
    var area= 4*3.14*this.radius*this.radius;
    console.log("Area of sphere is :" +area);
}
printName() {
    console.log("Name of the shape is:"+this.shapeName);
}
}

//Class Rectangle
class Rectangle implements Shape{
    shapeName:"Rectangle";
    length:number;
    width:number;
    constructor(Length:number, Width:number)
    {
   this.length=Length;
   this.width=Width;
    }
areaRectangle()
{
    var area= this.length*this.width;
    console.log("Area of Rectangle is " +area);
}
    printName() {
        console.log("Name of the shape is:"+this.shapeName);
    }
}

var objCone=new Cone(10,12);
objCone.areaCone();
var objSphere= new Sphere(10);
objSphere.areaSphere();
var objRectangle= new Rectangle(10,12);
objRectangle.areaRectangle();



    


    
