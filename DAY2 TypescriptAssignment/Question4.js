//Defining class
var item = /** @class */ (function () {
    function item() {
    }
    return item;
}());
//Creating object of the class and assigning values
var obj1 = new item();
obj1.itemId = 101;
obj1.itemName = "Toy";
obj1.itemPrice = 202.50;
obj1.category = "Games";
//Printing the object using arrow function
var result2 = function (obj1) {
    console.log("Item Id of the object is :" + obj1.itemId);
    console.log("Name of the Item is:" + obj1.itemName);
    console.log("Price of the Item is :" + obj1.itemPrice);
    console.log("Category of the Item is :" + obj1.category);
};
result2(obj1);
