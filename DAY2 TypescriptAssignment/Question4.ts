//Defining class
class item{
    itemId:number;
    itemName: string;
    itemPrice:number;
    category:string
}

//Creating object of the class and assigning values
let obj1= new item();
obj1.itemId=101;
obj1.itemName="Toy";
obj1.itemPrice= 202.50;
obj1.category="Games";

//Printing the object using arrow function
var result2=(obj1:item)=>{
    console.log("Item Id of the object is :" +obj1.itemId);
    console.log("Name of the Item is:" +obj1.itemName);
    console.log("Price of the Item is :" +obj1.itemPrice);
    console.log("Category of the Item is :" +obj1.category);

}
result2(obj1);