const { expect } = require('@jest/globals')
const sum = require('./sum')

test('proplerly adds two numbers', () => {
    expect(sum(1,2)).toBe(3)
})