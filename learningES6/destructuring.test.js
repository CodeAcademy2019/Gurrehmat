const destructuring = require('./destructuring')

test("should return username and email of supplied array", ()=>{
    expect(destructuring([18,"jDoe","jd@example.com",29,"John","Doe"])).toEqual({username: "jDoe", email: "jd@example.com"});
});

test("should return username and email of supplied array", ()=>{
    expect(destructuring([18,"samT","st@example.com",29,"Sam","Thomas"])).toEqual({username: "samT", email: "st@example.com"});
});