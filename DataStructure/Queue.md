`Queue`는 컴퓨터의 기본적이 자료구조의 한 가지로, 먼저 집어 넣은 데이터가 먼저 나오는 `FIFO(First In First Out)` 구조로 저장하는 형식을 말한다.

---

## 예시 문제

주어진 N(2≤N≤100)개의 수를 순서대로 Queue에 넣은 후 하나씩 꺼내서 화면에 출력하시오.

### 입력

```
2 // TC 개수
5 // 데이터 크기
1 2 3 4 5
5
5 4 2 3 1
```

---

## 레퍼런스 코드

### 큐 라이브러리 사용

```java
import java.util.*;
import java.io.*;

public class Solution {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int T = stoi(br.readLine());
		for(int t=1; t<=T; t++) {
			int N = stoi(br.readLine());
			StringTokenizer st = new StringTokenizer(br.readLine(), " ");
			
			Queue<Integer> queue = new LinkedList<>();
			
			for(int i=0; i<N; i++) {
				queue.add(stoi(st.nextToken()));
			}
			
			System.out.print("#"+t+" ");
			while(!queue.isEmpty()) {
				System.out.print(queue.poll()+" ");
			}
			System.out.println();
		}
	}

	public static int stoi(String s) {
		return Integer.parseInt(s);
	}
}
```

### 배열로 큐 구현

```java
import java.util.*;
import java.io.*;

public class Solution {
	
	static final int MAX_N = 100;
	static int front;
	static int rear;
	static int[] queue = new int[MAX_N];

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int T = stoi(br.readLine());
		for(int t=1; t<=T; t++) {
			int N = stoi(br.readLine());
			StringTokenizer st = new StringTokenizer(br.readLine(), " ");
			
			queueInit();
			
			for(int i=0; i<N; i++) {
				int value = stoi(st.nextToken());
				queueEnqueue(value);
			}
			
			System.out.print("#"+t+" ");
			while(!queueIsEmpty()) {
				Integer value = queueDequeue();
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
	
	public static void queueInit() {
		front = 0;
		rear = 0;
	}
	
	static boolean queueIsEmpty() {
		return (front == rear);
	}
	
	static boolean queueIsFull() {
		if ((rear+1) % MAX_N == front) {
			return true;
		}else {
			return false;
		}
	}
	
	static boolean queueEnqueue(int value) {
		if(queueIsFull()) {
			System.out.println("queue is full");
			return false;
		}
		queue[rear] = value;
		rear++;
		if(rear == MAX_N) {
			rear = 0;
		}
		return true;
	}
	
	static Integer queueDequeue() {
		if(queueIsEmpty()) {
			System.out.println("queue is empty");
			return null;
		}
		Integer value = new Integer(queue[front]);
		front++;
		if(front == MAX_N) {
			front = 0;
		}
		return value;
	}
}
```
