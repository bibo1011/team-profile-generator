const Engineer = require ('../lib/Engineer.js')

test ('input github username', () => {
    const engineer = new Engineer ('george123')

    expect(engineer.github).toEqual(expect.any(String));
})