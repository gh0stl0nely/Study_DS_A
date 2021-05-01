/**
 * Given two strings that have internal numeric value Add them up and returns
 * the result as a String 
 * Note: DO NOT CONVERT STRING INTO NUMERIC VALUE
 * 
 * @params s1, s2
 * @return String
 */

   /**
     * Explanation: 
     * First of all, ask yourself this question
     * "What are the steps to add 2 numbers?"
     * Yes, the algorithm is just as simple as that!
     * We will just need to add numbers from right to left, like this.
     *   192
     *    29
     * -------
     *   221
     * 
     * 1) We need to make sure the input string are valid
     * which means it must not have any trailing zero(s).
     * 
     * 2) We will start at the end of the strings, 
     * using i and j as their indices
     * 
     * 3) Initialize carry as 0, which holds the value 
     * that must be "carried" over to the next round of addition
     * I.e: 19 + 3
     * 9 + 3 is 12, so our carry is 1
     * 1 + 1 = 2 
     * => 22
     * 
     * 4) Initialize curr, which represent the value of adding
     * together the character at index i, j and carry
     * 
     * 5) We use StringBuilder object to store values at
     * each addition round and its reverse will be our final result
     * 
     * 6) Our while loop will keep looping until we pass the
     * beginning of both strings (i < 0 and j < 0)
     * 
     * * Clever trick for adding numeric character * 
     * 
     * - On line 61 and 62, we have a ternary operator to find
     * the character that the current for our addition
     * - Pay attention to s1.charAt(i) and s2.charAt(j)
     * - If two characters (of type char) add or subtract
     * - Both will be converted into their decimal ASCII value
     * - For instance, '9' - '0' => 57 - 48 = 9
     * - or '0' - '0' => 48 - 48 = 0
     * Essentially, this allows us to literally perform subtraction on character
     * WITHOUT having to convert them using primitive method like getNumericValue() 
     * 
     * 7) Once we get the numeric values, we simply add them 
     * together with the carry and store in the variable "curr". 
     * 
     * 8) Because carry has already been added and is not 0,
     * don't forget to decrement it
     * 
     * 9) If "curr" is more than 10, we know that there is a carry, 
     * thus we must increment the variable "carry"
     * 
     * 9b) For instance, if "carry" is 18, we will append 8 to StringBuilder object
     * To obtain 8, we use modulus operator (%), which returns the remainder of a division
     * => 18 % 10 = 8 (because 18 / 10 = 1.8, the remainder is 8)
     *  
     * 10) If "curr" is less 10, we just simply add it to StringBuilder object
     * 
     * 11) Decrement i and j to move one character backward
     * 
     * 12) Upon exiting the loop, don't forget about appending 
     * the variable "carry" to StringBuilder object if it's positive
     * i.e: 999 + 1 = 000 (after while loop) and carry = 1
     * Append to StringBuilder object will give 0001
     * 
     * 13) Reverse the StringBuilder object
     * and return its string version to get the final result
     * 
     * => I.e: addStringPrimitive("1942", "33") 
     * Without reversal will return 5791
     * After reversal will return 1975
     *
     */

class StringBuilder {

    constructor(){
        this.array = [];
        this.append();
        this.reverseAndJoin();
    }

    append(item){
        this.array.push(item);
    }
    
    reverseAndJoin(){
        return this.array.reverse().join("");
    }
}

function addStringPrimitive(s1, s2){
    if((s1.charAt(0) - '0' == 0 && s1.length > 1) 
    || (s2.charAt(0) - '0' == 0 && s2.length > 1)
    ){
        return "Invalid String";
    }

    let sb = new StringBuilder();

    let i = s1.length - 1;
    let j = s2.length - 1;

    let curr = 0;
    let carry = 0;

    while(i >= 0 || j >= 0){
        let c1 = i >= 0 ? s1.charAt(i) - '0' : 0;
        let c2 = j >= 0 ? s2.charAt(j) - '0' : 0;
        curr = c1 + c2 + carry;

        if(carry > 0)
            carry--;
        
        if(curr >= 10){
            carry++;
            sb.append(curr % 10);
        } else {
            sb.append(curr);
        }

        i--;
        j--;
    }

    if(carry > 0)
        sb.append(carry);

    return sb.reverseAndJoin();
}

module.exports.addStringPrimitive = addStringPrimitive;

