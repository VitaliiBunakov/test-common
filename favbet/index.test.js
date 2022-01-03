const stickyArrays = require('./index')

describe('Morning vocal test', () => {
    const result = stickyArrays();
    const lastOne = result[result.length - 2];
    const sticky5 = result[result.length - 1];
    const reference = [];
    for (let i = 0; i < lastOne.length; i++) {
        if (lastOne[i] === 5)  reference.push(i)
    }
    reference.sort((a, b) => {
        return a - b
    })
    console.log(lastOne);
    console.log(sticky5)
    console.log(reference)
    test('second morning vocal test', () => {
        expect(reference).toStrictEqual(sticky5)
    })
})