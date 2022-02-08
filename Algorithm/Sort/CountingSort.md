# 카운팅 정렬

- counting 배열에 숫자가 등장하는 횟수 저장 (숫자 - idx, 횟수 - 값)
- counting 배열 누적합으로 만들기
- result 배열에 인덱스 찾아서 값 채워 넣기

```
import java.util.*;
public class CountingSort {
    static int[] arr = {7, 2, 3, 5, 7, 1, 4, 6, 7, 5, 0, 1};
    static int[] counting = new int[8];
    static int[] result = new int[12];
    public static void main(String[] args) {
        for(int i=0; i<arr.length; i++){
            counting[arr[i]]++;
        }
        for(int i=1; i<counting.length; i++){
            counting[i] += counting[i-1];
        }
        for(int i=arr.length-1; i>=0; i--){
            int num = arr[i];
            int idx = counting[num]-1;
            result[idx] = num;
            counting[num]--;
        }
        System.out.println(Arrays.toString(result));
    }
}
```
