// I had a look to a pseudocode in English wikipedia. (https://en.wikipedia.org/wiki/Knapsack_problem)
function knapsack(items, maxweight) {
    let m = Array(items.length+1);
    for (let i = 0; i <= items.length; i++) m[i] = new Array(maxweight+1);
    // m[i,w] is the maximum value if taking the first i items and not exceeding weight w
    // m [0,w] = 0
    // m [i,w] = m[i-1,w] if wi > w (the new item is more than the current weight limit)
    // m[i,w] = max(m[i-1,w], m[i-1,w-wi] + v[i]) if wi <= w
    // where vi and wi are value and weight of the i-th item and w is the max weight allowed

    for (let j = 0; j <= maxweight; j++) m[0][j] = 0;
    for (let i = 1; i <= items.length; i++) m[i][0] = 0;
    for (let i = 1; i <= items.length; i++) 
        for (let j = 0; j <= maxweight; j++)
          m[i][j] = (items[i-1].weight > j) ? m[i-1][j] : Math.max(m[i-1][j],m[i-1][j-items[i-1].weight] + items[i-1].value);
    return m[items.length][maxweight];
}

/*
console.log(knapsack([{ name:'map', weight:9, value:150 }, { name:'compass', weight:13, value:35 }, { name:'water', weight:153, value:200 }, { name:'sandwich', weight:50, value:160 }, { name:'glucose', weight:15, value:60 }, { name:'tin', weight:68, value:45 }, { name:'banana', weight:27, value:60 }, { name:'apple', weight:39, value:40 }], 100)); // should return 405
console.log(knapsack([{ name:'map', weight:9, value:150 }, { name:'compass', weight:13, value:35 }, { name:'water', weight:153, value:200 }, { name:'sandwich', weight:50, value:160 }, { name:'glucose', weight:15, value:60 }, { name:'tin', weight:68, value:45 }, { name:'banana', weight:27, value:60 }, { name:'apple', weight:39, value:40 }], 200)); // should return 510.
console.log(knapsack([{ name:'cheese', weight:23, value:30 }, { name:'beer', weight:52, value:10 }, { name:'suntan cream', weight:11, value:70 }, { name:'camera', weight:32, value:30 }, { name:'T-shirt', weight:24, value:15 }, { name:'trousers', weight:48, value:10 }, { name:'umbrella', weight:73, value:40 }], 100)); // should return 145.
console.log(knapsack([{ name:'cheese', weight:23, value:30 }, { name:'beer', weight:52, value:10 }, { name:'suntan cream', weight:11, value:70 }, { name:'camera', weight:32, value:30 }, { name:'T-shirt', weight:24, value:15 }, { name:'trousers', weight:48, value:10 }, { name:'umbrella', weight:73, value:40 }], 200)); // should return 185.
console.log(knapsack([{ name:'waterproof trousers', weight:42, value:70 }, { name:'waterproof overclothes', weight:43, value:75 }, { name:'note-case', weight:22, value:80 }, { name:'sunglasses', weight:7, value:20 }, { name:'towel', weight:18, value:12 }, { name:'socks', weight:4, value:50 }, { name:'book', weight:30, value:10 }], 100)); // should return 237.
console.log(knapsack([{ name:'waterproof trousers', weight:42, value:70 }, { name:'waterproof overclothes', weight:43, value:75 }, { name:'note-case', weight:22, value:80 }, { name:'sunglasses', weight:7, value:20 }, { name:'towel', weight:18, value:12 }, { name:'socks', weight:4, value:50 }, { name:'book', weight:30, value:10 }], 200)); // should return 317.'
*/