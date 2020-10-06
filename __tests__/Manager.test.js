const Manager = require('../lib/Manager.js');

test ('input manager office number', () => {
    const employee = new Manager ('George', 123456, 'george@jungle.com', 'manager', 1234567890);
    
    expect(employee.officeNumber).toEqual(expect.any(Number));
    // expect(Number.length).toBeEqual(10)
})

test('get employee role by calling getRole()', () => {
    const employee = new Manager('George', 123456, 'george@jungle.com', 'manager',1234567890) 

    expect(employee.getRole()).toEqual(expect.any(String));
})

