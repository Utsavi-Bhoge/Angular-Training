class Words{
    stringName: string;

    setValue(input:string){
        this.stringName= input;
    }
    checkString() 
    {
        var countConsonants=0;
        var countVowels=0;
        var newStringName= this.stringName.toUpperCase();
        if(newStringName[0] == "A" || newStringName[0] == "E" || newStringName[0] == "I" || newStringName[0]== "O" || newStringName[0] == "U")
        {
            for (var i = 0; i < this.stringName.length; i++) {

                if (
                newStringName[i] !== "A" && newStringName[i] !== "E"&& newStringName[i] !== "I" && newStringName[i] !== "O" && newStringName[i] !== "U") {
                  countConsonants++;
                }
            }
            console.log("First Letter of the string is Vowel and Total number of consonants are" +countConsonants);
        }
        else
        {
            for (var i = 0; i < this.stringName.length; i++) {

                if (
                newStringName[i] == "A" || newStringName[i] == "E" || newStringName[i] == "I" || newStringName[i] == "O" || newStringName[i] == "U") {
                  countVowels++;
                }
            }
            console.log("First Letter of the string is Consonant and Total number of Vowels are: " + countVowels);
        }
    }
}
var objWords= new Words();
objWords.setValue("utsavi");
objWords.checkString();