var a = [1, 10, 100];

function callBack(value, index) {
    return `Value: ${value}, Index: ${index}`;

}

const callBackF = a.map(callBack);

console.log(callBackF);