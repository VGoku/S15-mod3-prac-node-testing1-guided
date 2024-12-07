const Car = require("./car") // Import the Car class to be tested

// Sample function to test
function foo () {
    return "the foo"
}

// Test away!
// Unit Tests with Jest: Test the smallest pieces of your program (functions and classes)
describe("our first tests", () => {
    // "sanity" test to check simple assertions
    test("sanity", () =>{
        expect(5).toBe(4+1) // Expect 5 to be equal to 4 + 1
        expect(5).toBe(2.5+2.5) // Expect 5 to be equal to 2.5 + 2.5
        expect(5).toBeDefined() // Expect 5 to be defined (not null or undefined)
        expect(5).toBeGreaterThan(4) // Expect 5 to be greater than 4
    })
    // Test with object comparisons
    test("objects", () => {
        const o = { a: 1 }
        const oo = { a: 1 }
        const ooo = oo
        expect(o).toBe(o) // Expect `o` to be strictly equal to itself (same reference)
        expect(oo).toBe(ooo) // Expect `oo` to be strictly equal to `ooo` (same reference)
    })
    // Testing object equality (deep comparison)
    test("objects again", () => {
        expect({ a: 1 }).toEqual({ a: 1 }) // Expect the objects to be deeply equal
    })
})
//Unit Testing: Test the smallest pieces of our program,
//which normally functions and classes.
// function foo () {
//     return "the foo"
// }
// Unit test for the `foo` function
describe("foo function", () => {
    test("foo returns the foo", () => {
        expect(foo()).toBe("the foo") // Expect foo() to return "the foo"
        expect(foo()).toHaveLength(7) // Expect foo()'s result to have a length of 7 (because "the foo" has 7 characters)
    })
})
//Car Test: 
// Testing the `Car` class
//use only if you want to test one, you can also use skip a test.only or test.skip or test.todo
describe("Car class", () => {
    let prius // Declare a variable to hold a Car instance
    // `beforeEach` is run before each test in this block
    beforeEach(() => {
        prius = new Car("toyota", "prius") // Create a new Car instance for each test
    })
    test("it is defined", () => {
        expect(Car).toBeDefined() // Check that the `Car` class is defined
        expect(Car).toBeInstanceOf(Function) // Check that `Car` is a function (a class in JavaScript)
    })
    test("has model and make", () => {
        // const prius = new Car("toyota", "prius")
        expect(prius).toHaveProperty("make", "toyota") // Check that the `make` property is set correctly
        expect(prius).toHaveProperty("model", "prius") // Check that the `model` property is set correctly
        expect(prius.make).toBeDefined() // Ensure `make` is defined
        expect(prius.model).toBeDefined() // Ensure `model` is defined
        expect(prius.make).toBe("toyota") // Check that the `make` is exactly "toyota"
        expect(prius.model).toBe("prius") // Check that the `model` is exactly "prius"
        expect(prius).toMatchObject({ make: "toyota", model: "prius" }) // Ensure that the car object matches the expected structure
        // expect(prius).toEqual({ make: "toyota", model: "prius" })
        })
        test("new cars start with the odometer at zero", () => {
            // const prius = new Car("toyota", "prius")
            expect(prius).toHaveProperty("odometer", 0) // Ensure the odometer starts at 0
    })
    test("cars have a drive method", () => {
        expect(prius.drive).toBeDefined() // Ensure that the `drive` method is defined
        expect(prius.drive).toBe(Car.prototype.drive) // Ensure that the `drive` method belongs to the Car class prototype
    })
    test("drive method take distance and increases odometer by that distance", () => {
        prius.drive(10) // Drive 10 units
        expect(prius.odometer).toBe(10) // Ensure the odometer is updated to 10
        prius.drive(5) // Drive 5 more units
        expect(prius.odometer).toBe(15) // Ensure the odometer is updated to 15
    })
    test("drive method returns the updated odometer", async () => {
        let updatedOdometer = await prius.driveAsync(7) // Drive asynchronously by 7 units
        expect(updatedOdometer).toBe(7) // Ensure the odometer is updated to 7
        updatedOdometer = await prius.driveAsync(5) // Drive asynchronously by 5 more units
        expect(updatedOdometer).toBe(12) // Ensure the odometer is updated to 12
    })
    
})

//Integration test are going to be testing functions working together