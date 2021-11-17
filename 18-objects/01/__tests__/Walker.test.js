import Walker from '../solution/js/Walker';

describe('Walker ', () => {
  test('constructor function should create a new Walker object', () => {
    const name = 'Jane Doe';
    const state = 'almost dead';

    const walker = new Walker(name, state);

    expect(walker.name).toBe(name);
    expect(walker.state).toBe(state);
  });

  test('constructor function with two parameters should create a new Walker object with default values: John Doe and dead', () => {
    const walker = new Walker();

    expect(walker.name).toBe('John Doe');
    expect(walker.state).toBe('dead');
  });

  test('have speak method', () => {
    expect(Walker.prototype.speak).toBeDefined();
  });

  test('have walk method', () => {
    expect(Walker.prototype.walk).toBeDefined();
  });

  test('have eat method', () => {
    expect(Walker.prototype.eat).toBeDefined();
  });

  test('walk should return a specific string', () => {
    const walker = new Walker();
    const speedInMph = 100;
    const expected = `${walker.name} the ${walker.state} walks with ${speedInMph} mph!`;

    const result = walker.walk(speedInMph);

    expect(result).toBe(expected);
  });

  test('walk should return a specific string, the default walking speed is 10', () => {
    const walker = new Walker();
    const expected = `${walker.name} the ${walker.state} walks with 10 mph!`;

    const result = walker.walk();

    expect(result).toBe(expected);
  });
  test('speak should return a specific string', () => {
    const walker = new Walker();
    const sound = 'harr harr';
    const expected = `${walker.name} the ${walker.state} says ${sound}!`;

    const result = walker.speak(sound);

    expect(result).toBe(expected);
  });

  test('speak should return a specific string, the default sound is grrrrrr', () => {
    const walker = new Walker();
    const expected = `${walker.name} the ${walker.state} says grrrrrr!`;

    const result = walker.speak();

    expect(result).toBe(expected);
  });

  test('eat should return a specific string', () => {
    const walker = new Walker();
    const foodName = 'vegetables';
    const expected = `${walker.name} the ${walker.state} eats ${foodName}!`;

    const result = walker.eat(foodName);

    expect(result).toBe(expected);
  });

  test('eat should return a specific string, the default foodName is meat', () => {
    const walker = new Walker();
    const expected = `${walker.name} the ${walker.state} eats meat!`;

    const result = walker.eat();

    expect(result).toBe(expected);
  });

  test('have firstName getter/setter', () => {
    const walker = new Walker();

    expect(walker).toHaveProperty('firstName');
  });

  test('have lastName getter/setter', () => {
    const walker = new Walker();

    expect(walker).toHaveProperty('lastName');
  });

  test('firstName should return John', () => {
    const walker = new Walker();

    expect(walker.firstName).toBe('John');
  });

  test('firstName should set the firstName to Jane', () => {
    const walker = new Walker();
    walker.firstName = 'Jane';

    expect(walker.name).toBe('Jane Doe');
  });

  test('lastName should return Doe', () => {
    const walker = new Walker();

    expect(walker.lastName).toBe('Doe');
  });

  test('lastName should set the lastName to Dodo', () => {
    const walker = new Walker();
    walker.lastName = 'Dodo';

    expect(walker.name).toBe('John Dodo');
  });
});
