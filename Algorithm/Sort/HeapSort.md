# HeapSort

- 내림차순 정렬

### Heap

- 완전 이진 트리
- 우선 순위 큐를 위해 만들어진 자료구조
- 최댓값, 최솟값 쉽게 찾을 수 있음

<img src="https://github.com/kimmy01/Today.I.Learned/blob/main/images/HeapSort1.jpg" width="500px">
<img src="https://github.com/kimmy01/Today.I.Learned/blob/main/images/HeapSort2.jpg" width="500px">

### 힙 정렬

- 최대 힙 트리나 최소 힙 트리를 구성해서 정렬 구현하는 방법
- 내림 차순 정렬을 위해서는 최대힙
- 오름 차순 정렬을 위해서는 최소힙
- 과정
    - 정렬해야 할 n개의 요소들로 최대힙(완전 이진 트리)를 만듦
        - 내림차순
    - 그 다음으로 한 번에 하나씩 요소를 힙에서 꺼내서 배열의 뒤부터 저장
    - 삭제되는 요소들(최댓값부터)은 값이 감소하는 순서로 정렬

### 내림차순 정렬 위한 최대힙 구현

- 1차원 배열로 쉽게 구현 가능
- 정렬해야 할 n개의 요소를 1차원 배열에 기억한 후, 최대 힙 삽입을 통해 차례대로 삽입
- 최대 힙으로 구성된 배열에서 최댓값부터 삭제
#### 최대힙의 삽입
      1. 힙에 새로운 요소 들어오면 일단 새로운 노드를 힙의 마지막 노드에 이어서 삽입
      2. 새로운 노드를 부모 노드들과 교환해서 힙의 성질 만족시킴
<img src="https://github.com/kimmy01/Today.I.Learned/blob/main/images/HeapSort3.jpg" width="500px">
<img src="https://github.com/kimmy01/Today.I.Learned/blob/main/images/HeapSort4.jpg">
<img src="https://github.com/kimmy01/Today.I.Learned/blob/main/images/HeapSort6.jpg">

#### 최대힙의 삭제
      1. 최대 힙에서 최댓값은 루트노드 ⇒ 루트 노드 삭제
        (최대 힙에서 삭제 연산 == 최댓값을 가진 요소 삭제)
      2. 삭제된 루트 노드에는 힙의 마지막 노드 가져옴
      3. 힙 재구성
<img src="https://github.com/kimmy01/Today.I.Learned/blob/main/images/HeapSort5.jpg">

### 힙 정렬의 장점

- 시간 복잡도가 좋은 편
- 힙 정렬이 가장 유용한 경우: 전체 자료를 정렬하는 것이 아니라 **가장 큰 값 몇 개만 필요할 때**

### 힙 정렬의 시간 복잡도

- 힙 트리의 전체 높이가 log2n(완전 이진 트리)이므로 하나의 요소를 힙에 삽입하거나 삭제할 때 힙을 재정비하는 시간이 log2n만큼 소요
- 요소의 개수가 n개이므로 전체적으로 O(nlog2n)만큼 걸림

T(n) = O(nlog2n)
