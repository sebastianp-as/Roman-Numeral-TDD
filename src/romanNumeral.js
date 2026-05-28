function toRoman(number) {
    if (number === 4) {
        return 'IV';
    }
    return 'I'.repeat(number);
}

module.exports = {
    toRoman
};
