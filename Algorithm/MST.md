# MST 최소 신장 트리
## 그래프에서 최소 비용 문제

- 모든 정점을 연결하는 간선들의 가중치 합이 최소가 되는 트리
- 두 정점 사이의 최소 비용 경로 찾기

### ✔️신장 트리 : n개의 정점으로 이루어진 무향 그래프에서 n개의 정점과 n-1개의 간선으로 이루어진 트리

### ✔️최소 신장 트리(Minimum Spanning Tree) : 무향 가중치 그래프에서 신장 트리를 구성하는 간선들의 가중치의 합이 최소인 신장 트리

### 💖KRUSKAL 알고리즘
#### 간선을 하나씩 선택해서 MST를 찾는 알고리즘
- 최초, 모든 간선을 가중치에 따라 **오름차순** 정렬
- 가중치가 가장 낮은 간선부터 선택하면서 트리 증가시킴
- 사이클이 존재하면 다음으로 가중치가 낮은 간선 선택
- n-1개의 간선이 선택될 때까지 두 번째 과정 반복

<img src="https://github.com/kimmy01/Today.I.Learned/blob/main/images/kruskal.png" width="500px">

```
  //pseudo-code
 MST-KRUSKAL(G, W)
	FOR vertex v in G.V //G.V : 그래프의 정점 집합
		Make_Set(v) //G.E : 그래프의 간선 집합
G.E에 포함된 간선들을 가중치 w에 의해 정렬

FOR 가중치가 가장 낮은 간선 (u, v) 부터 G.E에서 선택(n-1개)
	IF Find_Set(u) != Find_Set(v)
		A <- A 합집합 {(u, v)}
		Union(u, v)
```
```
import java.util.*;
import java.io.*;
public class Main_BOJ_1197_최소스패닝트리 {
    private static class Edge implements Comparable<Edge>{
        int a;
        int b;
        int w;
        public Edge(int a, int b, int w){
             this.a = a;
             this.b = b;
             this.w = w;
        }
				//가중치 기준으로 오름차순 정렬
        @Override
        public int compareTo(Edge o) {
            return this.w - o.w;
        }
    }
    static int V, E;
    static int[] parent, weight;
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine(), " ");
        V = Integer.parseInt(st.nextToken());
        E = Integer.parseInt(st.nextToken());
        parent = new int[V+1];
        weight = new int[V+1];
        for(int i=1; i<=V; i++){
            parent[i] = i;
        }
				//간선 정보 담을 우선순위 큐
        PriorityQueue<Edge> pq = new PriorityQueue<>();
        for(int i=0; i<E; i++){
            st = new StringTokenizer(br.readLine(), " ");
            int a = Integer.parseInt(st.nextToken());
            int b = Integer.parseInt(st.nextToken());
            int w = Integer.parseInt(st.nextToken());
            pq.add(new Edge(a, b, w));
        }
				//간선을 연결하는 두 정점이 갖는 부모값이 다르면 union
				//union 해 주면 최종 값에 가중치 더하기
        int answer = 0;
        while(!pq.isEmpty()){
            if(find(pq.peek().a)!=find(pq.peek().b)){
                union(pq.peek().a, pq.peek().b);
                answer += pq.peek().w;
            }
            pq.poll();
        }
        System.out.println(answer);
    }
    static void union(int a, int b){
        a = find(a);
        b = find(b);
        if(a<b){
            parent[b] = a;
        }else{
            parent[a] = b;
        }
    }
    static int find(int a){
        if(a == parent[a]) return a;
        return parent[a] = find(parent[a]);
    }
}
```

### 💖PRIM 알고리즘
#### 하나의 정점에서 연결된 간선들 중에 하나씩 선택하면서 MST를 만들어 가는 방식
- 임의 정점을 하나 선택해서 시작
- 선택한 정점과 인접하는 정점들 중의 최소 비용의 간선이 존재하는 정점 선택
- 모든 정점이 선택될 때까지 1, 2 반복

#### 서로소인 2개의 집합 정보를 유지
- 트리 정점들 : MST를 만들기 위해 선택된 정점들
- 비트리 정점들 : 선택되지 않은 정점들

<img src="https://github.com/kimmy01/Today.I.Learned/blob/main/images/prim.png" width="1000px">

```
  //pseudo-code
 MST_PRIM(G, r) //G: 그래프, r: 시작 정점
	result <- 0, cnt <- 0 //result: 최소비용, cnt: 처리한 정점 수, visited[]: 최소 신장 트리 구성에 포함된 정점 여부
	FOR u in G.V
		minEdge[u] <- INF //minEdge[]: 각 정점 기준으로 다른 정점과의 간선 중 최소비용
	minEdge[r] <- 0 //시작 정점 r의 최소비용 0 처리
WHILE true
	u <- Extract_MIN() //방문하지 않은(최소신장트리에 포함되지 않은 정점) 최소 비용 정점 찾기
	visited[u] <- true //방문처리
	result <- result + minEdge[u]; //비용 누적
	if(++cnt==N) break; //모든 정점이 다 연결되었으면 최소신장트리 완성
	FOR v in G.Adj[u] //u의 인접 정점들
		if visited[v] == false && w(u, v) < minEdge[v] //u에서 v로의 비용이 v의 최소비용보다 작다면 갱신
			minEdge[v] <- w(u, v)
	return result
end MST_PRIM
```
