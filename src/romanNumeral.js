function toRoman(number) {
    if (number <= 3) {
        return 'I'.repeat(number);
    }

    if (number === 4) {
        return 'IV';
    }

    if (number === 5) {
        return 'V';
    }

    if (number > 5 && number < 9 ) {
        return 'V' + 'I'.repeat(number - 5);
    }

    if (number === 9) {
        return 'IX';
    }

    if (number === 10) {
        return 'X';
    }

    if (number > 10 && number < 20) {
        return 'X' + toRoman(number - 10);
    }
}

module.exports = {
    toRoman
};
