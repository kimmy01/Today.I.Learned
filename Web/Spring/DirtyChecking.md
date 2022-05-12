### Dirty Checking = 변경 감지

JPA는 수정과 관련된 메소드 제공하지 않음

JPA를 사용해서 데이터를 수정하려면? **Entity를 조회해서 조회된 Entity 데이터를 변경하면 DB에 자동으로 반영되도록 하는 기능이 바로 Dirty Checking!**

JPA는 영속성 컨텍스트에 Entity를 보관할 때의 최초 상태를 저장 (스냅샷)

영속성 컨텍스트가 `flush` 될 때 스냅샷과 Entity의 현재 상태를 비교해서 달라진 Entity 찾아냄

이후 변경된 필드들 이용해서 쓰기 지연 SQL 저장소에 Update 쿼리 생성해서 쌓아둠

모든 작업 끝난 후 트랜잭션 커밋하면 이때 쓰기 지연 SQL 저장소에 있는 쿼리들을 DB에 전달해서 Update 진행

따라서 영속성 컨텍스트가 관리하는 영속 상태인 Entity들만 Dirty Checking이 가능

비영속이거나 준영속 상태인 Entity의 경우 Dirty Checking이 되지 않아 Entity를 변경해도 DB에는 적용되지 않음
