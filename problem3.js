function sortMaker(arr) {
    if (!Array.isArray(arr)) {
        return "Please provide me a array";
    }
    else {
        for (const element of arr) {
            if (element <= 0) {
                return "Invalid Input";
            }
        }
    }
    if(arr[0] === arr[1]){
        return "equal";
    }
    if(arr[0] < arr[1]){
       return [arr[0],arr[1]] = [arr[1],arr[0]];
    }
    else{
        return arr;
    }
}
console.log(sortMaker([4, 2]));
