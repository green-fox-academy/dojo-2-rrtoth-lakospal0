'use strict';

let test = require('tape');

const anagram = (a, b) => {
    let second = b.split('').sort().join('');
    second.replace(" ", "");
    let first = a.split('').sort().join('');
    first.replace(" ", "");

    console.log(first);
    console.log(second);

    if (JSON.stringify(first) == JSON.stringify(second)) {
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

//test #2
let c = "qwerty"
let d = "ytr e wq"

test("anagram", t => {
    let actual = anagram(c, d);
    let expected = true;

    t.equal(actual, expected)
    t.end()
})