# 최단경로 알고리즘

정점u와 정점v를 연결하는 경로 중 **간선들의 가중치 합이 최소가 되는 경로**를 찾는 것

- 예시
    
    <img src="https://github.com/kimmy01/Today.I.Learned/blob/main/images/dijkstra%20graph.jpg" width="500px">
    
    `정점 0` 에서 `정점 3`으로 가는 최단 경로  `0 4 1 2 3` 
    
    이 때의 비용은 `3+2+4+2 = 11` 
    
    **가중치**는 `가중치 인접 행렬`이라고 하는 2차원 배열에 저장
    
    `기존 인접 행렬` 간선이 없는 구간은 값을 `0`
    
    `가중치 인접 행렬` 간선의 가중치 자체가 0일 수도 있어서 `무한대` 사용
    
    <img src="https://github.com/kimmy01/Today.I.Learned/blob/main/images/dijkstra%20arr.jpg" width="500px">
    

### Dijkstra

하나의 시작 정점으로부터 모든 다른 정점까지의 최단 경로를 찾는 알고리즘

시작 정점에서 집합S에 있는 정점만 거쳐서 다른 정점으로 가는 최단거리를 기록하는 배열이 반드시 있어야 함

- 최단 거리 기록 1차원 배열 : `distance`
- 시작 정점 v : `distance[v] = 0`
- 가중치 인접 행렬 : `weight`
- `distance[w] = weight[v][w]`

정점v에서 정점w로 가는 직접 간선이 없을 때 ⇒ 무한대 값 저장

집합S에 있지 않은 정점 중, 가장 distance값이 작은 정점을 집합S에 추가

새로운 정점u가 S에 추가되면, S에 있지 않은 다른 정점들의 distance값 수정

시작 기준이 정점u로 바뀌었고, 새로 추가된 정점u를 거쳐서 정점까지 가는 거리와 기존 거리 비교 

`distance[w] = min(distance[w], distance[u] + weight[u][w])`
