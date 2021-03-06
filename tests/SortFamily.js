'use strict'

const should = require('should');
const SortFamily = require('../SortFamily.js');
const SortTest = require('./SortTest.js');

describe('SortFamily.numberCompareFn', function() {
    let compare = SortFamily.numberCompareFn;
    it('5 > 3', function() {
        compare(5, 3).should.equal(1);
    });
    it('3 < 5', function() {
        compare(3, 5).should.equal(-1);
    });
    it('3 == 3', function() {
        compare(3, 3).should.equal(0);
    });
});

describe('SortFamily.stringCompareFn', function() {
    let compare = SortFamily.stringCompareFn;
    it('"a" < "b"', function() {
        compare('a', 'b').should.equal(-1);
    });
    it('"b" > "a"', function() {
        compare('b', 'a').should.equal(1);
    });
    it('"a" == "a"', function() {
        compare('a', 'a').should.equal(0);
    });
    it('"a" < "aa", "aa" < "ab", "aab" < "aac", "ab" < "ba"', function() {
        compare('a', 'aa').should.equal(-1);
        compare('aa', 'ab').should.equal(-1);
        compare('aab', 'aac').should.equal(-1);
        compare('ab', 'ba').should.equal(-1);
    });
    it('"爱" < "被", "被" < "猜", "爱" < "猜", "爱" = "爱"', function() {
        compare('爱', '被').should.equal(-1);
        compare('被', '猜').should.equal(-1);
        compare('爱', '猜').should.equal(-1);
        compare('爱', '爱').should.equal(0);
    });
    it('"爱" < "爱爱", "爱爱" < "爱被", "爱被猜" < "被爱猜"', function() {
        compare('爱', '爱爱').should.equal(-1);
        compare('爱爱', '爱被').should.equal(-1);
        compare('爱被猜', '被爱猜').should.equal(-1);
    });
});

describe('SortFamily.insertionSort', function() {
    this.timeout(1000000);
    it('100 random test cases with arrays of 500 randomly generated numbers', function() {
        let result = SortTest('random', 100, 500, SortFamily.insertionSort);
        result.failed.should.equal(0);
        console.log('Total: %s, succeed: %s, failed: %s, elapsedTime: %s ms, average: %s ms', result.total, result.succeed, result.failed, result.elapsedTime, Math.round(result.elapsedTime/result.total));
    });
    /*it('100 random test cases with arrays of 1000 randomly generated numbers', function() {
        let result = SortTest('random', 100, 1000, SortFamily.insertionSort);
        result.failed.should.equal(0);
        console.log('Total: %s, succeed: %s, failed: %s, elapsedTime: %s ms, average: %s ms', result.total, result.succeed, result.failed, result.elapsedTime, Math.round(result.elapsedTime/result.total));
    });
    it('100 random test cases with arrays of 2000 randomly generated numbers', function() {
        let result = SortTest('random', 100, 2000, SortFamily.insertionSort);
        result.failed.should.equal(0);
        console.log('Total: %s, succeed: %s, failed: %s, elapsedTime: %s ms, average: %s ms', result.total, result.succeed, result.failed, result.elapsedTime, Math.round(result.elapsedTime/result.total));
    });
    it('100 random test cases with arrays of 2000 almost sorted numbers', function() {
        let result = SortTest('almostSorted', 100, 2000, SortFamily.insertionSort);
        result.failed.should.equal(0);
        console.log('Total: %s, succeed: %s, failed: %s, elapsedTime: %s ms, average: %s ms', result.total, result.succeed, result.failed, result.elapsedTime, Math.round(result.elapsedTime/result.total));
    });*/
});

describe('SortFamily.mergeSort', function() {
    this.timeout(1000000);
    it('100 random test cases with arrays of 1000 randomly generated numbers', function() {
        let result = SortTest('random', 100, 1000, SortFamily.mergeSort);
        result.failed.should.equal(0);
        console.log('Total: %s, succeed: %s, failed: %s, elapsedTime: %s ms, average: %s ms', result.total, result.succeed, result.failed, result.elapsedTime, Math.round(result.elapsedTime/result.total));
    });
    /*it('100 random test cases with arrays of 10000 randomly generated numbers', function() {
        let result = SortTest('random', 100, 10000, SortFamily.mergeSort);
        result.failed.should.equal(0);
        console.log('Total: %s, succeed: %s, failed: %s, elapsedTime: %s ms, average: %s ms', result.total, result.succeed, result.failed, result.elapsedTime, Math.round(result.elapsedTime/result.total));
    });
    it('100 random test cases with arrays of 100000 randomly generated numbers', function() {
        let result = SortTest('random', 100, 100000, SortFamily.mergeSort);
        result.failed.should.equal(0);
        console.log('Total: %s, succeed: %s, failed: %s, elapsedTime: %s ms, average: %s ms', result.total, result.succeed, result.failed, result.elapsedTime, Math.round(result.elapsedTime/result.total));
    });
    it('100 random test cases with arrays of 100000 almost reversed numbers', function() {
        let result = SortTest('almostReverse', 100, 100000, SortFamily.mergeSort);
        result.failed.should.equal(0);
        console.log('Total: %s, succeed: %s, failed: %s, elapsedTime: %s ms, average: %s ms', result.total, result.succeed, result.failed, result.elapsedTime, Math.round(result.elapsedTime/result.total));
    });
    it('100 random test cases with arrays of 100000 almost sorted numbers', function() {
        let result = SortTest('almostSorted', 100, 100000, SortFamily.mergeSort);
        result.failed.should.equal(0);
        console.log('Total: %s, succeed: %s, failed: %s, elapsedTime: %s ms, average: %s ms', result.total, result.succeed, result.failed, result.elapsedTime, Math.round(result.elapsedTime/result.total));
    });*/
});

describe('SortFamily.quickSort', function() {
    this.timeout(1000000);
    it('100 random test cases with arrays of 1000 randomly generated numbers', function() {
        let result = SortTest('random', 100, 1000, SortFamily.quickSort);
        result.failed.should.equal(0);
        console.log('Total: %s, succeed: %s, failed: %s, elapsedTime: %s ms, average: %s ms', result.total, result.succeed, result.failed, result.elapsedTime, Math.round(result.elapsedTime/result.total));
    });
    /*it('100 random test cases with arrays of 10000 randomly generated numbers', function() {
        let result = SortTest('random', 100, 10000, SortFamily.quickSort);
        result.failed.should.equal(0);
        console.log('Total: %s, succeed: %s, failed: %s, elapsedTime: %s ms, average: %s ms', result.total, result.succeed, result.failed, result.elapsedTime, Math.round(result.elapsedTime/result.total));
    });
    it('100 random test cases with arrays of 100000 randomly generated numbers', function() {
        let result = SortTest('random', 100, 100000, SortFamily.quickSort);
        result.failed.should.equal(0);
        console.log('Total: %s, succeed: %s, failed: %s, elapsedTime: %s ms, average: %s ms', result.total, result.succeed, result.failed, result.elapsedTime, Math.round(result.elapsedTime/result.total));
    });
    it('100 random test cases with arrays of 100000 almost reversed numbers', function() {
        let result = SortTest('almostReverse', 100, 100000, SortFamily.quickSort);
        result.failed.should.equal(0);
        console.log('Total: %s, succeed: %s, failed: %s, elapsedTime: %s ms, average: %s ms', result.total, result.succeed, result.failed, result.elapsedTime, Math.round(result.elapsedTime/result.total));
    });
    it('100 random test cases with arrays of 100000 almost sorted numbers', function() {
        let result = SortTest('almostSorted', 100, 100000, SortFamily.quickSort);
        result.failed.should.equal(0);
        console.log('Total: %s, succeed: %s, failed: %s, elapsedTime: %s ms, average: %s ms', result.total, result.succeed, result.failed, result.elapsedTime, Math.round(result.elapsedTime/result.total));
    });*/
});

describe('SortFamily.heapSort', function() {
    this.timeout(1000000);
    it('100 random test cases with arrays of 1000 randomly generated numbers', function() {
        let result = SortTest('random', 100, 1000, SortFamily.heapSort);
        result.failed.should.equal(0);
        console.log('Total: %s, succeed: %s, failed: %s, elapsedTime: %s ms, average: %s ms', result.total, result.succeed, result.failed, result.elapsedTime, Math.round(result.elapsedTime/result.total));
    });
    /*it('100 random test cases with arrays of 10000 randomly generated numbers', function() {
        let result = SortTest('random', 100, 10000, SortFamily.heapSort);
        result.failed.should.equal(0);
        console.log('Total: %s, succeed: %s, failed: %s, elapsedTime: %s ms, average: %s ms', result.total, result.succeed, result.failed, result.elapsedTime, Math.round(result.elapsedTime/result.total));
    });
    it('100 random test cases with arrays of 100000 randomly generated numbers', function() {
        let result = SortTest('random', 100, 100000, SortFamily.heapSort);
        result.failed.should.equal(0);
        console.log('Total: %s, succeed: %s, failed: %s, elapsedTime: %s ms, average: %s ms', result.total, result.succeed, result.failed, result.elapsedTime, Math.round(result.elapsedTime/result.total));
    });
    it('100 random test cases with arrays of 100000 almost reversed numbers', function() {
        let result = SortTest('almostReverse', 100, 100000, SortFamily.heapSort);
        result.failed.should.equal(0);
        console.log('Total: %s, succeed: %s, failed: %s, elapsedTime: %s ms, average: %s ms', result.total, result.succeed, result.failed, result.elapsedTime, Math.round(result.elapsedTime/result.total));
    });
    it('100 random test cases with arrays of 100000 almost sorted numbers', function() {
        let result = SortTest('almostSorted', 100, 100000, SortFamily.heapSort);
        result.failed.should.equal(0);
        console.log('Total: %s, succeed: %s, failed: %s, elapsedTime: %s ms, average: %s ms', result.total, result.succeed, result.failed, result.elapsedTime, Math.round(result.elapsedTime/result.total));
    });*/
});

/*describe('built-in Array.sort()', function() {
    this.timeout(1000000);
    let fn = function(a) {
        a.sort(function(a, b) {
            if (a > b) return 1;
            if (a < b) return -1;
            return 0;
        });
    }
    it('100 random test cases with arrays of 1000 randomly generated numbers', function() {
        let result = SortTest('random', 100, 1000, fn);
        result.failed.should.equal(0);
        console.log('Total: %s, succeed: %s, failed: %s, elapsedTime: %s ms, average: %s ms', result.total, result.succeed, result.failed, result.elapsedTime, Math.round(result.elapsedTime/result.total));
    });
    it('100 random test cases with arrays of 10000 randomly generated numbers', function() {
        let result = SortTest('random', 100, 10000, fn);
        result.failed.should.equal(0);
        console.log('Total: %s, succeed: %s, failed: %s, elapsedTime: %s ms, average: %s ms', result.total, result.succeed, result.failed, result.elapsedTime, Math.round(result.elapsedTime/result.total));
    });
    it('100 random test cases with arrays of 100000 randomly generated numbers', function() {
        let result = SortTest('random', 100, 100000, fn);
        result.failed.should.equal(0);
        console.log('Total: %s, succeed: %s, failed: %s, elapsedTime: %s ms, average: %s ms', result.total, result.succeed, result.failed, result.elapsedTime, Math.round(result.elapsedTime/result.total));
    });
    it('100 random test cases with arrays of 100000 almost reversed numbers', function() {
        let result = SortTest('almostReverse', 100, 100000, fn);
        result.failed.should.equal(0);
        console.log('Total: %s, succeed: %s, failed: %s, elapsedTime: %s ms, average: %s ms', result.total, result.succeed, result.failed, result.elapsedTime, Math.round(result.elapsedTime/result.total));
    });
    it('100 random test cases with arrays of 100000 almost sorted numbers', function() {
        let result = SortTest('almostSorted', 100, 100000, fn);
        result.failed.should.equal(0);
        console.log('Total: %s, succeed: %s, failed: %s, elapsedTime: %s ms, average: %s ms', result.total, result.succeed, result.failed, result.elapsedTime, Math.round(result.elapsedTime/result.total));
    });
});*/