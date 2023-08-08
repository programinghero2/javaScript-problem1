function findAddress(obj) {
    if (typeof obj !== 'object') {
        return "Please provide a object";
    }
    const firstProperty = obj.street || "_";
    const secondProperty = obj.house || "_";
    const thirdProperty = obj.society || "_";
    return firstProperty +","+ secondProperty + ","+ thirdProperty;
}
const obj = {
    street: 10,
    house: "15A",
    society: "Earth Perfect"
}
console.log(findAddress(obj));