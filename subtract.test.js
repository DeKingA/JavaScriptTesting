const { expect } = require('@jest/globals')
const subtract = require('./subtract')

test('proplerly subtracts two numbers', () => {
    expect(subtract(1,2)).toBe(-1)
})