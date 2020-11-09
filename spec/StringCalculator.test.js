import StringCalculator from "../src/StringCalculator";

describe('#StringCalculator', () => {
  let calc = new StringCalculator
  test('returns 0 if given an empty string ', () => {
    expect(calc.calculate('')).toStrictEqual(['', 0])
  })

  test('returns 1 if given 1 in string', () => {
    expect(calc.calculate('1')).toStrictEqual(['1', 1])
  })

  test('returns 1.5 if given 1.5 in string', () => {
    expect(calc.calculate('1.5')).toStrictEqual(['1.5', 1.5])
  })
});
