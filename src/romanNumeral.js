const romanSymbols = [
    { value: 1000, symbol: 'M' },
    { value: 900, symbol: 'CM' },
    { value: 500, symbol: 'D' },
    { value: 400, symbol: 'CD' },
    { value: 100, symbol: 'C' },
    { value: 90, symbol: 'XC' },
    { value: 50, symbol: 'L' },
    { value: 40, symbol: 'XL' },
    { value: 10, symbol: 'X' },
    { value: 9, symbol: 'IX' },
    { value: 5, symbol: 'V' },
    { value: 4, symbol: 'IV' },
    { value: 1, symbol: 'I' },
];

function validateNumber(number) {
    if (!Number.isInteger(number)) {
        throw new Error('Number must be an integer');
    }

    if (number <= 0) {
        throw new Error('Number must be greater than 0');
    }

    if (number > 3999) {
        throw new Error('Number must be less than 4000');
    }
}

function toRoman(number) {
    validateNumber(number);

    let result = '';

    for (const { value, symbol } of romanSymbols) {
        while (number >= value) {
            result += symbol;
            number -= value;
        }
    }

    return result;
}

function fromRoman() {
    return 1;
}

module.exports = {
    toRoman,
    fromRoman
};
