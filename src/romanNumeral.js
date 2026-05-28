const romanSymbols = [
    { value: 50, symbol: 'L' },
    { value: 40, symbol: 'XL' },
    { value: 10, symbol: 'X' },
    { value: 9, symbol: 'IX' },
    { value: 5, symbol: 'V' },
    { value: 4, symbol: 'IV' },
    { value: 1, symbol: 'I' },
];

function toRoman(number) {
    let result = '';

    for (const { value, symbol } of romanSymbols) {
        while (number >= value) {
            result += symbol;
            number -= value;
        }
    }

    return result;
}

module.exports = {
    toRoman
};
