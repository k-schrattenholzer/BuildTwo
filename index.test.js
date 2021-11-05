const getMethod = require("./index.js");

describe('getMethod', () => {
    it('when given an HTTP request, will return the method only', () => {
        
        const req = 
        `GET / HTTP/1.1
        Host: example.com
        Accept-Language: us-en`;

        const expectation = 'GET';

        const reqMethod = getMethod(req);

        expect(reqMethod).toEqual(expectation);
    })
    it('when given an HTTP request, will return the method only', () => {
        
        const req = 
        `DELETE / HTTP/1.1
        Host: example.com
        Accept-Language: us-en`;

        const expectation = 'DELETE';

        const reqMethod = getMethod(req);

        expect(reqMethod).toEqual(expectation);
    })
    
})
