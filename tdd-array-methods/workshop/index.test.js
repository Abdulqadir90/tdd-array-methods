// testing map()

test("map() should return an array with the same number of elements", () => {
  const result = map([1], () => { });
  equal(result.length, 1);
});

test("map() should transform each element of the array using the fn argument", () => {
  const result = map([1], (x) => x + 1);
  equal(result[0], 2);
});

test("map() should transform each element of the array using the fn argument, passing in each element and its index", () => {
  const result = map([1, 2, 3], (x, index) => x + index);
  equal(result[1], 3);
});

test("map() should transform each element of the array using the fn argument, passing in each element, its index and the array", () => {
  const result = map([1, 2, 3], (x, index, array) => x + index + (index ? array[index - 1] : 0));
  equal(result[2], 7);
});

// testing filter()

test("filter() should return an array with the same number of elements", () => {
  const result = filter([1], () => true);
  equal(result.length, 1);
});

test("filter() should return an array with one element", () => {
  const result = filter([1, 2, 3], (x) => x > 2);
  equal(result.length, 1);
});

test("filter() should return an array with two elements", () => {
  const result = filter([1, 2, 3], (x, index) => x + index > 2);
  equal(result.length, 2);
});

test("filter() should return an array with two elements", () => {
  const result = filter([1, 2, 3, 4, 5], (x, index, array) =>
    x * index - (index ? array[index - 1] : 0) > 8);
  equal(result.length, 2);
});

// testing every()

test("every() should return true", () => {
  const result = every([1], () => true);
  equal(result, true);
});

test("every() should return false", () => {
  const result = every([1, 2, 3], (x) => x > 2);
  equal(result, false);
});

test("every() should return false", () => {
  const result = every([1, 2, 3], (x, index) => x + index > 2);
  equal(result, false);
});

test("every() should return true", () => {
  const result = every([1, 2, 3, 4, 5], (x, index, array) =>
    x * index - (index ? array[index - 1] : 0) < 20);
  equal(result, true);
});

// testing some()

test("some() should return false", () => {
  const result = some([1], () => false);
  equal(result, false);
});

test("some() should return true", () => {
  const result = some([1, 2, 3], (x) => x > 2);
  equal(result, true);
});