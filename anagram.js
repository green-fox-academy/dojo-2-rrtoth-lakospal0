'use strict';

let test = require('tape');

const anagram = (a, b) => {
    let first = a.split('').sort().join('');
    let second = b.split('').sort().join('');
    if (first == second) {
        return true;
    } else {
        return false;
    }
}


//test #1

let a = "qwerty"
let b = "ytrewq"

test("anagram", t => {
    let actual = anagram(a, b);
    let expected = true;

    t.equal(actual, expected)
    t.end()
})

//test2
let a = "qwerty"
let b = "ytrewq"

test("anagram", t => {
    let actual = anagram(a, b);
    let expected = true;

    t.equal(actual, expected)
    t.end()
})