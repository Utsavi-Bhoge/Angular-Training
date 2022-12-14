var UserArray;
UserArray = [10, 60, 21, 80, 22, 44, 123, 321, 12, 99, 11, 229];
var result = function (UserArray) {
    console.log(UserArray.sort(function (a, b) { return a - b; }));
};
result(UserArray);
