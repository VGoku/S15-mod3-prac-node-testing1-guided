// Build a Car class!
class Car {
    // Constructor method is called when a new instance of the class is created
    constructor(make, model) {
      this.make = make  // Initialize the make (brand) of the car
      this.model = model // Initialize the model of the car
      this.odometer = 0 // Initialize the odometer reading (mileage) to 0
    }
  
    // Regular method to drive the car a given distance
    drive(distance) {
      this.odometer += distance // Increase the odometer by the distance traveled
    }
  
    // Asynchronous method to drive the car a given distance
    async driveAsync(distance) {
      this.odometer += distance // Increase the odometer by the distance traveled
      return this.odometer // Return the updated odometer value
    }
  }
  
  // Export the Car class so it can be used in other files
  module.exports = Car
  