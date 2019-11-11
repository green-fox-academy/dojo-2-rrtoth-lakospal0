'use strict';

let test = require('tape');

const hp = (numberOfDifferentBooks, numberOfSameBooks) => {

}

//test #1
//bDiff = the number of different books
//aSame = the number of the same books

let bDiff = 5;
let aSame = 0;

test("hp", t => {
    let actual = hp(bDiff, aSame);
    let expected = 40;

    t.equal(actual, expected)
    t.end()
})

//test #2


let cDiff = 2;
let dSame = 0;

test("hp", t => {
    let actual = hp(cDiff, dSame);
    let expected = 14.4;

    t.equal(actual, expected)
    t.end()
})

//test #3


let eDiff = 2;
let fSame = 5;

test("hp", t => {
    let actual = hp(eDiff, fSame);
    let expected = 54.4;

    t.equal(actual, expected)
    t.end()
})

//test #3


let gDiff = 2;
let hSame = 5;

test("hp", t => {
    let actual = hp(gDiff, hSame);
    let expected = 54.4;

    t.equal(actual, expected)
    t.end()
})