# LIS(Longest Increasing Subsequence)

연속/불연속 상관 없이 가장 긴 증가하는 부분 수열 구하는 알고리즘

A = {10, 20, 10, 30, 20, 50}

LIS는 {10, 20, 30, 50}

## DP (O(n^2))

dp[i] = 0~i의 증가하는 부분 수열 크기

A = {10, 20, 10, 30, 20, 50}

1. 이중 for문을 설계해서 각 수를 직접 비교해가며 증가하는 부분 수열의 크기를 카운트
   1. i : 1~n-1
   2. j : 0~i-1
2. 가장 긴 증가하는 부분 수열 LIS는 dp[i] 중 최댓값 선택해서 출력

#### A = {10, 20, 10, 30}인 배열로 시뮬레이션

1) i = 3, j = 0 일 때, 30 > 10

   dp[3] = Math.max(dp[3], dp[0]+1) = 2

2) i = 3, j = 1 일 때, 30 > 20

   dp[3] = Math.max(dp[3], dp[1]+1) = 3

3) i = 3, j = 2 일 때, 30 > 10

   dp[3] = Math.max(dp[3], dp[2]+1) = 3

```java
public class LIS {
    public static void main(String[] args) {
        int[] arr = {10, 20, 10, 30, 20, 50};
        int[] dp = new int[6];
        dp[0] = 1;
        for(int i=1; i<6; i++){
            dp[i] = 1;
            for(int j=0; j<i; j++){
                if(arr[i] > arr[j]){
                    dp[i] = Math.max(dp[i], dp[j]+1);
                }
            }
        }
        int max = -1;
        for(int i=0; i<6; i++){
            max = Math.max(max, dp[i]);
        }
        System.out.println(max);
    }
}
```



## BinarySearch (O(nlogn))

1. 새로운 숫자 num이 현재 memo[len] 값보다 크다면, 새로운 LIS 갱신 `if(num > lastNum)`

   `memo[++len] = num`

2. 새로운 숫자 num이 수열의 최솟값과 최댓값 사이에 있는 값이라면 **이진 탐색을 통해 기존 값 변경**

   1. num = 3이면, 1, 2보다는 크고 7보다는 작은 값
   2. 이진 탐색을 통해 `memo[i-1] < num <= memo[i]`인 곳을 찾아서 `memo[i] = num` 갱신

3. 모든 탐색 끝난 후 len이 해당 배열의 LIS 길이가 됨

<img src="https://github.com/kimmy01/Today.I.Learned/blob/main/images/LIS.jpg" width="1000px">

```java
import java.util.*;
import java.io.*;

public class Main1365 {
    static int N;
    static int[] arr;
    static int[] L;
    public static void main(String[] args) throws Exception {
        input();
        func();
    }
    static void func() {
        int len = 0;
        int idx = 0;
        for(int i=0; i<N; i++){
            if(arr[i] > L[len]){
                len += 1;
                L[len] = arr[i];
            }else{
                idx = binarySearch(0, len, arr[i]);
                L[idx] = arr[i];
            }
        }
        System.out.println(N-len);
    }
    static int binarySearch(int left, int right, int key){
        int mid = 0;
        while(left < right){
            mid = (left+right)/2;
            if(L[mid] < key){
                left = mid + 1;
            }else{
                right = mid;
            }
        }
        return right;
    }
    static void input() throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        N = Integer.parseInt(br.readLine());
        arr = new int[N];
        L = new int[N+1];
        StringTokenizer st = new StringTokenizer(br.readLine(), " ");
        for(int i=0; i<N; i++){
            arr[i] = Integer.parseInt(st.nextToken());
        }
    }
}
```

