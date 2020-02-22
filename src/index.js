module.exports = function reverse (n) {
    if (n < 0) {
        n = Math.abs(n)  
    }    
    let result = n.toString()
    .split('')
    .reverse()
    .join('')
    
    return  +result
}
