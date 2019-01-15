const html = require('./taggedTemplateStrings');

test(`checking for '' and <>`,() => {
    process.argv=['node','tagged-temp-strings.js',`<b>${"O'Tom"} says</b>: "${'I am <i>free</i>'}"`];
    expect(html).toEqual('<b>O&apos;Tom says</b>: "I am &lt;i&gt;free&lt;/i&gt;"');
});