```java
public class MemberRepository{
	
	public void save(Member member) {}
	public Member findOne(Long id) {}
	public List<Member> findAll() {}

	public Member findByUsername(String username) {}

}

public class ItemRepository{

	public void save(Item item) {}
	public Member findOne(Long id) {}
	public List<Member> findAll() {}

}
```

### CRUD가 반복되는 형태 ⇒ 개발자는 인터페이스만 작성하고, Spring Data JPA가 구현 객체를 동적으로 생성해서 주입

```java
public interface MemberRepository extends JpaRepository<Member, Long> {
	Member findByUsername(String username);
}

public interface ItemRepository extends JpaRepository<Item, Long> {
	//비어있음
}
```

![Untitled](https://github.com/kimmy01/Today.I.Learned/blob/main/images/springdatajpa.png)

### 공통 인터페이스 기능

JpaRepository 인터페이스 : 공통 CRUD 제공

제네릭 : <엔티티, 식별자> 설정

```java
public interface MemberRepository extends JpaRepository<Member, Long> {
	//비어있음
}
```

### 메소드 이름으로 쿼리 생성

메소드 이름만으로 `JPQL` 쿼리 생성

```java
public interface MemberRepository extends JpaRepository<Member, Long> {
	List<Member> findByName(String username);
}
```

메소드 사용 코드

```java
List<Member> member = memberRepository.findByName("hello");
```

실행된 SQL

```sql
SELECT * FROM MEMBER M WHERE M.NAME = 'hello';
```

### 이름으로 검색 + 정렬

```java
public interface MemberRepository extends JpaRepository<Member, Long> {
	List<Member> findByName(String username, Sort sort);
}
```

```sql
SELECT * FROM MEMBER M WHERE M.NAME = 'hello'
ORDER BY AGE DESC;
```

### 이름으로 검색 + 정렬 + 페이징

```java
public interface MemberRepository extends JpaRepository<Member, Long> {
	Page<Member> findByName(String username, Pageable pageable);
}
```

```sql
--- 데이터 조회
SELECT * 
FROM 
	(SELECT ROW_.*, ROWNUM ROWNUM_ 
	FROM 
	(SELECT M.* FROM MEMBER M WHERE M.NAME = 'hello' 
	ORDER BY M.NAME) ROW_ 
	WHERE ROWNUM <= ? ) 
WHERE ROWNUM_ > ?

--- 전체 수 조회
SELECT COUNT(1)
FROM MEMBER M WHERE M.NAME = 'hello';
```

사용 코드

```java
Pageable page = new PageRequest(1, 20, new Sort ...);
Page<Member> result = memberRepository.findByName("hello", page);

int total = result.getTotalElement(); //전체 수
List<Member> members = result.getContent(); //데이터
```

### @Query, JPQL 정의

```java
public interface MemberRepository extends JpaRepository<Member, Long> {
	@Query("select m from Member m where m.username = ?1")
	Member findByUsername(String username, Pageable pageable);
}
```

### Web페이징과 정렬 기능

컨트롤러에서 페이징 처리 객체를 바로 받을 수 있음

page : 현재 페이지

size : 한 페이지에서 노출할 데이터 건수

sort : 정렬 조건

```java
/members?page=0&size=20&sort=name,desc

@RequestMapping(value = "/members", method = RequestMethod.GET)
String List(Pageable pageable, Model model) {}
```

### Web 도메인 클래스 컨버터 기능

컨트롤러에서 식별자로 도메인 클래스 찾음

```java
/members/100
@RequestMapping("/members/{memberId}")
Member member(@PathVariable("memberId") Member member) {
	return member;
}
```
