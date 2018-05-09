const anagram =require("../lib/anagram")

describe("anagram", ()=> {

    it("should return [] when input empty string", ()=> {
        expect(anagram(1)).toEqual([])
    })
    it("should return [a] when input a", ()=> {
        expect(anagram(a)).toEqual(["a"])
    })
    it("should return [ab,ba] when input ab", ()=> {
        expect(anagram(ab)).toEqual(["ab","ba"])
    })
    it("should return [abc,acb,bca,bac,cab,cba] when input abc", ()=> {
        expect(anagram(ab)).toEqual(["abc","acb","bca","bac","cab","cba"])
    })
})
