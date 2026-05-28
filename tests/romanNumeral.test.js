const { toRoman } = require('../src/romanNumeral');

describe('Roman Numeral Converter', () => {
    test('converts 1 to I', () => {
        expect(toRoman(1)).toBe('I');
    });
});

