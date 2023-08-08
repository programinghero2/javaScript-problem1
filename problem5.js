function canPay(changeArray, totalDue) {
    if(changeArray.length == 0){
        return "please enter number in array";
    }
    let changeArraySum = 0;
    for (const element of changeArray) {
        changeArraySum += element;
    }
    if(changeArraySum >= totalDue){
        return true;
    }
    return false;
}
console.log(canPay([1,2,5], 10))
