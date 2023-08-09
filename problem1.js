function cubeNumber(number) {
    if(typeof number !== "number"){
        return "Please provide a number";
    }
    else{
        return number*number*number;
    }

}