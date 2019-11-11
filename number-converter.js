'use strict';

let test = require('tape');



//test #1

let amountInNumbers = 581;

test('test #1', t => {
    let actual = numberConverter(amountInNumbers);
    let expected = 'five hundred and eighty one dollars';

    t.equal(actual, expected);
    t.end();
})

//test #2

let amountInNumbers2 = "$581";

test('test #2', t => {
    let actual = numberConverter(amountInNumbers2);
    let expected = 'five hundred and eighty one dollars';

    t.equal(actual, expected);
    t.end();
})