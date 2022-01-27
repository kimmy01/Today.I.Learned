**Call By Value** 함수의 인자를 전달할 때, ‘값’을 전달 - `java`

**Call By Reference** 함수의 인자를 전달할 때, ‘주소’를 전달 - `C++`

### 메소드 A에서 메소드 B로 int 변수를 전달하는 경우

```java
void methodA() {
	int a = 10;
	int b = 5;
	System.out.println("Before Call MethodB : " + a + "," + b);
	methodB(a, b);
	System.out.println("After Call MethodB : " + a + "," + b);
}
void methodB(int a, int b) {
	a = 20;
	b = 10;
	System.out.println("MethodB : " + a + "," + b);
}

// Before Call MethodB : 10, 5
// MethodB : 20, 10
// After Call MethodB : 10, 5
```

### Reference Type을 전달하는 경우

```java
//String Type
void methodA() {
	String a = "AAA";
	String b = "BBB";
	System.out.println("Before Call MethodB : " + a + "," + b);
	methodB(a, b);
	System.out.println("After Call MethodB : " + a + "," + b);
}
void methodB(String a, String b) {
	a = "aaa";
	b = "bbb";
	System.out.println("MethodB : " + a + "," + b);
}

// Before Call MethodB : "AAA", "BBB"
// MethodB : "aaa", "bbb"
// After Call MethodB : "AAA", "BBB"
```

```java
class Person{
	int age;
	String name;
	public Person(int age, String name) {
		this.age = age;
		this.name = name;
	}
}
void methodA() {
	Person person = new Person(25, "AAA");
	System.out.println("Before Call MethodB : " + person.age + ", " + person.name);
	methodB(person);
	System.out.println("After Call MethodB : " + person.age + ", " + person.name);
}
void methodB(Person person) {
	person.age = 30;
	person.name = "BBB";
	System.out.println("MethodB : " + person.age + ", " + person.name);
}

// Before Call MethodB : 25, "AAA"
// MethodB : 30, "BBB"
// After Call MethodB : 30, "BBB"
```

### Reference Type 동작 원리 때문에 위와 같은 결과가 나옴!

Call By Value 방식 수행 시, 값을 넘겨받는 메소드에서 **값을 복사해서 새로운 지역 변수에 저장**

이 때, **MethodB**는 MethodA의 변수를 사용한 것이 아니라, **자신이 새롭게 생성한 지역 변수에 MethodA의 변수 이름과 변수 값을 복사해서 사용**

MethodB에서 a와 b의 값을 바꿔도 MethodA의 a, b에게 영향을 끼칠 수 없음

a, b는 이름만 같고 다른 주소를 가지는 별개이기 때문

**Reference Type이 다른 결과를 낳는 이유는?**

**Heap Memory 영역에 생성된 객체의 주소값을 참조하기 때문!**

MethodA에서 MethodB로 넘겨준 것은 Person의 주소값

MethodB에서 MethodA와 동일한 주소값을 갖고 이 객체의 상태를 수정하면, 동일한 주소를 참조하기 때문에 위와 같은 결과가 나오는 것!

MethodB에서 new 키워드를 사용해서 새로운 객체를 생성하고 이 주소를 참조하게 한다면?

```java
void MethodB(Person person) {
	person = new Person(22, "BBB");
	System.out.println("MethodB : " + person.age + ", " + person.name);
}
// Before Call MethodB : 25, "AAA"
// MethodB : 22, "BBB"
// After Call MethodB : 25, "AAA"
```
