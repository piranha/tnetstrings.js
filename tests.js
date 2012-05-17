#!/usr/bin/env node
var tnetstrings = require('./tnetstrings'),
    assert = require('assert');

[
    ['0:~', null],
    ['5:false!', false],
    ['4:test,', 'test'],
    ['3:123#', 123],
    ["16:5:hello,5:12345#}", {hello: 12345}],
    ["32:5:hello,5:12345#5:hello,5:56789#]", ["hello", 12345, "hello", 56789]],
    ["9:3.1415926^", 3.1415926],
    ["19:8:sentence,5:été,}", {sentence: "été"}]
].forEach(function (test) {
    assert.deepEqual( tnetstrings.parse(test[0]).value, test[1] );
    assert.deepEqual( tnetstrings.dump(test[1]), test[0] );
});

console.log('tests done');
