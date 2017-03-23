const should = require('chai').should();
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {

	it('should output fizz or buzz or number', function() {
		const goodOutput = [
			{num: 5, expected: 'buzz'},
			{num: 3, expected: 'fizz'},
			{num: 15, expected: 'fizz-buzz'},
			{num: 8, expected: 8}
		];

		goodOutput.forEach(function(input) {
			const answer = fizzBuzzer(input.num);
			answer.should.equal(input.expected);
		});
	});

	it('should throw error if not a number', function() {
		const badInput = [
			['a'],
			[false],
			[true],
			['15']
		];

		badInput.forEach(function(input) {
			(function() {
				fizzBuzzer(input[0])
			}).should.throw(Error);
		});
	});
});