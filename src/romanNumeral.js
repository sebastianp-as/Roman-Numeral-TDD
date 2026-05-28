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
}

module.exports = {
    toRoman
};
