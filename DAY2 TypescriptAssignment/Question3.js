var StringtoCheck = "abcdcba";
var k = StringtoCheck.length;
var result1 = function (StringtoCheck) {
    for (var i = 0; i < k / 2; i++) {
        if (StringtoCheck[i] !== StringtoCheck[k - 1 - i]) {
            return console.log("Not a Pallindrome");
        }
    }
    return console.log("Is a Pallindrome");
};
result1(StringtoCheck);
