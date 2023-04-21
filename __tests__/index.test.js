const { remove } = require('../index');

describe('first', () => {
  test('should work as the example', () => {
    var array = [1, 2, 3, 4];
    var evens = remove(array, function (n) {
      return n % 2 == 0;
    });
    expect(array).toEqual([1, 3]);
    expect(evens).toEqual([2, 4]);
  });

  test('should remove all values other than numbers', () => {
    var array = [1, null, 3, '4'];
    var notNumbers = remove(array, function (n) {
      return typeof n !== 'number';
    });
    console.log('array: ', array);
    console.log('notNumbers: ', notNumbers);
    expect(array).toEqual([1, 3]);
    expect(notNumbers).toEqual([null, '4']);
  });

  test('should ', () => {
    var array = [
      { species: 'monkey', name: 'Bobo' },
      { species: 'dog', name: 'Fodo' },
      { species: 'parrot', name: 'Koko' },
      { species: 'cat', name: 'Momo' },
      { species: 'monkey', name: 'Dodo' }
    ];
    var monkeys = remove(array, function (animal) {
      return animal.species === 'monkey';
    });
    console.log('array: ', array);
    console.log('monkeys: ', monkeys);

    expect(array).toEqual([
      { species: 'dog', name: 'Fodo' },
      { species: 'parrot', name: 'Koko' },
      { species: 'cat', name: 'Momo' }
    ]);
    expect(monkeys).toEqual([
      { species: 'monkey', name: 'Bobo' },
      { species: 'monkey', name: 'Dodo' }
    ]);
  });
});
