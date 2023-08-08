function cubeNumber(number) {
    if(typeof number !== "number"){
        return "Please provide a number";
    }
    if(number <= 0){
        return "Please provide a positive number";
    }
    else{
        return number*number*number;
    }

}
console.log(cubeNumber(4));