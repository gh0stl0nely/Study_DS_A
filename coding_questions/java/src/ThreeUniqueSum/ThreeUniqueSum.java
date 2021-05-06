package ThreeUniqueSum;

import java.util.*;

class ThreeUniqueSum {

  public static void main(String[] args) {
    System.out.println(threeSum(new int[]{9,8,7,6,5,4,3,1,-4,-2}));
    System.out.println(threeSum(new int[] { -2, 0, 3, 4, 6, 1 }));
    System.out.println(threeSum(new int[] { 0, 0, 0}));
    System.out.println(threeSum(new int[]{1,2}));
  }

  public static List<List<Integer>> threeSum(int[] A) {
     HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();
     Set<List<Integer>> result = new HashSet<List<Integer>>();
  
    if (A.length < 2)
      return new ArrayList<List<Integer>>();

    for (int i = 0; i < A.length; i++) {
      if (!map.containsKey(A[i])) {
        map.put(A[i], i);
      }
    }

    for (int i = 0; i < A.length - 1; i++) {
      int currI = A[i];
      for (int j = i + 1; j < A.length; j++) {
        int currJ = A[j];
        int complement = 0 - (currI) - (currJ);
        if (isCombinationPossible(complement, i, j, map)) {
          List<Integer> list = groupByDescending(currI, currJ, complement);
          result.add(list);
        }
      }
    }

    List<List<Integer>> real = new ArrayList<List<Integer>>();

    for (List<Integer> list : result) {
      real.add(list);
    }

    return real;
  }

  private static boolean isCombinationPossible(int complement, int i1, int i2, HashMap<Integer,Integer> map) {
    return map.containsKey(complement) && map.get(complement) != i1 && map.get(complement) != i2;
  }

  private static List<Integer> groupByDescending(int num1, int num2, int num3) {
    List<Integer> result = new ArrayList<Integer>();
    int largest = Math.max(num1, Math.max(num2, num3));
    int smallest = Math.min(num1, Math.min(num2, num3));
    int mid = (num1 + num2 + num3) - (largest + smallest);
    result.add(smallest);
    result.add(mid);
    result.add(largest);

    return result;

  }
}