const Intern = require ('../lib/Intern.js');

test ('input school for intern', ()=> {
    const intern = new Intern ('MIT')

    expect(intern.school).toEqual(expect.any(String));
})