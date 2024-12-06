function foo () {
    return "the foo"
}
const describe = describe;//red lines gone...
const test = test;
const expect = expect;
// Test away!
describe("our first tests", () => {
    test("sanity", () =>{
        expect(5).toBe(4+1)
        expect(5).toBe(2.5+2.5)
        expect(5).toBeDefined()
        expect(5).toBeGreaterThan(4)
    })
    test("objects", () => {
        const o = { a: 1 }
        const oo = { a: 1 }
        const ooo = oo
        expect(o).toBe(o)
        expect(oo).toBe(ooo)
    })
    test("objects again", () => {
        expect({ a: 1 }).toEqual({ a: 1 })
    })
})
//Unit Testing: Test the smallest pieces of our program,
//which normally functions and classes.
// function foo () {
//     return "the foo"
// }
describe("foo function", () => {
    test("foo returns the foo", () => {
        expect(foo()).toBe("the foo")
        expect(foo()).toHaveLength(7)
    })
})
//Car Test:
