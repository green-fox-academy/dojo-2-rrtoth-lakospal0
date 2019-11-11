'use strict';

let test = require('tape');

const anagram = (a, b) => {
    let first = a.split('');
    let asd = first.sort();
    let second = b.split('');
    let das = second.sort();
    if (asd == das) {
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