# JOIN

#### 내부 조인

그냥 조인 == 내부 조인

두 테이블 조인을 위해서는 **일대다 관계**로 매핑되어야 함(주로 PK와 FK로 맺어짐)

```SQL
SELECT <열 목록>
FROM <첫 번째 테이블>
INNER JOIN <두 번째 테이블>
ON <조인 조건>
[WHERE 검색 조건];
```

구매 테이블에서 GRL이라는 아이디 가진 사람이 구매한 물건 발송하기 위해 이름/주소/연락처 검색

```sql
SELECT * FROM buy INNER JOIN member ON buy.mem_id = member.mem_id WHERE buy.mem_id = 'GRL';
```

조인해서 원하는 열만 선택해서 보여주기

```sql
SELECT buy.mem_id, mem_name, prod_name, addr, CONCAT(phone1, phone2) AS '연락처' 
   FROM buy
     INNER JOIN member
     ON buy.mem_id = member.mem_id;
```

별칭 사용해서 표현하기

```sql
SELECT B.mem_id, M.mem_name, B.prod_name, M.addr, 
        CONCAT(M.phone1, M.phone2) AS '연락처' 
   FROM buy B
     INNER JOIN member M
     ON B.mem_id = M.mem_id;
```

중복된 결과 1개만 출력, 구매 기록이 있는 회원의 정보 출력

```sql
SELECT DISTINCT M.mem_id, M.mem_name, M.addr -- 멤버 아이디로 중복 제거
   FROM buy B
     INNER JOIN member M
     ON B.mem_id = M.mem_id
   ORDER BY M.mem_id;
```

#### 외부 조인

한 쪽에만 데이터가 있어도 결과 출력

```
SELECT <열 목록>
FROM <첫 번째 테이블(LEFT)>
<LEFT | RIGHT | FULL> OUTER JOIN <두 번째 테이블(RIGHT)>
ON <조인 조건>
[WHERE 검색 조건];
```

구매 기록이 없는 회원의 정보도 전부 출력 (LEFT OUTER JOIN == 왼쪽 테이블 내용은 전부 출력!)

```sql
SELECT M.mem_id, M.mem_name, B.prod_name, M.addr
   FROM member M
     LEFT OUTER JOIN buy B
     ON M.mem_id = B.mem_id
   ORDER BY M.mem_id;
```

회원 가입만 하고 한 번도 구매한 적이 없는 회원 목록 출력

```sql
SELECT DISTINCT M.mem_id, B.prod_name, M.mem_name, M.addr
   FROM member M
     LEFT OUTER JOIN buy B
     ON M.mem_id = B.mem_id
   WHERE B.prod_name IS NULL
   ORDER BY M.mem_id;
```

<한빛미디어> 우재남 저 혼자 공부하는 SQL 참고
