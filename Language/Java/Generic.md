# Generic

일반적인 코드를 작성하고, 이 코드를 다양한 타입의 객체에 대해 재사용하는 기법

클래스에서 사용할 타입을 클래스 외부에서 설정하는 것

Java 1.5부터 추가, Java Collection에서 많이 사용

```java
List<String> stringList = new ArrayList<>();
List<Object> objectList = new ArrayList<>();
```

ArrayList 기능은 같지만 리스트에 담는 내용물이 다름!

```java
class Test<T>{
	private T t;
	public void set(T t){
		this.t = t;
	}
	public T get(){
		return t;
	}
}
```

```java
public static void main(String[] args) {
	Test<String> test = new Test();
	test.set("test");
	System.out.println(test.get());
}
```

### Interface Generic이 2개 필요할 때

<T1, T2> 이렇게 사용

### Method Generic

Class에 Generic Type 선언하지 않고, 각 메소드마다 Generic Type 선언해서 사용

메소드의 파라미터에 T가 선언되어 있으면 ReturnType 앞에 <T> 선언

```java
class TestMethod {
	public static <T> List<T> method(List<T> list, T item){
		list.add(item);
		return list;
	}
}
```

### WildCard Generic Type

`<?>` : 모든 객체 자료형, 내부적으로는 Object로 인식

`<? super 객체형>` : 명시된 객체자료형의 상위 객체, 내부적으로는 Object로 인식

`<? extends 객체자료형>` : 명시된 객체자료형을 상속한 하위 객체, 내부적으로는 객체 자료형으로 인식

```java
class TestWildCard {
      
    public List<? extends Object> wildMethod1() {
           return new ArrayList<Long>();
    }
 
    public <T> List<? extends String> wildMethod12 (T t) {
           return new ArrayList<String>();
    }
 
    public List<?> method3() {
           return new ArrayList<>();
    }
}
```

### Generic Type 주의사항

1. 전역변수 생성 불가
2. 인스턴스 생성 불가

`E` Element

`K` Key

`N` Number

`T` Type

`V` Value

Generic 타입이 인스턴스화 될 때 컴파일러는 타입 파라미터와 관련된 정보 제거

Generic 사용하기 이전의 라이브러 등과 호완성 유지 위함
