package CountSubArraysSumToK;

import java.util.*;

 /**
 * Given an array of integers (arr) and an integer (k) as arguments, 
 * returns the total number of subarray, contiguous subarray inside (arr)
 * that sums to integer k 
 * @params arr, k
 * @returns int
 */
public class CountSubArraysSumToK {
    public static void main(String[] args) {
        // Suboptimal Solution O(N^2) Time + O(N) Space
        // System.out.println(countSubArraysSumToK(new int []{-1,1,0,-1}, 0)); // 4
        // System.out.println(countSubArraysSumToK(new int []{20,20,20,20}, 20)); // 4
        // System.out.println(countSubArraysSumToK(new int []{3,3,3}, 6)); // 2
        // System.out.println(countSubArraysSumToK(new int []{1}, 4)); // 0
        // System.out.println(countSubArraysSumToK(new int []{9}, 9)); // 1
        // System.out.println(countSubArraysSumToK(new int []{-1,-9,-2,-10}, -10)); // 2

        // Optimal Solution O(N) Time + Space
        System.out.println(optimalCountSubArraysSumToK(new int []{-1,1,0,-1}, 0)); // 4
        System.out.println(optimalCountSubArraysSumToK(new int []{20,20,20,20}, 20)); // 4
        System.out.println(optimalCountSubArraysSumToK(new int []{3,3,3}, 6)); // 2
        System.out.println(optimalCountSubArraysSumToK(new int []{1}, 4)); // 0
        System.out.println(optimalCountSubArraysSumToK(new int []{9}, 9)); // 1
        System.out.println(optimalCountSubArraysSumToK(new int []{-1,-9,-2,-10}, -10)); // 2
    }

    public static int countSubArraysSumToK(int[] arr, int k){
        int count = 0;
        int[] sums = new int[arr.length];
        sums[0] = arr[0];
        
        // 1) Create an array of cummulative sums
        for(int i = 1; i < sums.length; i++){
          sums[i] = arr[i] + sums[i-1];
        }
        
        // 2) For each index, i,  in the cummulative sum array
        // We check to see if the sum of all subarrays from i to j sum to k
        // by subtracting the sum at j by the sum at i - 1
        // The special case is one i = 0, then we just use sums[j] 

        // i.e: We have an array [1,2,3]
        // The cummulative sum will be [1,3,6]
        // if in the outerloop where i = 1 and, in the inner loop, j = 2
        // This indicates that we are trying to find 
        // the sum between index 1 (integer 2) and index 2 (integer 3)
        // We know that the answer 5, but how do we figure it out using the cummulative sum array?
        // According to the cummulative sum array, we see that
        // the sum at index 2 is 6
        // Logically, 6 is the sum of the entire array, and to get a **portain of that sum**
        // We need to take 6, subracts the sum that IS NOT a part of the subarray 
        // that you are looking for
        // This means 6 (or sums[2]) - 1 (sums[0] OR sums[1 - 1]) = 5
        // If K is 5, then we increment our count by 1

        for(int i = 0; i < sums.length; i++){
          for(int j = i; j < sums.length; j++){
            if(i == 0){
              if(sums[j] == k) count++;
            } else {
              if(sums[j] - sums[i - 1] == k){
                count++;
              }
            }
          }
        }
        
        return count;
    }

    public static int optimalCountSubArraysSumToK(int[] arr, int k){
        HashMap<Integer,Integer> map = new HashMap<Integer,Integer>();
        int count = 0;
        int sum = 0;
        map.put(0, 1);

        for(int i = 0; i < arr.length; i++){
          sum += arr[i];
          if(map.containsKey(sum - k)) count += map.get(sum - k);

          if(map.containsKey(sum)){
            map.put(sum, map.get(sum) + 1);
          } else {
            map.put(sum, 1);
          }
        }
        return count;
    }
}
