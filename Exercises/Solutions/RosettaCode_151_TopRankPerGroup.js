function topRankPerGroup(n, data, groupName, rankName) {
    if (isNaN(n) || !Number.isInteger(n)) throw Error('n should be an integer number');
    if (!Array.isArray(data) || data.some(elem => typeof elem !== 'object')) throw Error('data should be an array of objects');
    if (typeof groupName !== 'string') throw Error('groupName should be a string');
    if (typeof rankName !== 'string') throw Error('rankName should be a string');
    
    if (data.some(elem => !elem.hasOwnProperty(groupName) || elem[groupName] === undefined)) throw Error('objects in data should have attribute groupName defined') 
    if (data.some(elem => !elem.hasOwnProperty(rankName) || elem[rankName] === undefined)) throw Error('objects in data should have attribute rankName defined') 

    if (n < 0) return undefined; // or simply, return;
    let copy = Array.from(data).sort((a,b) => {   // sort a copy of the data: first by groupName and then by rankName
        if (a[groupName] < b[groupName]) return -1;
        if (a[groupName] > b[groupName]) return 1;
        if (a[groupName] === b[groupName]) return b[rankName] - a[rankName]; // on the same group, sort by rank, descending
    });
    console.log(copy);
    // now let's visit copy taking the first n items of each group
    let result=[];
    let group;
    let counter;
    for (let i = 0; i < copy.length; i++) {
        if (i === 0 || copy[i][groupName] !== copy[i-1][groupName]) {
            if (i !== 0) result.push(group);
            counter = 0;
            group = [];
        }
        if (counter < n) {
            group.push(copy[i]);
            counter++;
        }
        if (i === copy.length-1) result.push(group);
    }
    return result;
  }


  /*
  const testData1 = [
    { name: 'Tyler Bennett', id: 'E10297', salary: 32000, dept: 'D101' },
    { name: 'John Rappl', id: 'E21437', salary: 47000, dept: 'D050' },
    { name: 'George Woltman', id: 'E00127', salary: 53500, dept: 'D101' },
    { name: 'Adam Smith', id: 'E63535', salary: 18000, dept: 'D202' },
    { name: 'Claire Buckman', id: 'E39876', salary: 27800, dept: 'D202' },
    { name: 'David McClellan', id: 'E04242', salary: 41500, dept: 'D101' },
    { name: 'Rich Holcomb', id: 'E01234', salary: 49500, dept: 'D202' },
    { name: 'Nathan Adams', id: 'E41298', salary: 21900, dept: 'D050' },
    { name: 'Richard Potter', id: 'E43128', salary: 15900, dept: 'D101' },
    { name: 'David Motsinger', id: 'E27002', salary: 19250, dept: 'D202' },
    { name: 'Tim Sampair', id: 'E03033', salary: 27000, dept: 'D101' },
    { name: 'Kim Arlich', id: 'E10001', salary: 57000, dept: 'D190' },
    { name: 'Timothy Grove', id: 'E16398', salary: 29900, dept: 'D190' }
  ];

  console.log(topRankPerGroup(0, testData1, 'dept', 'salary')); // the first result in the first group should be { name: 'John Rappl', id: 'E21437', salary: 47000, dept: 'D050'}.
  */

  