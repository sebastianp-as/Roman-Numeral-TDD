const { toRoman, fromRoman } = require('../src/romanNumeral');

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

    test('converts 6 to VI', () => {
        expect(toRoman(6)).toBe('VI');
    });

    test('converts 7 to VII', () => {
        expect(toRoman(7)).toBe('VII');
    });

    test('converts 8 to VIII', () => {
        expect(toRoman(8)).toBe('VIII');
    });

    test('converts 9 to IX', () => {
        expect(toRoman(9)).toBe('IX');
    });

    test('converts 10 to X', () => {
        expect(toRoman(10)).toBe('X');
    });

    test('converts 14 to XIV', () => {
        expect(toRoman(14)).toBe('XIV');
    });

    test('converts 15 to XV', () => {
        expect(toRoman(15)).toBe('XV');
    });

    test('converts 19 to XIX', () => {
        expect(toRoman(19)).toBe('XIX');
    });

    test('converts 20 to XX', () => {
        expect(toRoman(20)).toBe('XX');
    });

    test('converts 40 to XL', () => {
        expect(toRoman(40)).toBe('XL');
    });

    test('converts 44 to XLIV', () => {
        expect(toRoman(44)).toBe('XLIV');
    });

    test('converts 50 to L', () => {
        expect(toRoman(50)).toBe('L');
    });

    test('converts 90 to XC', () => {
        expect(toRoman(90)).toBe('XC');
    });

    test('converts 100 to C', () => {
        expect(toRoman(100)).toBe('C');
    });

    test('converts 400 to CD', () => {
        expect(toRoman(400)).toBe('CD');
    });

    test('converts 500 to D', () => {
        expect(toRoman(500)).toBe('D');
    });

    test('converts 900 to CM', () => {
        expect(toRoman(900)).toBe('CM');
    });

    test('converts 1000 to M', () => {
        expect(toRoman(1000)).toBe('M');
    });

    test('throws error for 0', () => {
        expect(() => toRoman(0)).toThrow();
    });

    test('throws error for negative numbers', () => {
        expect(() => toRoman(-1)).toThrow();
    });

    test('throws error for numbers greater than 3999', () => {
        expect(() => toRoman(4000)).toThrow();
    });

    test('throws error for decimal numbers', () => {
        expect(() => toRoman(1.5)).toThrow();
    });

    test('converts 944 to CMXLIV', () => {
        expect(toRoman(944)).toBe('CMXLIV');
    });

    test('converts 1994 to MCMXCIV', () => {
        expect(toRoman(1994)).toBe('MCMXCIV');
    });

    test('converts 3999 to MMMCMXCIX', () => {
        expect(toRoman(3999)).toBe('MMMCMXCIX');
    });

    test('converts I to 1', () => {
        expect(fromRoman('I')).toBe(1);
    });

    test('converts II to 2', () => {
        expect(fromRoman('II')).toBe(2);
    });

    test('converts III to 3', () => {
        expect(fromRoman('III')).toBe(3);
    });

    test('converts IV to 4', () => {
        expect(fromRoman('IV')).toBe(4);
    });

    test('converts V to 5', () => {
        expect(fromRoman('V')).toBe(5);
    });

    test('converts VI to 6', () => {
        expect(fromRoman('VI')).toBe(6);
    });

    test('converts VII to 7', () => {
        expect(fromRoman('VII')).toBe(7);
    });

    test('converts VIII to 8', () => {
        expect(fromRoman('VIII')).toBe(8);
    });

    test('converts IX to 9', () => {
        expect(fromRoman('IX')).toBe(9);
    });

    test('converts X to 10', () => {
        expect(fromRoman('X')).toBe(10);
    });

    test('converts XIV to 14', () => {
        expect(fromRoman('XIV')).toBe(14);
    });

    test('converts XLIV to 44', () => {
        expect(fromRoman('XLIV')).toBe(44);
    });

    test('converts XC to 90', () => {
        expect(fromRoman('XC')).toBe(90);
    });

    test('converts CD to 400', () => {
        expect(fromRoman('CD')).toBe(400);
    });

    test('converts CM to 900', () => {
        expect(fromRoman('CM')).toBe(900);
    });

    test('converts M to 1000', () => {
        expect(fromRoman('M')).toBe(1000);
    });
});

