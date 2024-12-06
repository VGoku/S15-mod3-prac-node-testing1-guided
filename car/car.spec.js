const Car = require("./car")

function foo () {
    return "the foo"
}

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
describe("Car class", () => {
    let prius
    beforeEach(() => {
        prius = new Car("toyota", "prius")
    })
    test("it is defined", () => {
        expect(Car).toBeDefined()
        expect(Car).toBeInstanceOf(Function)
    })
    test("has model and make", () => {
        // const prius = new Car("toyota", "prius")
        expect(prius).toHaveProperty("make", "toyota")
        expect(prius).toHaveProperty("model", "prius")
        expect(prius.make).toBeDefined()
        expect(prius.model).toBeDefined()
        expect(prius.make).toBe("toyota")
        expect(prius.model).toBe("prius")
        expect(prius).toMatchObject({ make: "toyota", model: "prius" })
        // expect(prius).toEqual({ make: "toyota", model: "prius" })
        })
        test("new cars start with the odometer at zero", () => {
            // const prius = new Car("toyota", "prius")
            expect(prius).toHaveProperty("odometer", 0)
    })
})

