# 인덱스

데이터를 빠르게 찾을 수 있도록 도와주는 도구

`클러스터형 인덱스` 기본 키로 지정하면 자동 생성, 테이블에 1개만 만들 수 있음. 기본 키로 지정한 열 기준으로 자동 정렬

`보조 인덱스` 고유 키로 지정하면 자동 생성, 여러 개 만들 수 있지만 자동 정렬은 안됨

* 인덱스의 문제점

  필요없는 인덱스를 만들면 데이터베이스가 차지하는 공간만 늘어나고 인덱스를 이용해서 데이터 찾는 것이 전체 테이블을 찾아 보는 것보다 느려짐

* 인덱스의 장점

  SELECT에서 즉각적인 효과를 내는 빠른 방법 (적절한 인덱스 생성, 사용)

  적은 처리량으로 요청한 결과를 빨리 얻을 수 있음 => 전체 시스템 성능 향상

* 인덱스의 단점

  인덱스가 공간을 차지해서 데이터베이스 안에 추가적인 공간 필요(테이블의 10% 정도)

  처음 인덱스 만드는 시간 소요

  SELECT가 아닌 데이터 변경 작업이 자주 일어나면 성능이 나빠질 수 있음

#### 인덱스 종류

`클러스터형 인덱스` 영어사전과 유사(내용이 이미 정렬)

`보조 인덱스` 책의 뒤에 있는 찾아보기와 유사(찾아보기에서 찾은 후 표시된 페이지로 이동)

* 자동 생성되는 인덱스

  기본 키를 지정하면 자동으로 해당 열에 `클러스터형 인덱스` 생성 => 기본 키는 테이블 당 1개니까 클러스터형 인덱스도 테이블 당 1개

  고유 키로 지정하면 자동으로 해당 열에 `보조 인덱스` 생성 => 고유 키도 여러 개 되니까 보조 인덱스도 여러 개 가능

  * 클러스터형 인덱스

    자동 정렬

  * 보조 인덱스

    데이터 순서 변경 없음. 별도로 인덱스 생성되는 것.

#### 인덱스 알고리즘

클러스터형 인덱스와 보조 인덱스 모두 내부적으로 **균형트리(Balanced Tree, B-Tree)**로 만들어짐

* 균형 트리

  데이터가 저장되는 공간을 **노드**라고 하는데, 인덱스에서는 **페이지**라고 함

  `루트노드` 최상위 노드

  `중간노드` 루트노드와 리프노드 사이에 있는 노드들

  `리프노드` 제일 마지막에 존재하는 노드

  ![트리](https://github.com/kimmy01/Today.I.Learned/blob/main/images/%ED%8A%B8%EB%A6%AC.jpg)

* FullPageScan

  MMM찾으려면 AAA~MMM까지 8건의 데이터 검색해야함

* 균형 페이지 스캔

  루트 페이지 => 리프 페이지, 5건의 데이터 검색해야함

  ![FullPageScan](https://github.com/kimmy01/Today.I.Learned/blob/main/images/%ED%92%80%ED%8E%98%EC%9D%B4%EC%A7%80%EC%8A%A4%EC%BA%94.jpg)

* 데이터 이동

  III가 새로 삽입되었을 때, JJJ보다 앞에 있어야 하기 때문에 JJJ가 이동 한 뒤에 III 들어감

  ![insert](https://github.com/kimmy01/Today.I.Learned/blob/main/images/%EB%8D%B0%EC%9D%B4%ED%84%B0%EC%82%BD%EC%9E%85.jpg)

* 페이지 분할

  GGG가 새로 삽입되면 더 이상 들어갈 공간이 없어서 새 페이지를 준비하고, 데이터들을 적절히 나눔

  ![divide](https://github.com/kimmy01/Today.I.Learned/blob/main/images/%EC%83%88%ED%8E%98%EC%9D%B4%EC%A7%80.jpg)

* 중간 페이지

  PPP와 QQQ 삽입 시, 루트 페이지에 공간 부족

  루트 페이지를 2개로 나눠서 중간 페이지로 만들고, 새로 루트 페이지 만들어서 연결

  ![middlePage](https://github.com/kimmy01/Today.I.Learned/blob/main/images/%EC%A4%91%EA%B0%84%ED%8E%98%EC%9D%B4%EC%A7%80.jpg)

* SPC 데이터 찾기

  * 클러스터형 인덱스에서 찾기

    ![cluster](https://github.com/kimmy01/Today.I.Learned/blob/main/images/cluster.jpg)

  * 보조 인덱스에서 찾기

    ![sub](https://github.com/kimmy01/Today.I.Learned/blob/main/images/sub.jpg)


<한빛미디어> 우재남 저 혼자 공부하는 SQL 참고
