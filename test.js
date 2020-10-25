const assert = require('assert');
const fibonacci = require('./fibonacci');

describe ('fibonacii', ()=>{
    
    it('Index 10 is 89', () =>{
        assert.equal(89, fibonacci(10))   
    })
    it('Index 20 is 10946', () =>{
        assert.equal(10946, fibonacci(20))  
    })
    it('Index 4 is 5', () =>{
        assert.equal(5, fibonacci(4))  
    })
    it('Index 1 is 1', () =>{
        assert.equal(1, fibonacci(1))  
    })
})