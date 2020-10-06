const Engineer = require ('../lib/Engineer.js')

test ('input github username', () => {
    const employee = new Engineer ('George', 123456, 'george@jungle.com', 'engineer', 'george123')

    expect(employee.github).toEqual(expect.any(String));
})

test('get employee role by calling getRole()', () => {
    const employee = new Engineer('George', 123456, 'george@jungle.com', 'engineer', 'george123') 

    expect(employee.getRole()).toEqual(expect.any(String));
})