function toRoman(number) {
    if (number === 4) {
        return 'IV';
    }
    if (number === 5) {
        return 'V';
    }
    
    return 'I'.repeat(number);
}

module.exports = {
    toRoman
};
