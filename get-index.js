'use strict';

let test = require('tape');

const getIndex = (list, value) => {
    if (!Number.isInteger(value)) {
        return "error";
    } else {
        return list.indexOf(value);
    }
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
    let actual = getIndex(listToTest, valueToTest3);
    let expected = "error";

    t.equal(actual, expected);
    t.end();
})

//test #4

let listToTest2 = [1, 1, 2, 3, 4, 5, 5]
let valueToTest4 = 5;

test('test #2', t => {
    let actual = getIndex(listToTest2, valueToTest4);
    let expected = [5, 6];

    t.equal(actual, expected);
    t.end();
})