function countCoins(cents) {
    if (isNaN(cents)) throw Error('cents should be a number');
    if (cents <= 0) return 0;
    const coins = [25, 10, 5, 1];
    return _countCoins(cents,0);

    // number of ways to change 'cents' cents in coins minor or equal coins[j]
    function _countCoins(cents,j) {
        if (j === 3 || cents <= 0) return 1;
        let n = 0;
        for (let i = 0; i <= Math.floor(cents/coins[j]); i++)
            n += _countCoins(cents - i*coins[j], j+1);
        return n;
    }
}


