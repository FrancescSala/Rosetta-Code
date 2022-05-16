function formatText(input, justification) {
    let numColumns = 0;
    for (let line of input) {
        let l = line.split('$');
        if (l.length > numColumns)  numColumns = l.length;
    }

    let columnWidth = new Array(numColumns).fill(0);
    for (let i =0; i<input.length; i++) {
        let l = input[i].split('$');
        for (let j =0; j<l.length;j++)
            if (l[j].length > columnWidth[j])  columnWidth[j] = l[j].length;
    }

    console.log(columnWidth);
    for (let i =0; i<input.length; i++) {
        let l = input[i].split('$');
        let output = "";
        for (let j =0; j<l.length;j++)
            switch (justification.toLowerCase()) {
                case 'left':
                    output += l[j].padEnd(columnWidth[j]+1, ' ');
                    break;
                case 'right':
                    output += l[j].padStart(columnWidth[j]+1, ' ');
                    break;
                case 'center':
                    let lft = Math.round((columnWidth[j]-l[j].length)/2);
                    let rgh = columnWidth[j]-l[j].length - lft;
                    output += ''.padEnd(lft, ' ');
                    output += l[j];
                    output += ''.padEnd(rgh,' ');
                    break;
                default:
                    console.log('en default');
                    output += l[j] + ' ';
            }
        console.log(output);
    }
    
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

formatText(testText,'left');
formatText(testText,'right');
formatText(testText,'center');

