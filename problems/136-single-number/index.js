/**
 * Given a non-empty array of integers,
 * every element appears twice except for one. Find that single one.
 *
 * Note:
 * Your algorithm should have a linear runtime complexity.
 * Could you implement it without using extra memory?
 *
 * Example 1:
 *
 * Input: [2,2,1]
 * Output: 1
 *
 * Example 2:
 *
 * Input: [4,1,2,1,2]
 * Output: 4
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
  const hash = {};

  for (let i = 0; i < nums.length; i++ ) {
    if (!hash[nums[i]]) {
      hash[nums[i]] = 1;
    } else {
      delete hash[nums[i]];
    }
  }
  return +Object.keys(hash)[0];
};

const xor = (nums) => {
  let init = 0;
  nums.forEach(d=>{
      init ^= d
  })
  return init
}

const xor2 = (nums) => nums.reduce((a, b) => a ^ b);

module.exports = [
  singleNumber,
  xor,
  xor2
]
