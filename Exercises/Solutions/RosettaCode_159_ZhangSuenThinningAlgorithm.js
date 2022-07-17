function thinImage(image) {
    const black = '#';
    const white = ' ';

    function _calculateAB(img,i,j) {
        const inci = [-1, -1, 0, 1, 1,  1,  0, -1, -1];
        const incj = [0,  1,  1, 1, 0, -1, -1, -1,  0];
        let A = 0;
        let B = 0;
        for (let k = 0; k <= 7; k++) {
            if (img[i+inci[k]][j+incj[k]] === black) B++;
            if (img[i+inci[k]][j+incj[k]] === black && img[i+inci[k+1]][j+incj[k+1]] === white) A++;
        }
        return [A,B];
    }

    function _p2p4p6(img,i,j) {
        return (img[i-1][j] === white || img[i][j+1] === white || img[i+1][j] === white);
    }

    function _p4p6p8(img,i,j) {
        return (img[i][j+1] === white || img[i+1][j] === white || img[i][j-1] === white);
    }

    function _updateImage(thinned,annotations) {
        for (let i=0; i < annotations.length; i++) {
            annotations[i].forEach((elem,index) => { 
                if (elem) {
                    thinned[i] = thinned[i].slice(0,index) + white + thinned[i].slice(index+1);
                    annotations[i][index] = false;
                }
            });
        }
    }

    // validation of arguments
    if (!Array.isArray(image) || image.some(elem => typeof(elem)!=='string')) throw Error('image should be an array of strings');
    if (image.length === 0) throw Error('image should contain at least one element'); 
                // in fact at least should be three elements (image rows) if intend to find pixels with eight neighbours
    let k = image[0].length;
    if (image.some(elem => elem.length !== k)) throw Error('all elements in image should be the same length');
    if (image.some(elem => { // elem is a string
        let strange = false;
        let i = 0;
        while (i<elem.length && !strange){ 
            strange = elem[i] !== black && elem[i] !== white;
            i++;
        }
        return strange;
    })) throw Error(`image should only contain black and white characters: '${black}' '${white}'`);

    // application of the algorithm
    let finished = false;
    let thinned = JSON.parse(JSON.stringify(image));  // copy of the original image
    let annotations = Array.from(thinned.length);
    for (let i = 0; i < thinned.length; i++)
        annotations[i] = Array(thinned[0].length).fill(false);

    while (!finished) {
        finished = true;
        for (let step = 1; step <=2; step++) { 
            for (let i = 1 ; i < thinned.length -1 ; i++)
                for (let j = 1; j < thinned[0].length; j++) {
                    if (thinned[i][j] === black) {
                        let [A,B] =_calculateAB(thinned,i,j);
                        if (A === 1 && B >= 2 && B <= 6 && _p2p4p6(thinned,i,j) && _p4p6p8(thinned,i,j)) {
                            finished = false;
                            annotations[i][j] = true;
                        }
                    }
                }
            if (!finished) _updateImage(thinned,annotations);
        }
    }
    return thinned;
}


/*
const testImage1 = [
    '                               ',
    '#########       ########       ',
    '###   ####     ####  ####      ',
    '###    ###     ###    ###      ',
    '###   ####     ###             ',
    '#########      ###             ',
    '### ####       ###    ###      ',
    '###  ####  ### ####  #### ###  ',
    '###   #### ###  ########  ###  ',
    '                               '
];

const expectedResult = [ '                               ',
'########         ######        ',
'#      #        ##             ',
'#       #       #              ',
'#      #        #              ',
'###### #        #              ',
'#     ##        #              ',
'#      #    #   ##    ##   #   ',
'#       #         ####         ',
'                               ' ];

const myResult = thinImage(testImage1);

console.log(expectedResult);
console.log(myResult);

for (let i=0; i < myResult.length; i++)
    for (let j=0; j < myResult[0].length; j++)
        if (myResult[i][j] !== expectedResult[i][j]) {
            console.log(`i ${i} j ${j} expected ${expectedResult[i][j]} got ${myResult[i][j]}`);
        }
*/