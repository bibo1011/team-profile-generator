const Manager = require('../lib/Manager.js');

test ('input manager office number', () => {
    const manager = new Manager (1234567890);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
    // expect(Number.length).toBeEqual(10)
})