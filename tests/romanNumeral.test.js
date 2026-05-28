const { toRoman } = require('../src/romanNumeral');

describe('Roman Numeral Converter', () => {
    test('converts 1 to I', () => {
        expect(toRoman(1)).toBe('I');
    });

    test('converts 2 to II', () => {
        expect(toRoman(2)).toBe('II');
    });

    test('converts 4 to IV', () => {
        expect(toRoman(4)).toBe('IV');
    });

    test('converts 5 to V', () => {
        expect(toRoman(5)).toBe('V');
    });
});

