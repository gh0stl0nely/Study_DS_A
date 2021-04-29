/**
 * Check to see if the input integer is a power of two
 * @params num
 * @return boolean
 */

    /**
     * Explanation:
     * The solution below is an optimal solution but it requires an understanding 
     * of bitwise operation.
     * 
     * Remember that the bits representation of any number is of base 2 
     * i.e: Number 9 in binary form is "0000 1001" -> 0 + 0 + 0 + 0 + 0 + 2^3 + 0 + 0 + 2 ^ 1
     * 
     * The number with only ONE 1 (one bit turnred on) in binary form 
     * is a power of two. See below
     * 1: "0000 0001" = 2^0
     * 2: "0000 0010" = 2^1
     * 16: "0001 0000" = 2^4
     * 
     * We can turn it into a binary string and check to see there is 
     * more than one 1's in the string, but that will result in a linear time complexity
     * 
     * We will instead use the AND "&" operator to determine that
     * The "&" operator compares each bit of two numbers, 
     * If there is two 1's, it will return a 1, otherwise 0
     * I.e: 2 & 1 = 0
     * "0000 0010"
     * "0000 0001"
     * = "0000 0000"
     * 
     * That is exactly what we will do. We take the input value and find the resulting
     * binary representation by "&-ding" its value minus 1.
     * 
     * The above example shows that if the resulting number is 0, then the number on the left
     * will be a power of two. You can try out with other number
     * 
     * If the resulting number is not 0, in other words, there are at least TWO 1's bits
     * , then we know right away that it is not a power of 2.
     * 
     * Also note that the base case of 1. We cannot use anything less than 1 because 
     * we will be going to the negative integer realm, which we can confidently know
     * that no negative number will provide a correct result. 
     * 
     * 
     * Time: O(1), no iteration needed
     * Space: O(1), no extra memory needed
     */

module.exports = function isPowerOfTwo(num){
    if(num < 1) return false;

    return (num & num - 1) == 0;
}