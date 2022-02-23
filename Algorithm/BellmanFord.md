### 벨만 포드 최단 경로 알고리즘

음의 가중치를 갖는 경우 다익스트라가 아닌 벨만 포드 사용!

1. 출발 노드 설정
2. 최단 거리 테이블 초기화
3. 다음 과정을 N-1번 반복
    1. 전체 간선 E개를 하나씩 확인
    2. 각 간선 거쳐서 다른 노드로 가는 비용 계산하여 최단 거리 테이블 갱신

⇒ 음수 간선 사이클이 발생하는지 체크하고 싶으면 3번 과정 1번 더 하기

여기서 최단 거리 테이블이 갱신되면 음수 간선 순환이 존재하는 것

### 다익스트라

- 매번 방문하지 않은 노드 중, 최단 거리가 가장 짧은 노드 선택
- 음수 간선 없으면 최적 해 찾을 수 있음

### 벨만 포드

- 매번 모든 간선 전부 확인
    - 다익스트라 알고리즘에서의 최적 해를 항상 포함
- 다익스트라 알고리즘에 비해서 시간 오래 걸리지만 음수 간선 순환 탐지 가능

```java
import java.util.*;

public class BellmanFord {
	public static final int INF = Integer.MAX_VALUE;
	public static void main(String[] args){
		int num = 5;
		int[][] adj = new int[][]{
			{0, -4, 5, 2, 3},
			{INF, 0, INF, -1, INF},
			{INF, INF, 0, -7, INF},
      {INF, INF, INF, 0, 6},
      {INF, INF, INF, -4, 0},
		};
		int src = 0;
		int dst = 1;
		solve(num, adj, src, dst);
	}
	public static void solve(int num, int[][] adj, int src, int dst){
		int[] distance = new int[num];
		Arrays.fill(distance, INF);
		distance[src] = 0;
		for(int v=0; v<num; v++){
			for(int w=0; w<num; w++){
				if(adj[v][w] != INF){
					distance[w] = Math.min(distance[w], distance[v]+adj[v][w]);
				}
			}
		}
		for(int i=0; i<num; i++){
			System.out.println(distance[i]);	
		}
	}
}
```
