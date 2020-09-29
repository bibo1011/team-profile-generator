const Intern = require ('../lib/Intern.js');

test ('input school for intern', ()=> {
    const employee = new Intern('George', 123456, 'george@jungle.com','MIT')

    expect(employee.school).toEqual(expect.any(String));
})

test('get employee role by calling getRole()', () => {
    const employee = new Intern('George', 123456, 'george@jungle.com', 'MIT') 

    expect(employee.getRole()).toEqual(expect.any(String));
})