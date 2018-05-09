const fibonacci = require("../lib/fibonacci")

describe("fibonacci", ()=> {

    it("should return 1 when input 1", ()=> {
        expect(fibonacci(1)).toBe(1)
    })
    it("should return 1 when input 1", ()=> {
        expect(fibonacci(7)).toBe(13)
    })
})