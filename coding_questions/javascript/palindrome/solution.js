/**
 * Checks whether the integer input is a palindrome A palindrome is a number the
 * same forward and backward. Condition: Do not convert argument into a string
 * 
 * @params n
 * @return boolean
 */


 /**
     * Explanation: The very first thing we should notice is negative number is not
     * a palindrome Because of the (-) negative sign at the beginning. Some values
     * that we need to prepare in advance are:
     * 
     * Length of n: To determine the mask and how many times should we loop. Mask:
     * The number that we will divide our input by to get the first integer
     * 
     * The length of a number is the sum of its base-10 log and 1. The mask is
     * calculated by taking 10 to the power of input's length - 1. If the number is
     * 12345, length wil be 5, mask will be 10^ 4 = 10,000
     * 
     * We will want to iterate until the index of the middle digit only and not
     * until the end
     * 
     * For each iteration:
     * 
     * firstDigit variable will hold the first digit by diving the input by the mask
     * (i.e: n = 12321, firstDigit = 12321 / 10000 or 1 ) lastDigit variable will
     * hold the last digit, which is remainder when diving by 10, using % operator
     * (i.e: n = 12321, lastDigit = 12321 % 10 or 1, because 1 is the remainder when
     * dividing by 10) Returns false if the firstDigit and lastDigit are not the
     * same number If they are, move on and truncate input value and update the mask
     * variable.
     * 
     * After loop exits, returns true to indicate the input value is a palindrome
     * 
     * Time: Supposed to be O(m/2), but we drop the constant 1/2, so O(m), where m
     * is length of input value Space: O(1), we only manipulate variable and didn't
     * make use of any extra memory
     */

module.exports = function isPalindrome(num){
    if(num < 0) return false;
    // 123321
    const length = Math.floor(Math.log10(num) + 1 );
    let mask = Math.pow(10, length - 1);

    let firstDigit, lastDigit;
    
    for(let i = 0; i < Math.floor(length / 2); i++){
        firstDigit = Math.floor(num / mask);
        lastDigit = num % 10;

        if(firstDigit != lastDigit)
            return false;
       
        num %= mask;
        num = Math.floor(num / 10);
        mask /= 100;
    }

    return true;
}