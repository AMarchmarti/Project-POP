

function phi (matrix) {

     const DIVIDE =  matrix[1][1] * matrix[0][0] - matrix[1][0] * matrix[0][1]

     const DIVISOR = Math.sqrt(
         (matrix[1][0] + matrix[1][1]) * 
         (matrix[0][0] + matrix[0][1]) *
         (matrix[0][1] + matrix[1][1]) * 
         (matrix[0][0] + matrix[1][0]))
     
    const RESULT = DIVIDE / DIVISOR;
    return RESULT;
}

module.exports = phi;


