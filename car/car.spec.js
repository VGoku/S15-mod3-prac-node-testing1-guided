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
//use only if you want to test one, you can also use skip a test.only or test.skip or test.todo
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
    test("cars have a drive method", () => {
        expect(prius.drive).toBeDefined()
        expect(prius.drive).toBe(Car.prototype.drive)
    })
    test("drive method take distance and increases odometer by that distance", () => {
        prius.drive(10)
        expect(prius.odometer).toBe(10)
        prius.drive(5)
        expect(prius.odometer).toBe(15)
    })
    test("drive method returns the updated odometer", async () => {
    let updatedOdometer = await prius.driveAsync(7)
    expect(updatedOdometer).toBe(7)
    updatedOdometer = await prius.driveAsync(5)
    expect(updatedOdometer).toBe(12)
    })
    
})

//Integration test are going to be testing functions working together