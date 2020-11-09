import MyClass from "../src/MyClass";

describe('#MyClass', () => {
  test('It has a name', () => {
    let myClass = new MyClass("India")
    expect(myClass.name).toBe("India")
  })  
});

describe('#MyClass', () => {
  test('should introduce itself', () => {
    let myClass = new MyClass("India")
    expect(myClass.introduce()).toBe("Hi, I'm India!")
  })

  test('should introduce with the right name', () => {
    let newClass = new MyClass("Yvonne")
    expect(newClass.introduce()).toBe("Hi, I'm Yvonne!")
  })
  
});


