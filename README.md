#Inline.js - Inline Testing in Javascript
    
 Inline.js allows you to append unit tests onto function declarations inline in code, such as:
 
     var square = function(n) { return n * n; }.where(3).shouldEqual(9);
 
 It was inspired by the article [Extending JavaScript with inline unit tests](http://sergimansilla.com/blog/extending-js-inline-unit-tests/) by Sergi Mansilla, which uses macros to achieve a similar result.
 
 Inline.js is only a quick experiment, and I wouldn’t really recommend mixing tests and code, but I do think there’s something interesting about inline testing, and could see it being used for teaching or demonstration purposes. [Read more](http://jordanwallwork.co.uk/2013/11/inline-js-inline-testing-with-javascript/) on my blog.