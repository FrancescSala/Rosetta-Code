function babbage(babbageNum, endDigits) {
    if (!Number.isInteger(babbageNum) || babbageNum < 0) throw Error('babbageNum should be a positive integer');
    if (!Number.isInteger(endDigits) || endDigits < 0) throw Error('endDigits should be a positive integer');
    let p = 10;
    while (endDigits >= p) p = 10 * p;
    console.log(p);

    let result;
    for (let i = 0; i <=babbageNum;i++) {
        if ((i*i) % p === endDigits) {
            result = i;
            break;
        }
    }
    return result;
  }

  console.log(babbage(99736,269696));