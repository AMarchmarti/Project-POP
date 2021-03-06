/*jshint esversion: 6 */
'use strict';

function phi(matrix) {
    /**
     * matrix[1][1] YES octopus, YES X.
     * matrix[0][0] NOT octopus, NOT X.
     * matrix[1][0] YES octopus, NOT X.
     * matrix[0][1] NOT octopus, YES X.
     */

    const DIVIDE = matrix[1][1] * matrix[0][0] - matrix[1][0] * matrix[0][1];

    const DIVISOR = Math.sqrt(
        /**
         * Square root of:
         * - matrix[1][0] + matrix[1][1] --> Whenever octopus is TRUE.
         * - matrix[0][0] + matrix[0][1] --> Whenever octopus is FALSE.
         * - matrix[0][1] + matrix[1][1] --> Whenever X is TRUE.
         * - matrix[0][0] + matrix[1][0] --> Whenever X is FALSE.
         */
        (matrix[1][0] + matrix[1][1]) *
        (matrix[0][0] + matrix[0][1]) *
        (matrix[0][1] + matrix[1][1]) *
        (matrix[0][0] + matrix[1][0]));

    const RESULT = DIVIDE / DIVISOR;
    return RESULT;
}

module.exports = phi;