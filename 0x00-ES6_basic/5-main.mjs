import concatArrays from './5-spread-operator.mjs';

console.log(concatArrays(['a', 'b'], ['c', 'd'], 'Hello'));

bob@dylan:~$
bob@dylan:~$ npm run dev 5-main.mjs
[
  'a', 'b', 'c',
  'd', 'H', 'e',
  'l', 'l', 'o'
]
