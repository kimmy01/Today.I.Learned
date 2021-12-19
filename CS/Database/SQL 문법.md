# SQL 문법

#### 기본 문법

* 데이터베이스 만들기

  ```sql
  DROP DATABASE IF EXISTS market_db; -- 만약 market_db가 존재하면 우선 삭제한다.
  CREATE DATABASE market_db;
  ```

* 테이블 만들기

  ```sql
  USE market_db;
  CREATE TABLE member -- 회원 테이블
  ( mem_id  		CHAR(8) NOT NULL PRIMARY KEY, -- 사용자 아이디(PK)
    mem_name    	VARCHAR(10) NOT NULL, -- 이름
    mem_number    INT NOT NULL,  -- 인원수
    addr	  		CHAR(2) NOT NULL, -- 지역(경기,서울,경남 식으로 2글자만입력)
    phone1		CHAR(3), -- 연락처의 국번(02, 031, 055 등)
    phone2		CHAR(8), -- 연락처의 나머지 전화번호(하이픈제외)
    height    	SMALLINT,  -- 평균 키
    debut_date	DATE  -- 데뷔 일자
  );
  CREATE TABLE buy -- 구매 테이블
  (  num 		INT AUTO_INCREMENT NOT NULL PRIMARY KEY, -- 순번(PK)
     mem_id  	CHAR(8) NOT NULL, -- 아이디(FK)
     prod_name 	CHAR(6) NOT NULL, --  제품이름
     group_name 	CHAR(4)  , -- 분류
     price     	INT  NOT NULL, -- 가격
     amount    	SMALLINT  NOT NULL, -- 수량
     FOREIGN KEY (mem_id) REFERENCES member(mem_id)
  );
  ```

  `use` market_db 데이터베이스 선택

  `auto_increment` 자동으로 숫자 입력(1, 2, 3, ... 자동 증가)

* 데이터 입력

  ```sql
  INSERT INTO member VALUES('TWC', '트와이스', 9, '서울', '02', '11111111', 167, '2015.10.19');
  INSERT INTO member VALUES('BLK', '블랙핑크', 4, '경남', '055', '22222222', 163, '2016.08.08');
  ```

  `char, varchar, date` 작은따옴표로 값 묶기

  `int` 작은따옴표 없이 넣기

* 데이터 조회

  ```sql
  SELECT * FROM member;
  SELECT * FROM buy;
  ```

* 테이블 구조 확인

  ```SQL
  DESC 테이블_이름;
  ```

  

#### SELECT문

* SELECT문 기본 형식

  ```sql
  SELECT select_expr -- 열 이름
  	[FROM table_references] -- 테이블 이름
  	[WHERE where_condition] -- 조건식
  	[GROUP BY {col_name | expr | position}] -- 열 이름
  	[HAVING where_condition] -- 조건식
  	[ORDER BY {col_name | expr | position}] -- 열 이름
  	[LIMIT {[offset,] row_count | row_count OFFSET offset}] -- 숫자
  ```

* 열 이름의 별칭

  별칭(alias)을 정할 수 있고, 열 이름 다음에 지정하고 싶은 별칭을 입력하면 됨

  별칭에 공백이 있으면 큰따옴표로 묶음

  ```sql
  SELECT addr 주소, debut_date "데뷔 일자", mem_name FROM member;
  ```

* WHERE절 사용해서 조회하기

  ```sql
  SELECT 열_이름
  	FROM 테이블_이름
  	WHERE 조건식;
  ```

  * 관계 연산자, 논리 연산자 사용

    평균 키가 162 이하인 회원 **관계 연산자**

    ```sql
    SELECT mem_id, mem_name
    FROM member
    WHERE height <= 162;
    ```

    2가지 이상 조건 만족 **논리 연산자**

    ```sql
    SELECT mem_name, height, mem_number
    FROM member
    WHERE height >= 165 AND mem_number > 6;
    ```

  * Between ~ AND

    평균 키가 163 ~ 165인 회원

    ```sql
    -- AND 사용
    SELECT mem_name, height
    FROM member
    WHERE height >= 163 AND height <= 165;
    -- BETWEEN ~ AND 사용
    SELECT mem_name, height
    FROM member
    WHERE height BETWEEN 163 AND 165
    ```

  * IN()

    문자로 표현된 데이터 중 포함되는 것 찾기

    ```sql
    -- =, OR 사용
    SELECT mem_name, addr
    FROM member
    WHERE addr = '경기' OR addr = '전남' OR addr = '경남';
    -- IN 사용
    SELECT mem_date, addr
    FROM member
    WHERE addr IN('경기', '전남', '경남');
    ```

  * LIKE

    문자열 일부 검색

    **%** 무엇이든 허용

    ```sql
    SELECT * FROM WHERE mem_name LIKE '우%';
    ```

    **_** 한 글자 매치

    ```sql
    SELECT * FROM member WHERE mem_name LIKE '__핑크';
    ```



#### 서브쿼리

* 이름이 '에이핑크'인 회원의 평균 키보다 큰 회원 검색

  ```sql
  -- 이름이 에이핑크인 회원의 평균 키
  SELECT height FROM member WHERE mem_name = '에이핑크';
  -- 위 결과보다 큰 회원 조회
  SELECT mem_name, height FROM member WHERE height > 164;
  -- 합치면?
  SELECT mem_name, height FROM member WHERE height > (SELECT height FROM member WHERE mem_name = '에이핑크');
  ```

  

#### ORDER BY, LIMIT, DISTINCT, GROUP BY, HAVING

`ORDER BY` 정렬

`LIMIT` 결과 개수 제한

`DISTINCT` 중복된 데이터 제거

`GROUP BY` 지정한 열의 데이터들을 같은 데이터끼리는 묶어서 결과 추출 (합계, 평균, 개수 등 집계함수와 함께 사용)

`HAVING` GROUP BY와 함께 사용

* ORDER BY

  ```SQL
  SELECT 열_이름
  FROM 테이블_이름
  WHERE 조건식
  GROUP BY 열_이름
  HAVING 조건식
  ORDER BY 열_이름
  LIMIT 숫자
  ```

  데뷔 일자가 빠른 순서대로 출력 (디폴트 오름차순)

  ```sql
  SELECT mem_id, mem_name, debut_date 
     FROM member 
     ORDER BY debut_date;
  ```

  데뷔 일자가 느린 순서대로 출력

  ```sql
  SELECT mem_id, mem_name, debut_date 
     FROM member 
     ORDER BY debut_date DESC;
  ```

  평균 키가 164 이상인 회원들의 키가 큰 순서대로 출력

  ```sql
  SELECT mem_id, mem_name, debut_date, height
     FROM member 
     WHERE height  >= 164
     ORDER BY height DESC;
  ```

  평균 키가 164 이상인 회원들의 키가 큰 순서대로 출력 + 키가 같으면 데뷔 일자가 빠른 순으로

  ```sql
  SELECT mem_id, mem_name, debut_date, height
     FROM member 
     WHERE height  >= 164
     ORDER BY height DESC, debut_date ASC;
  ```

* LIMIT

  회원 테이블 조회 시, 전체 중 앞의 3건만 조회

  ```sql
  SELECT * FROM member LIMIT 3;
  ```

  데뷔 일자가 빠른 회원 3건 추출(ORDER BY와 함께)

  ```sql
  SELECT mem_name, debut_date
     FROM member
     ORDER BY debut_date
     LIMIT 3;
  ```

  3번째부터 2개 출력

  ```sql
  SELECT mem_name, debut_date
     FROM member
     ORDER BY debut_date
     LIMIT 3, 2; -- LIMIT 개수 OFFSET 시작 == LIMIT 시작, 개수
  ```

* DISTINCT

  중복 데이터 1개만 남김

  ```sql
  SELECT DISTINCT addr FROM member;
  ```

* GROUP BY

  각 회원(mem_id)별로 구매한 개수(amount)를 합쳐서 출력하기 위해서 SUM() 집계함수와 GROUP BY절 사용

  GROUP BY로 회원 별로 묶은 후, SUM() 함수로 개수 합치기

  ```sql
  SELECT mem_id, SUM(amount) FROM buy GROUP BY mem_id;
  ```

  회원이 구매한 금액의 총합 출력 (가격(price)*수량(amount))

  ```SQL
  SELECT mem_id "회원 아이디", SUM(price*amount) "총 구매 금액"
     FROM buy GROUP BY mem_id;
  ```

  전체 회원이 구매한 물품 개수의 평균

  ```sql
  SELECT AVG(amount) "평균 구매 개수" FROM buy;
  ```

  각 회원이 한 번 구매 시 평균 몇 개 구매하는 지

  ```SQL
  SELECT mem_id, AVG(amount) "평균 구매 개수" 
  	FROM buy
  	GROUP BY mem_id;
  ```

  회원 테이블에서 연락처가 있는 회원 수 카운트

  ```sql
  SELECT COUNT(phone1) FROM member;
  ```

* HAVING

  회원 별 총 구매액, 총 구매액이 1000 이상인 회원에게 사은품 증정

  ```sql
  SELECT mem_id "회원 아이디", SUM(price*amount) "총 구매 금액"
     FROM buy 
     GROUP BY mem_id   
     HAVING SUM(price*amount) > 1000 ;
  ```

  총 구매액이 큰 사용자부터 표시

  ```SQL
  SELECT mem_id "회원 아이디", SUM(price*amount) "총 구매 금액"
     FROM buy 
     GROUP BY mem_id   
     HAVING SUM(price*amount) > 1000
     ORDER BY SUM(price*amount) DESC;
  ```

  

#### INSERT, UPDATE, DELETE

* INSERT

  테이블 다음에 나오는 열 이름 생략 가능, VALUES 다음에 나오는 값들의 순서, 개수를 테이블의 열 순서, 개수와 맞춰줘야 함

  ```SQL
  INSERT INTO 테이블 [(열1, 열2, 열3, ...)] VALUES (값1, 값2, 값3, ...)
  ```

  * AUTO_INCREMENT

    ```sql
    CREATE TABLE hongong2 ( 
       toy_id  INT AUTO_INCREMENT PRIMARY KEY, 
       toy_name CHAR(4), 
       age INT);
    ```

    현재 어느 숫자까지 증가했는 지 확인하는 방법

    ```sql
    SELECT LAST_INSERT_ID();
    ```

    자동 증가 시작 지정

    ```sql
    ALTER TABLE hongdong2 AUTO_INCREMENT=100;
    ```

    자동 증가 폭을 지정

    ```sql
    SET @@auto_increment_increment=3; -- 3씩 증가 (3, 6, 9, ...)
    ```

  * 다른 테이블의 데이터를 한꺼번에 입력 INSERT INTO ~ SELECT

    SELECT문의 열의 개수가 INSERT할 테이블의 열 개수와 같아야 함

    ```SQL
    INSERT INTO 테이블_이름 (열_이름1, 열_이름2, ...)
    SELECT문;
    ```

    ```sql
    -- CITY_POPUL이라는 테이블 생성
    CREATE TABLE city_popul ( city_name CHAR(35), population INT);
    -- CITY 테이블의 쿼리 결과를 입력
    INSERT INTO city_popul
        SELECT Name, Population FROM world.city;
    ```

* UPDATE

  ```SQL
  UPDATE 테이블_이름
  SET 열1=값1, 열2=값2, ...
  WHERE 조건;
  ```

  CITY_POPUL 테이블의 도시 이름 중 'Seoul'을 '서울'로 변경

  ```SQL
  UPDATE city_popul
      SET city_name = '서울'
      WHERE city_name = 'Seoul';
  ```

  CITY_POPUL 테이블에서 도시 이름 'New York'을 '뉴욕'으로 바꾸고 인구는 0으로 설정

  ```sql
  UPDATE city_popul
      SET city_name = '뉴욕', population = 0
      WHERE city_name = 'New York';
  ```

  테이블 전체 값 변경

  ```sql
  UPDATE city_popul
      SET population = population / 10000 ;
  ```

* DELETE

  ```SQL
  DELETE FROM 테이블_이름 WHERE 조건;
  ```

  CITY_POPUL 테이블에서 'New'로 시작하는 도시 삭제

  ```sql
  DELETE FROM city_popul 
      WHERE city_name LIKE 'New%';
  ```

  CITY_POPUL 테이블에서 'New'로 시작하는 도시 상위 5개 삭제

  ```sql
  DELETE FROM city_popul 
      WHERE city_name LIKE 'New%'
      LIMIT 5;
  ```

#### DELETE, DROP, TURNCATE

대용량 테이블 삭제 시 어떤 방법을 사용?

`DELETE` 테이블 값 삭제 => 오래 걸림

`DROP` 테이블 자체 삭제 => 순식간

`TURNCATE` DELETE와 같은 효과이지만 속도가 매우 빠름(테이블 구조는 남김)

#### 변수 사용

* 변수의 선언과 값 대입 (LIMIT에는 변수 사용 불가)

  ```sql
  SET @변수이름 = 변수 값;
  SELECT @변수이름;
  ```

  ```sql
  SET @myVar1 = 5;
  SET @myVar2 = 4.25;
  SELECT @myVar1; -- 5;
  SELECT @myVar1 + @myVar2; -- 9.25000000000000000000
  SET @txt = '가수 이름==> ';
  SET @height = 166;
  SELECT @txt, mem_name FROM member WHERE height > @height;
  -- 가수이름==> 소녀시대
  -- 가수이름==> 잇지
  -- 가수이름==> 트와이스
  ```

* PREPARE, EXECUTE

  `PREPARE` 실행하지 않고 SQL문만 준비함

  `EXECUTE` 여기에서 실행

  ```sql
  SET @count = 3;
  PREPARE mySQL FROM 'SELECT mem_name, height FROM member ORDER BY height LIMIT ?';
  EXECUTE mySQL USING @count; -- ?에 @count 적용
  ```

#### 데이터 형 변환

문자열 => 정수형, 정수형 => 문자열

`명시적 변환` 직접 함수 사용

`암시적 변환` 별도 지시 없이 자연스럽게 변환

* 함수 이용 명시적 변환

  내부에 올 수 있는 데이터 형식 - `CHAR` `SIGNED` `UNSIGNED` `DATE` `TIME` `DATETIME` 

  ```SQL
  CAST (값 AS 데이터_형식 [(길이)])
  CONVERT (값, 데이터_형식 [(길이)])
  ```

  구매 테이블에서 평균 가격 구하기

  ```sql
  SELECT AVG(price) AS '평균 가격' FROM buy;
  ```

  정수로 표현하기

  ```sql
  SELECT CAST(AVG(price) AS SIGNED) '평균 가격' FROM buy;
  SELECT CONVERT(AVG(price) AS SIGNED) '평균 가격' FROM buy;
  ```

  구분자를 날짜형으로 변경

  ```sql
  SELECT CAST('2022$12$12' AS DATE);
  SELECT CAST('2022/12/12' AS DATE);
  SELECT CAST('2022%12%12' AS DATE);
  SELECT CAST('2022@12@12' AS DATE);
  ```

  SQL결과를 원하는 형태로 표현(가격, 수량을 곱한 실제 구매액을 표시)

  **CONCAT** => 문자를 이어주는 역할

  ```SQL
  SELECT num, CONCAT(CAST(price AS CHAR), 'X', CAST(amount AS CHAR) ,'=' ) '가격X수량',
      price*amount '구매액' 
    FROM buy ;
  ```

* 암시적 변환

  문자 '100'과 '200' 덧셈 => 300

  ```sql
  SELECT '100' + '200'; -- 300
  ```

  문자 '100'과 '200' 연결 => '100200'

  ```sql
  SELECT CONCAT('100', '200'); -- 100200
  ```

  숫자와 문자를 CONCAT()하면?

  ```sql
  SELECT CONCAT(100, '200'); -- 100200
  SELECT 100 + '200'; -- 300
  ```

  
<한빛미디어> 우재남 저 - 혼자 공부하는 SQL 참고
