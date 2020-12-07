import {excerpt} from "../../../src/util"

describe("util",()=>{
    it("should return the string that has been truncated",()=>{
        const inputStr="Tests".repeat(41);
        expect(excerpt(inputStr)).to.equal("Tests".repeat(39)+"Te...");
    })
})