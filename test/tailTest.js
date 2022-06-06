const assertEqual = require('../assertEqual');
const tail = require('../tail');

// Test code for tail.js
assertEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']).length, 2);
assertEqual(tail([1, 2, 3, 4, 5, 6, 7]).length, 6);