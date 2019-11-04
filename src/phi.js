const phi = (matrix) => {
    /**
     * matrix[1][1] YES octopus, YES X.
     * matrix[0][0] NOT octopus, NOT X.
     * matrix[1][0] YES octopus, NOT X.
     * matrix[0][1] NOT octopus, YES X.
     */

     const DIVIDE =  matrix[1][1] * matrix[0][0] - matrix[1][0] * matrix[0][1]
        /**
     * Square root of:
     * - matrix[1][0] + matrix[1][1] --> Whenever octopus is TRUE.
     * - matrix[0][0] + matrix[0][1] --> Whenever octopus is FALSE.
     * - matrix[0][1] + matrix[1][1] --> Whenever X is TRUE.
     * - matrix[0][0] + matrix[1][0] --> Whenever X is FALSE.
     */

     const DIVISOR = Math.sqrt(
         (matrix[1][0] + matrix[1][1]) * 
         (matrix[0][0] + matrix[0][1]) *
         (matrix[0][1] + matrix[1][1]) * 
         (matrix[0][0] + matrix[1][0]))
     
    const RESULT = DIVIDE / DIVISOR;
    return RESULT;
}

console.log('phi', phi([79,9],[4,1]))