export function countDecimals(value) {
    const numStr = String(value);
    if (numStr.includes('.')) {
        return numStr.split('.')[1].length;
    };
    return 0;
}

export function convertIntoGwei(value) {
    console.log('val', value)
    const decimalsCount = countDecimals({ value: value })
    const decimalsToAdd = 18 - decimalsCount;
    let numberWithoutDot = String(Math.floor(value));
    if (String(value).includes('.')) {
        numberWithoutDot = numberWithoutDot.concat(value.split('.')[1]);
    }

    for (var i = 0; i < decimalsToAdd; i++) {
        numberWithoutDot = numberWithoutDot.concat('0');
    }

    return numberWithoutDot;
}