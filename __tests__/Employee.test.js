const Employee = require('../lib/Employee.js');

test('creates employee object', () => {
    const employee = new Employee('George', 123456, 'george@jungle.com', 'employee') 
    
    expect(employee.name).toEqual(expect.any(String))
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));

})

test('get employee name by calling getName()', () => {
    const employee = new Employee('George', 123456, 'george@jungle.com', 'employee') 

    expect(employee.getName()).toEqual(expect.any(String));
})

test('get employee id by calling getId()', () => {
    const employee = new Employee('George', 123456, 'george@jungle.com', 'employee') 

    expect(employee.getId()).toEqual(expect.any(Number));
})

test('get employee email by calling getEmail()', () => {
    const employee = new Employee('George', 123456, 'george@jungle.com', 'employee') 

    expect(employee.getEmail()).toEqual(expect.any(String));
})

test('get employee role by calling getRole()', () => {
    const employee = new Employee('George', 123456, 'george@jungle.com', 'employee') 

    expect(employee.getRole()).toEqual(expect.any(String));
})


