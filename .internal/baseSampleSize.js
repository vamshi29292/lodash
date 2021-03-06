import baseClamp from './.internal/baseClamp.js';
import shuffleSelf from './.internal/shuffleSelf.js';
import values from './values.js';

/**
 * The base implementation of `sampleSize` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to sample.
 * @param {number} n The number of elements to sample.
 * @returns {Array} Returns the random elements.
 */
function baseSampleSize(collection, n) {
  const array = values(collection);
  return shuffleSelf(array, baseClamp(n, 0, array.length));
}

export default baseSampleSize;
