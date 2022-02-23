# 위상 정렬

사이클이 없는 방향 그래프의 모든 노드를 방향성에 거스르지 않도록 순서대로 나열하는 것

예시 : 선수과목을 고려한 학습 순서 설정

자료구조 → 알고리즘

알고리즘 → 고급 알고리즘

자료구조 → 고급 알고리즘

3과목을 모두 들으려면? 자료구조 → 알고리즘 → 고급 알고리즘

- 진입 차수(Indegree) : 특정한 노드로 들어오는 간선의 개수
- 진출 차수(Outdegree) : 특정한 노드에서 나가는 간선의 개수
    
    1 → 2
    
    1 → 3
    
    2 → 3
    
    1의 진입 차수 0, 진출 차수 2
    
    2의 진입 차수 1, 진출 차수 1
    
    3의 진입 차수 2, 진출 차수 0
    

## 큐를 이용하는 위상 정렬 알고리즘의 동작 과정

1. 진입 차수가 0인 모든 노드를 큐에 넣음
2. 큐가 빌 때까지 다음 과정 반복
    1. 큐에서 원소 꺼내서 해당 노드에서 나가는 간선을 그래프에서 제거
    2. 새롭게 진입 차수가 0이 된 노드를 큐에 넣음

⇒ 각 노드가 큐에 들어온 순서가 위상 정렬을 수행한 결과와 같음

<img src="https://github.com/kimmy01/Today.I.Learned/blob/main/images/topologySort.png" width="600px">

[초기 단계] 진입 차수가 0인 모든 노드를 큐에 넣음

1. 노드 1이 큐에 삽입
2. 노드 1을 큐에서 꺼낸 뒤, 노드 1에서 나가는 간선 제거
    1. 새롭게 진입 차수가 0이 된 노드들(2, 5)을 큐에 삽입(더 작은 노드 우선으로 넣어보기)
3. 노드 2를 큐에서 거낸 뒤, 노드 2에서 나가는 간선 제거
    1. 새롭게 진입 차수가 0이 된 노드 3을 큐에 삽입
4. 노드 5를 큐에서 꺼낸 뒤, 노드 5에서 나가는 간선 제거
    1. 새롭게 진입 차수가 0이 된 노드 6을 큐에 삽입
5. 노드 3을 큐에서 꺼낸 뒤, 노드 3에서 나가는 간선 제거
6. 노드 6을 큐에서 꺼낸 뒤, 노드 6에서 나가는 간선 제거
    1. 새롭게 진입 차수가 0이 된 노드 4를 큐에 삽입
7. 노드 4를 큐에서 꺼낸 뒤, 노드 4에서 나가는 간선 제거
    1. 새롭게 진입 차수가 0이 된 노드 7을 큐에 삽입

### 위상정렬 특징

- 위상 정렬은 DAG(사이클이 없는 방향 그래프)에 대해서만 수행 가능
- 위상 정렬에서 여러 가지 답이 존재할 수 있음
    - 한 단계에서 큐에 새롭게 들어가는 원소가 2개 이상인 경우가 있으면 가능
- 모든 원소를 방문하기 전에 큐가 빈다면, 사이클이 존재한다고 판단 가능
    - 사이클에 포함된 원소 중에서 어떠한 원소도 큐에 들어가지 못함
- 스택 활용한 DFS를 이용해서 위상 정렬 수행도 가능

```java
import java.util.*;

public class Main {

    // 노드의 개수(V)와 간선의 개수(E)
    // 노드의 개수는 최대 100,000개라고 가정
    public static int v, e;
    // 모든 노드에 대한 진입차수는 0으로 초기화
    public static int[] indegree = new int[100001];
    // 각 노드에 연결된 간선 정보를 담기 위한 연결 리스트 초기화
    public static ArrayList<ArrayList<Integer>> graph = new ArrayList<ArrayList<Integer>>();

    // 위상 정렬 함수
    public static void topologySort() {
        ArrayList<Integer> result = new ArrayList<>(); // 알고리즘 수행 결과를 담을 리스트
        Queue<Integer> q = new LinkedList<>(); // 큐 라이브러리 사용

        // 처음 시작할 때는 진입차수가 0인 노드를 큐에 삽입
        for (int i = 1; i <= v; i++) {
            if (indegree[i] == 0) {
                q.offer(i);
            }
        }

        // 큐가 빌 때까지 반복
        while (!q.isEmpty()) {
            // 큐에서 원소 꺼내기
            int now = q.poll();
            result.add(now);
            // 해당 원소와 연결된 노드들의 진입차수에서 1 빼기
            for (int i = 0; i < graph.get(now).size(); i++) {
                indegree[graph.get(now).get(i)] -= 1;
                // 새롭게 진입차수가 0이 되는 노드를 큐에 삽입
                if (indegree[graph.get(now).get(i)] == 0) {
                    q.offer(graph.get(now).get(i));
                }
            }
        }

        // 위상 정렬을 수행한 결과 출력
        for (int i = 0; i < result.size(); i++) {
            System.out.print(result.get(i) + " ");
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        v = sc.nextInt();
        e = sc.nextInt();

        // 그래프 초기화
        for (int i = 0; i <= v; i++) {
            graph.add(new ArrayList<Integer>());
        }

        // 방향 그래프의 모든 간선 정보를 입력 받기
        for (int i = 0; i < e; i++) {
            int a = sc.nextInt();
            int b = sc.nextInt();
            graph.get(a).add(b); // 정점 A에서 B로 이동 가능
            // 진입 차수를 1 증가
            indegree[b] += 1;
        }

        topologySort();
    }
}
```
