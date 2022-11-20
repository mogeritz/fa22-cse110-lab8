// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('Test my phone number', () => {
    expect(functions.isPhoneNumber("(760)655-8419")).toBe(true);
  });

test('Test another phone number', () => {
    expect(functions.isPhoneNumber("+(420)123-6969")).toBe(true);
});

test('Test german phone number', () => {
    expect(functions.isPhoneNumber("+4917639244647")).toBe(false);
});

test('Test american phone number in wrong format', () => {
    expect(functions.isPhoneNumber("+17606559419")).toBe(false);
});

test('project mail', () => {
    expect(functions.isEmail("ursula4triton@gmail.com")).toBe(true);
});

test('my mail', () => {
    expect(functions.isEmail("moritzswagner@gmail.com")).toBe(true);
});

test('fake TLD mail', () => {
    expect(functions.isEmail("ursula4triton@gmail.yeet")).toBe(false);
});

test('no domain mail', () => {
    expect(functions.isEmail("ursula4triton@yeet")).toBe(false);
});

test('random strong password 1', () => {
    expect(functions.isStrongPassword("iodAWGbj2Ikk")).toBe(true);
});

test('random strong password 2', () => {
    expect(functions.isStrongPassword("opjAHPodw2")).toBe(true);
});

test('weak password 1', () => {
    expect(functions.isStrongPassword("12345678")).toBe(false);
});

test('weak password 2', () => {
    expect(functions.isStrongPassword("1password")).toBe(false);
});

test('9/11 date', () => {
    expect(functions.isDate("9/11/2002")).toBe(true);
});

test('birthday date', () => {
    expect(functions.isDate("1/18/2002")).toBe(true);
});

test('incorrect birthday date', () => {
    expect(functions.isDate("181/1/2002")).toBe(false);
});

test('missing year date', () => {
    expect(functions.isDate("18/1")).toBe(false);
});

test('nice pink color', () => {
    expect(functions.isHexColor("#ff3399")).toBe(true);
});

test('black color', () => {
    expect(functions.isHexColor("#000000")).toBe(true);
});

test('missing digit color', () => {
    expect(functions.isHexColor("#00000")).toBe(false);
});

test('wrong letter color', () => {
    expect(functions.isHexColor("#0g000")).toBe(false);
});