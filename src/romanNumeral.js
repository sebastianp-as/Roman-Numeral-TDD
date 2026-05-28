const romanNumbers = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
};

function toRoman(number) {
    return romanNumbers[number];
}

module.exports = {
    toRoman
};
