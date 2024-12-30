/** @license Apache-2.0 */

'use strict';

/**
* Discrete uniform distribution skewness.
*
* @module @stdlib/stats-base-dists-discrete-uniform-skewness
*
* @example
* var skewness = require( '@stdlib/stats-base-dists-discrete-uniform-skewness' );
*
* var v = skewness( 0, 1 );
* // returns 0.0
*
* v = skewness( 2, 10 );
* // returns 0.0
*
* v = skewness( -10, 10 );
* // returns 0.0
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
