function findAddress(obj){
    if (typeof obj !== 'object') {
        return "Please provide a object";
    }
    const firstProperty = obj.street || "__";
    const secondProperty = obj.house || "__";
    const thirdProperty = obj.society || "__";
    return firstProperty +","+ secondProperty + ","+ thirdProperty;
}
