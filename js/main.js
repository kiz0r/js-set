// Створіть колекцію Set із початковими значеннями 1, 2, 3.
// За допомогою методу has перевірте наявність елемента зі значенням 3, а потім елемента зі значенням 4.
// Додати ще кілька елементів.
// За допомогою циклу for-of переберіть колекцію та виведіть у консоль.
// Знайдіть суму цих значень.
// Видаліть елемент 2.
// Очистіть усю колекцію.

const mySet = new Set();

mySet.add(1).add(2).add(3);

console.log(mySet);

console.log(mySet.has(3)); // true
console.log(mySet.has(4)); // false

mySet.add(14).add(9).add(10).add(0);

let sumOfSetElements = 0;

console.group('Entries of mySet : ');
for (let item of mySet) {
  console.log(`item = ` + item);
  sumOfSetElements += item;
}
console.groupEnd();

console.log('sum of elements of mySet = ' + sumOfSetElements);

console.dir(mySet); // => 1 2 3 14 9 10 0

mySet.delete(2);

console.group('mySet without 2');
console.dir(mySet);
console.groupEnd();

mySet.clear();

console.group('Empty collection');
console.dir(mySet);
console.groupEnd();

// З масиву [1,6,9,4,9,1,5,6] отримати масив унікальних значень.
// З масивів [1,6,9,4,9,1,5,6] та [5, 10, 11] отримати один масив унікальних значень.

const arr1 = [1, 6, 9, 4, 9, 1, 5, 6];
const arr2 = [5, 10, 11];

const uniqArr1 = [...new Set(arr1)];
console.log('uniqArr1 => ', uniqArr1);

const uniqArr2 = [...new Set([...arr1, ...arr2])];
console.log('uniqArr2 => ', uniqArr2);

//  З масиву
// const messages = [
//   { id: 1, name: 'Ivo', message: 'hello', date: new Date() },
//   { id: 2, name: 'Ivo', message: 'how are you', date: new Date() },
//   { id: 3, name: 'Wally', message: 'hi)', date: new Date() },
//   { id: 4, name: 'Wally', message: 'fine)', date: new Date() },
// ];

// створити
// 1) масив імен користувачів
// 2) мапу вигляду
// Map (2) {
//   Ivo => [{message, date}, {message, date}],

//   Wally => [{message, date}, {message, date}]
// }

const messages = [
  { id: 1, name: 'Ivo', message: 'hello', date: new Date() },
  { id: 2, name: 'Ivo', message: 'how are you', date: new Date() },
  { id: 3, name: 'Wally', message: 'hi)', date: new Date() },
  { id: 4, name: 'Wally', message: 'fine)', date: new Date() },
];

const userMessages = new Map();

messages.forEach(({ name, message, date }) => {
  const key = { message, date };
  if (!userMessages.has(name)) {
    userMessages.set(name, []);
  }

  userMessages.get(name).push(key);
});

console.log(userMessages);
