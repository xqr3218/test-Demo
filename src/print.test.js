import functions from './print'
// const sum = require('./print');

test('adds 1 + 2 to equal 3', () => {
    expect(functions.sum(1, 2)).toBe(3);
});
