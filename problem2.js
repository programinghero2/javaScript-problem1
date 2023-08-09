function matchFinder(string1, string2) {
    if(typeof string1 !== "string" || typeof string2 !== "string"){
        return "Please provide me a String";
    }
    else{
        return string1.includes(string2);
    }
}


