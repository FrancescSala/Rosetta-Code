function findBestPack(data, maxweight) {
    // Converting this to a 0-1 knapsack problem
    let expandedData = [];
    for (let item of data) 
        for (let i = 1; i<= item.pieces;i++)
            expandedData.push({weight: item.weight, value: item.value}); // we do not need the name

    // now applying knapsack 0 1 to expanded data
    let m = Array(expandedData.length + 1);
    for (let i = 0; i <= expandedData.length; i++) m[i] = new Array(maxweight+1);
    // m[i,w] is the maximum value if taking the first i data and not exceeding weight w
    // m [0,w] = 0
    // m [i,w] = m[i-1,w] if wi > w (the new item is more than the current weight limit)
    // m[i,w] = max(m[i-1,w], m[i-1,w-wi] + v[i]) if wi <= w
    // where vi and wi are value and weight of the i-th item and w is the max weight allowed

    for (let j = 0; j <= maxweight; j++) m[0][j] = 0;
    for (let i = 1; i <= expandedData.length; i++) m[i][0] = 0;
    for (let i = 1; i <= expandedData.length; i++) 
        for (let j = 0; j <= maxweight; j++)
          m[i][j] = (expandedData[i-1].weight > j) ? m[i-1][j] : Math.max(m[i-1][j],m[i-1][j-expandedData[i-1].weight] + expandedData[i-1].value);
    return m[expandedData.length][maxweight];
}

console.log(findBestPack([{ name:'map', weight:9, value:150, pieces:1 }, { name:'compass', weight:13, value:35, pieces:1 }, { name:'water', weight:153, value:200, pieces:2 }, { name:'sandwich', weight:50, value:60, pieces:2 }, { name:'glucose', weight:15, value:60, pieces:2 }, { name:'tin', weight:68, value:45, pieces:3 }, { name:'banana', weight:27, value:60, pieces:3 }, { name:'apple', weight:39, value:40, pieces:3 }, { name:'cheese', weight:23, value:30, pieces:1 }, { name:'beer', weight:52, value:10, pieces:3 }, { name:'suntan, cream', weight:11, value:70, pieces:1 }, { name:'camera', weight:32, value:30, pieces:1 }, { name:'T-shirt', weight:24, value:15, pieces:2 }], 300)); // should return 755.
console.log(findBestPack([{ name:'map', weight:9, value:150, pieces:1 }, { name:'compass', weight:13, value:35, pieces:1 }, { name:'water', weight:153, value:200, pieces:2 }, { name:'sandwich', weight:50, value:60, pieces:2 }, { name:'glucose', weight:15, value:60, pieces:2 }, { name:'tin', weight:68, value:45, pieces:3 }, { name:'banana', weight:27, value:60, pieces:3 }, { name:'apple', weight:39, value:40, pieces:3 }, { name:'cheese', weight:23, value:30, pieces:1 }, { name:'beer', weight:52, value:10, pieces:3 }, { name:'suntan, cream', weight:11, value:70, pieces:1 }, { name:'camera', weight:32, value:30, pieces:1 }, { name:'T-shirt', weight:24, value:15, pieces:2 }], 400)); // should return 875.
console.log(findBestPack([{ name:'map', weight:9, value:150, pieces:1 }, { name:'compass', weight:13, value:35, pieces:1 }, { name:'water', weight:153, value:200, pieces:2 }, { name:'sandwich', weight:50, value:60, pieces:2 }, { name:'glucose', weight:15, value:60, pieces:2 }, { name:'tin', weight:68, value:45, pieces:3 }, { name:'banana', weight:27, value:60, pieces:3 }, { name:'apple', weight:39, value:40, pieces:3 }, { name:'cheese', weight:23, value:30, pieces:1 }, { name:'beer', weight:52, value:10, pieces:3 }, { name:'suntan, cream', weight:11, value:70, pieces:1 }, { name:'camera', weight:32, value:30, pieces:1 }, { name:'T-shirt', weight:24, value:15, pieces:2 }], 500)); // should return 1015.
console.log(findBestPack([{ name:'map', weight:9, value:150, pieces:1 }, { name:'compass', weight:13, value:35, pieces:1 }, { name:'water', weight:153, value:200, pieces:2 }, { name:'sandwich', weight:50, value:60, pieces:2 }, { name:'glucose', weight:15, value:60, pieces:2 }, { name:'tin', weight:68, value:45, pieces:3 }, { name:'banana', weight:27, value:60, pieces:3 }, { name:'apple', weight:39, value:40, pieces:3 }, { name:'cheese', weight:23, value:30, pieces:1 }, { name:'beer', weight:52, value:10, pieces:3 }, { name:'suntan, cream', weight:11, value:70, pieces:1 }, { name:'camera', weight:32, value:30, pieces:1 }, { name:'T-shirt', weight:24, value:15, pieces:2 }], 600)); // should return 1120.
console.log(findBestPack([{ name:'map', weight:9, value:150, pieces:1 }, { name:'compass', weight:13, value:35, pieces:1 }, { name:'water', weight:153, value:200, pieces:2 }, { name:'sandwich', weight:50, value:60, pieces:2 }, { name:'glucose', weight:15, value:60, pieces:2 }, { name:'tin', weight:68, value:45, pieces:3 }, { name:'banana', weight:27, value:60, pieces:3 }, { name:'apple', weight:39, value:40, pieces:3 }, { name:'cheese', weight:23, value:30, pieces:1 }, { name:'beer', weight:52, value:10, pieces:3 }, { name:'suntan, cream', weight:11, value:70, pieces:1 }, { name:'camera', weight:32, value:30, pieces:1 }, { name:'T-shirt', weight:24, value:15, pieces:2 }], 700)); // should return 1225.



/*
function findBestPack(data, maxweight) {
    // understand that, for each object, its weight and value is one piece only.
    let sorted = Array.from(data).sort((a,b) => {return b.value/b.weight - a.value/a.weight}); // sort the data by relative value, descending
    let value = 0;
    let remainder = maxweight;
    sorted.forEach((elem) => {
        if (elem.weight * elem.pieces <= remainder) {  // while there is room in the knapsack, fill the maximum amount
            value += elem.value * elem.pieces;
            remainder-= elem.weight * elem.pieces;
        } else {                         // if there is no room for the maximum amount, take the maximum pieces possible
            let p = Math.floor(remainder / elem.weight); // number of pieces that can be taken
            value += p * elem.value;
            remainder -= p * elem.weight;
        }
    });
    return value;  
}
*/