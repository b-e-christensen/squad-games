const Engineer = require('../lib/Engineer')

describe("Engineer", () => {
    describe("getGithub", () => {
        it("should return github value", () => {
            let engineer = new Engineer;
            engineer.github = 'Big Guy'
            expect(engineer.github).toEqual(engineer.getGithub())
        })
    })

    
})