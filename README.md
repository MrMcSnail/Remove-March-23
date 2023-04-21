# Remove-March-23

## _.remove(array, [predicate=_.identity])

Removes all elements from array that predicate returns truthy for and returns an array of the removed elements. The predicate is invoked with three arguments: (`value, index, array`).

### Arguments

array (Array): The array to modify.
[predicate=_.identity] (Function): The function invoked per iteration.

### Returns

(Array): Returns the new array of removed elements.

### Example

```js
var array = [1, 2, 3, 4];
var evens = _.remove(array, function(n) {
  return n % 2 == 0;
});

console.log(array);
// => [1, 3]

console.log(evens);
// => [2, 4]
```
