// Write a function that accepts the below string, and returns the number of times each word is repeated. 
// Return data in this format: [{ "team": 1}, {"only": 1}]

let inputString = `Walmart Technology is reinventing the way the world shopts and we've only just begun. Our team includes @Walmart Labs in Silicon Valley and Bengaluru, which powers the eCommerce experience, as well as technology teams across data and analytics, retail, back office and more who help power store and digital experiences.`;

console.log(createWordCountArr(inputString));

function createWordCountArr(string) {
    let inputArr = string.split(" ");
    let resultArr = [];
    let indexTracker = [];
    for (let i = 0; i < inputArr.length; i++) {
        let index = indexTracker.indexOf(inputArr[i])
        if (index === -1) {
            indexTracker.push(inputArr[i]);
            resultArr.push({[inputArr[i]]:1})
        } else {
            resultArr[index][`${inputArr[i]}`]++;
        }
    }
    return resultArr;
}