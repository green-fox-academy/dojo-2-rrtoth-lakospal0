'use strict';

let test = require('tape');

const getIndex = (list, value) => {
    return list.indexOf(value)
}

//test #1

let listToTest = [1, 2, 3, 4, 5];
let valueToTest = 2;

test('test #1', t => {
    let actual = getIndex(listToTest, valueToTest);
    let expected = 1;

    t.equal(actual, expected);
    t.end();
})

//test #2

let valueToTest2 = 8;

test('test #2', t => {
    let actual = getIndex(listToTest, valueToTest2);
    let expected = -1;

    t.equal(actual, expected);
    t.end();
})

//test #3

let valueToTest3 = "a";

test('test #2', t => {
    let actual = getIndex(listToTest, valueToTest2);
    let expected = "error";

    t.equal(actual, expected);
    t.end();
})