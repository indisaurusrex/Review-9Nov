import StringCalculator from "../src/StringCalculator";

describe('#StringCalculator', () => {
  test('returns 0 if given an empty string ', () => {
    let calc = new StringCalculator
    expect(calc.calculate('')).toStrictEqual(['', 0])
  })

  test('returns 1 if given 1 in string', () => {
    let calc = new StringCalculator
    expect(calc.calculate('1')).toStrictEqual(['1', 1])
  })
});
