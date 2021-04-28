const db = require("./db");
const Employee = require("./models/employee");
const faker = require("faker");

db.on("error", console.error.bind(console, "MongoDB Connection Error!"));

const findAll = async () => {
  const employees = await Employee.find();
  console.log("All employees found!", employees);
};

const CreateOneEmployee = async () => {
  const addEmployee = [...Array(1)].map((employee) => ({
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    email: faker.internet.email(),
    job_title: faker.name.jobTitle(),
    address: {
      street: faker.address.streetName(),
      city: faker.address.city(),
      state: faker.address.state(),
      zip: faker.address.zipCode(),
    },
  }));
  await Employee.insertMany(addEmployee);
  console.log("Added one employee!", addEmployee);
};

const CreateThreeEmployees = async () => {
  const addEmployees = [...Array(3)].map((employee) => ({
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    email: faker.internet.email(),
    job_title: faker.name.jobTitle(),
    address: {
      street: faker.address.streetName(),
      city: faker.address.city(),
      state: faker.address.state(),
      zip: faker.address.zipCode(),
    },
  }));
  await Employee.insertMany(addEmployees);
  console.log("Added Three employee!", addEmployees);
};

const updateEmployee = async () => {
  const employee = await Employee.updateOne(
    { first_name: "Joe" },
    { $set: { email: "Joe007@gmail.com" } }
  );
  console.log("Employee updated!", employee);
};

const deleteEmployee = async () => {
  const employee = await Employee.deleteOne({
    _id: "6088c60ea79200360e22dc3c",
  });
  console.log("Employee deleted!", employee);
};

const run = async () => {
  await findAll();
  // await CreateOneEmployee();
  // await CreateThreeEmployees();
  // await updateEmployee();
  // await deleteEmployee();
  process.exit();
};

run();
