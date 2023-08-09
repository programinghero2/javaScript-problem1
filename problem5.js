function canPay(changeArray, totalDue) {
    if(changeArray.length == 0){
        return "Your array is empty.Please provide me number in array";
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

