`Stack`은 한 쪽 끝에서만 자료를 넣거나 뺄 수 있는 선형 구조로 데이터를 저장하는 형식을 말한다.

`LIFO (Last In First Out)`

---

## 예시 문제

주어진 N(2≤N≤100)개의 수를 순서대로 Stack에 넣은 후 하나씩 꺼내서 화면에 출력하시오

### 입력
```
2 // TC 개수
5 // 데이터 크기
1 2 3 4 5
5
5 4 2 3 1
```

### 출력
```
#1 5 4 3 2 1
#2 1 3 2 4 5
```

---

## 레퍼런스 코드

### 스택 라이브러리 사용

```java
import java.util.*;
import java.io.*;

public class Solution {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int T = stoi(br.readLine()); // TC 개수
		for(int t=1; t<=T; t++) {
			int N = stoi(br.readLine()); // 데이터 크기
			StringTokenizer st = new StringTokenizer(br.readLine(), " "); // 데이터 입력
			Stack<Integer> stack = new Stack<>(); // 스택 생성
			for(int j=0; j<N; j++) {
				stack.push(stoi(st.nextToken()));
			} //스택에 삽입
			System.out.print("#"+t+" ");
			while(!stack.isEmpty()) {
				System.out.print(stack.pop()+" ");
			}
			System.out.println(); //출력
		}
	}

	public static int stoi(String s) {
		return Integer.parseInt(s);
	}
}
```

### 배열로 스택 구현

```java
import java.util.*;
import java.io.*;

public class Solution {
	
	static final int MAX_N = 100;
	static int top;
	static int[] stack = new int[MAX_N];

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int T = stoi(br.readLine());
		for(int t=1; t<=T; t++) {
			int N = stoi(br.readLine());
			StringTokenizer st = new StringTokenizer(br.readLine(), " ");
			
			stackInit();
			
			for(int i=0; i<N; i++) {
				int value = stoi(st.nextToken());
				stackPush(value);
			}
			
			System.out.print("#"+t+" ");
			
			while(!stackIsEmpty()) {
				Integer value = stackPop();
				if(value != null) {
					System.out.print(value.intValue()+" ");
				}
			}
			System.out.println();
		}
	}

	public static int stoi(String s) {
		return Integer.parseInt(s);
	}
	
	static void stackInit() {
		top = 0;
	}
	
	static boolean stackIsEmpty() {
		return (top == 0);
	}
	
	static boolean stackIsFull() {
		return (top == MAX_N);
	}
	
	static boolean stackPush(int value) {
		if(stackIsFull()) {
			System.out.println("stack overflow!");
			return false;
		}
		stack[top] = value;
		top++;
		return true;
	}
	
	static Integer stackPop() {
		if(top == 0) {
			System.out.println("stack is empty!");
			return null;
		}
		top--;
		Integer value = new Integer(stack[top]);
		return value;
	}
}
```
