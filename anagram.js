'use strict';

import * as test from 'tape';

const anagram = () => {

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