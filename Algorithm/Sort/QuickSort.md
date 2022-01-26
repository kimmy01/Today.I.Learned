# QuickSort

- 오름차순 기준 정렬
- 찰스 안토니 리처드 호어가 개발
- **불안정 정렬**, 다른 원소와의 비교만으로 정렬 수행하는 **비교 정렬**
- 분할 정복 알고리즘의 한 가지로, 평균적으로 **매우 빠른 수행 속도**를 자랑
    - 합병 정렬과 달리 퀵 정렬은 리스트를 **비균등**하게 분할
- 분할 정복 방법
    - 문제를 작은 2개의 문제로 분리하고 각각을 해결한 다음, 결과를 모아서 원래의 문제를 해결하는 전략
    - 분할 정복 방법은 대개 순환 호출을 이용해서 구현
- 과정 설명
    - 리스트 안에 있는 한 요소 선택, 이렇게 고른 원소를 **피벗**이라고 함
    - 피벗 기준, 피벗보다 작은 요소들은 모두 피벗의 왼쪽으로 옮기고, 피벗보다 큰 요소들은 모두 피벗의 오른쪽으로 옮김
    - 피벗 제외한 왼쪽 리스트와 오른쪽 리스트 다시 정렬
        - 분할된 부분 리스트에 대해서 **순환 호출**을 이용해서 정렬 반복
        - 부분 리스트에서도 다시 피벗 정하고, 피벗 기준으로 2개의 부분 리스트로 나누는 과정 반복
    - 부분 리스트들이 더이상 분할이 불가능할 때까지 반복
        - 리스트의 크기가 0이나 1이 될 때까지 반복

### 구체적인 개념

- 하나의 리스트를 피벗을 기준으로 두 개의 비균등한 크기로 분할하고 분할된 부분 리스트를 정렬한 다음, 두 개의 정렬된 부분 리스트를 합쳐서 전체가 정렬된 리스트가 되게 하는 방법
- 퀵정렬 단계
    - **분할** : 입력 배열을 피벗 기준으로 비균등하게 2개의 부분 배열로 분할
    - **정복** : 부분 배열을 정렬, 부분 배열의 크기가 충분히 작지 않으면 **순환 호출**을 이용해서 다시 분할 정복 방법 적용
    - **결합** : 정렬된 부분 배열들을 하나의 배열에 합병
    - 순환 호출이 한 번 진행될 때마다 최소한 하나의 피벗은 최종적으로 위치가 정해지므로, 이 알고리즘은 반드시 끝난다는 것 보장 가능

<img src="https://github.com/kimmy01/Today.I.Learned/blob/main/images/QuickSort1.jpg">
<img src="https://github.com/kimmy01/Today.I.Learned/blob/main/images/QuickSort2.jpg" width="500px">
                                                                                                  
- 피벗 값을 입력 리스트의 첫 번째 데이터로 정함
- 2개의 인덱스 변수(`low`, `high`)를 이용해서 리스트 두 개를 부분 리스트로 나눔
- 1회전 : 피벗이 5인 경우
    - `low`는 왼쪽에서 오른쪽으로 탐색하다가 피벗보다 큰 데이터 찾으면 멈춤
    - `high` 는 오른쪽에서 왼쪽으로 탐색하다가 피벗보다 작은 데이터 찾으면 멈춤
    - `low` 와 `high` 가 가리키는 두 데이터 서로 교환
    - `low`와 `high`가 엇갈릴 때까지 반복
- 2회전: 피벗이 1인 경우
- 3회전: 피벗이 9인 경우
                                                                                                  
### 퀵 정렬의 장점

- 속도가 빠름
    - 시간 복잡도가 O(nlog2n)를 가지는 다른 정렬 알고리즘과 비교했을 때도 가장 빠름
- 추가 메모리 공간이 필요하지 않음
    - 퀵 정렬은 O(logn)만큼의 메모리를 필요로 함

### 퀵 정렬의 단점

- 정렬된 리스트에 대해서는 퀵 정렬의 불균형 분할에 의해 오히려 수행시간이 더 많이 걸림

퀵 정렬의 불균형 분할을 방지하기 위해서 피벗을 선택할 때 더욱 리스트를 균등하게 분할 할 수 있는 데이터 선택 (리스트 내 몇 개 데이터 중 크기순으로 중간값을 피벗으로 선택)

### 퀵 정렬의 시간 복잡도

- 최선의 경우
    - 비교 횟수
        - 순환 호출 깊이
            - 레코드 개수 n이 2의 거듭제곱이라고 가정, n = 2^3일 때 2^3 → 2^2 → 2^1 → 2^0 순으로 줄어들어서 순환 호출 깊이가 3임을 알 수 있음
            - 일반화 ⇒ **n = 2^k의 경우 k(k = log2n)**
        - 각 순환 호출 단계의 비교 연산
            - 각 순환 호출에서 전체 리스트의 대부분의 레코드를 비교해야 하므로 평균 n번 정도 비교
            - ⇒ **n번**
        - 순환 호출 깊이 * 각 순환 호출 단계 비교 연산 ⇒ **nlog2n**
    - 이동 횟수
        - 비교 횟수보다 적어서 무시 가능
    
    T(n) = O(nlog2n)
    
- 최악의 경우
    
    리스트가 계속 불균형하게 나누어지는 경우(이미 정렬된 리스트에 대해 퀵 정렬을 실행하는 경우)
    
    - 비교 횟수
        - 순환 호출 깊이
            - 레코드 개수 n이 2의 거듭제곱일 때, **n**
        - 각 순환 호출 단계의 비교 연산
            - 각 순환 호출에 대해서는 전체 리스트의 대부분의 레코드를 비교해야 하므로 **평균 n번**
        - 순환 호출 깊이 * 각 순환 호출 단계 비교 연산 ⇒ O(n^2)
    - 이동 횟수
        - 비교 횟수보다 적으므로 무시 가능
    
    T(n) = O(n^2)
    
- 평균
    
    T(n) = O(nlog2n)
    
    한 번 결정된 피벗들이 추후 연산에서 제외되는 특성으로 가장 빠름                                                                                                  