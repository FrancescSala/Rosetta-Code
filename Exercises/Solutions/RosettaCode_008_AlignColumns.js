function formatText(input, justification) {
    if (!Array.isArray(input) || input.some(elem => elem.constructor !== String))
        throw Error('input should be an array of strings');

    let numColumns = 0;
    for (let line of input) {
        let l = line.split('$');
        if (l.length > numColumns)  numColumns = l.length;
    }

    let columnWidth = new Array(numColumns).fill(0);
    for (let line of input) {
        let words = line.split('$');
        for (let j =0; j<words.length;j++)
            if (words[j].length > columnWidth[j])  columnWidth[j] = words[j].length;
    }

    let output = "";
    for (let line of input) {
        let words = line.split('$');
        for (let j = 0; j < words.length; j++)
            switch (justification.toLowerCase()) {
                case 'left':
                    output += words[j].padEnd(columnWidth[j]+1, ' ');
                    break;
                case 'right':
                    output += words[j].padStart(columnWidth[j]+1, ' ');
                    break;
                case 'center':
                    let lft = Math.round((columnWidth[j]-words[j].length)/2)+1;
                    let rgh = columnWidth[j]-words[j].length - lft+1;
                    output += ''.padEnd(lft, ' ');
                    output += words[j];
                    output += ''.padEnd(rgh,' ');
                    break;
                default:
                    console.log('en default');
                    output += words[j] + ' ';
            }
        output+='\n';
    }
    return output;
}

const testText = [
  'Given$a$text$file$of$many$lines',
  'where$fields$within$a$line$',
  'are$delineated$by$a$single$"dollar"$character',
  'write$a$program',
  'that$aligns$each$column$of$fields$',
  'by$ensuring$that$words$in$each$',
  'column$are$separated$by$at$least$one$space.',
  'Further,$allow$for$each$word$in$a$column$to$be$either$left$',
  'justified,$right$justified',
  'or$center$justified$within$its$column.'
];

//console.log(formatText(testText,'left'));
//console.log(formatText(testText,'right'));
console.log(formatText(testText,'center'));

