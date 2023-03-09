// Define a constructor function for Scooter
function Scooter(year, color, model) {
  // Use this to refer to the new object instance
  this.year = year;
  this.color = color;
  this.model = model;
}

// Define a constructor function for Driver
function Driver(name, age, experience) {
  // Use this to refer to the new object instance
  this.name = name;
  this.age = age;
  this.experience = experience;
}

// Define a constructor function for PickupLocation
function PickupLocation(address, city) {
  // Use this to refer to the new object instance
  this.address = address;
  this.city = city;
}

// Create a new Scooter object
let scooter1 = new Scooter(2020, "red", "Vespa");

// Create a new Driver object
let driver1 = new Driver("Alice", 25, "3 years");

// Create a new PickupLocation object
let location1 = new PickupLocation("123 Main Street", "New York");
