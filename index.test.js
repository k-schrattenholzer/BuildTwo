const getMethod = require("./index.js");

describe('getMethod', () => {
  
    it('will return the method', () => {
        
        const req = 
        `GET / HTTP/1.1
        Host: example.com
        Accept-Language: us-en`;

        const expectation = 'GET';

        const reqMethod = getMethod(req);

        expect(reqMethod).toEqual(expectation);
    });

    it('will return the method', () => {
        
        const req = 
        `DELETE / HTTP/1.1
        Host: example.com
        Accept-Language: us-en`;

        const expectation = 'DELETE';

        const reqMethod = getMethod(req);

        expect(reqMethod).toEqual(expectation);
    })
    
})
