import omit from '.';

interface Person {
  name: string;
  age: number;
  email: string;
}

describe('omit function', () => {
  const person: Person = {
    name: 'John Doe',
    age: 30,
    email: 'john@example.com',
  };

  it('should omit a single property', () => {
    const omittedPerson = omit(person, ['email']);
    expect(omittedPerson).toEqual({ name: 'John Doe', age: 30 });
  });

  it('should omit multiple properties', () => {
    const omittedPerson = omit(person, ['age', 'email']);
    expect(omittedPerson).toEqual({ name: 'John Doe' });
  });

  it('should return a new object without modifying the original object', () => {
    const omittedPerson = omit(person, ['email']);
    expect(omittedPerson).toEqual({ name: 'John Doe', age: 30 });
    expect(person).toEqual({
      name: 'John Doe',
      age: 30,
      email: 'john@example.com',
    });
  });
});
