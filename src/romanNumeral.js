const romaSymbols = [
    { value: 10, symbol: 'X' },
    { value: 9, symbol: 'IX' },
    { value: 5, symbol: 'V' },
    { value: 4, symbol: 'IV' },
    { value: 1, symbol: 'I' },
];

function toRoman(number) {
    let result = '';

    for (const { value, symbol } of romaSymbols) {
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
