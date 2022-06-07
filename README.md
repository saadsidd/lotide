# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @saadsidd/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(actual, expected)`: log pass/fail to console whether two arrays are equal
* `assertEqual(actual, expected)`: log pass/fail to console whether two primitives are equal
* `assertObjectsEqual(actual, expected)`: log pass/fail whether two objects (primitives & arrays only) are equal
* `countLetters(string)`: return object with count of all letters in string
* `countOnly(allItems, itemsToCount)`: return count of matching strings from array of strings
* `eqArrays(array1, array2)`: return true/false whether two arrays are equal
* `eqObjects(object1, object2)`: return true/false whether two objects (primitives & arrays only) are equal
* `findKey(object, callback)`: return key from object that matches callback condition
* `findKeyByValue(object, value)`: return key of object by given value
* `flatten(array)`: return new 1D array from nested 2D arrays
* `head(array)`: return first element of array
* `letterPositions(string)`: return object with positions for all characters in string
* `map(array, callback)`: return new array after callback function called on all elements of given array
* `middle(array)`: return middle element of array (or 2 elements if array length is even)
* `tail(array)`: return array from 2nd element onward
* `takeUntil(array, callback)`: return new array from given array start until callback returns true
* `without(array, itemsToRemove)`: return new array with items from given array that are not also in itemsToRemove