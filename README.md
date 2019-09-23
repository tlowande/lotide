# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @tlowande/lotide`

**Require it:**

`const _ = require('@tlowande/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `eqArrays`: compares if 2 given arrays are equal and returns true or false
* `head`: returns the first item of an array
* `tail`: returns all items of an array without the first element
* `middle`: returns the middle element of an array if length is odd, returns both mid elements if array length is even
* `assertArraysEqual`: assertion to compare 2 arrays
* `assertEqual`:  asserts if two primitive values are equal