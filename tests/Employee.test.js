const Employee = require('../lib/Employee')

describe("Employee", () => {
    describe("getName", () => {
        it("should return name value", () => {
            let employee = new Employee;
            employee.name = 'Big Guy'
            expect(employee.name).toEqual(employee.getName())
        })
    })

    describe("getId", () => {
        it("should return id value", () => {
            let employee = new Employee;
            employee.id = 1234
            expect(employee.id).toEqual(employee.getId())
        })
    })

    describe("getEmail", () => {
        it("should return name value", () => {
            let employee = new Employee;
            employee.email = 'bigguy@gmail.com'
            expect(employee.email).toEqual(employee.getEmail())
        })
    })
})