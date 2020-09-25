const Employee = require('../lib/Employee.js');

test('creates employee object', () => {
    const employee = new Employee('George', 123456, 'george@jungle.com') 
    
    expect(employee.name).toEqual(expect.any(String))
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('george@jungle.com');

})

