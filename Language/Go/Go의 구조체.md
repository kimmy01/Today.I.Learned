# Struct

Go에서 struct는 Custom Data Type을 표현하는 데 사용됨

Go의 struct는 필드들의 집합체, 필드들의 컨테이너

필드 데이터만 가지며, 메소드를 갖지 않음

Go는 객체지향 프로그래밍을 고유의 방식으로 지원함

전통적인 OOP 언어가 갖는 클래스, 객체, 상속 개념이 없음

전통적인 OOP의 클래스(class)는 Go 언어에서 Custom 타입을 정의하는 struct로 표현됨

메소드는 별도로 분리해서 정의

# Struct 선언

struct 정의하기 위해서 Custom Type 정의할 때 사용하는 type문 사용

name과 age 필드를 갖는 person이라고 하는 struct를 정의하기 위해서는 아래와 같은 type문을 사용할 수 있음

이 person 구조체를 패키지 외부에서 사용할 수 있게 하려면 struct명을 Person으로 변경하면 됨

```go
package main
 
import "fmt"
 
// struct 정의
type person struct {
    name string
    age  int
}
 
func main() {
    // person 객체 생성
    p := person{}
    // 필드값 설정
    p.name = "Lee"
    p.age = 10
    fmt.Println(p)
}
```

# Struct 객체 생성

선언된 struct 타입으로부터 객체를 생성하는 방법

1. {}를 통해 빈 객체를 먼저 할당하고 나중에 그 필드 값을 채워 넣는 방법
    
    struct 필드를 액세스하기 위해서는 . 을 사용
    
2. 객체를 생성할 때 초기값을 함께 할당하는 방법
    
    struct 필드값을 순서대로 {} 안에 넣을 수 있고, 순서에 상관 없이 필드명을 지정해서 그 값을 넣을 수도 있음 (필드명 지정하는 경우 일부 필드 생략되었을 때, 생략된 필드들은 zero value를 가짐)
    
3. Go 내장 함수 new() 사용 가능
    
    new() 사용하면 모든 필드를 Zero value로 초기ㅘ하고 person 객체의 포인터(*person)을 리턴
    
    객체 포인터인 경우에도 필드 액세스 시, .을 사용하는데 이 때 포인터는 자동으로 Dereference 됨
    

```go
var p1 person
p1 = person{"Bob", 20}
p2 := person{name: "Sean", age: 50}
```

Go 에서 struct는 기본적으로 mutable 개체로서 필드값이 변화할 경우 해당 개체 메모리에서 직접 변경됨

struct 개체를 다른 함수의 파라미터로 넘긴다면, Pass by value에 따라 객체를 복사해서 전달

Pass by reference로 struct를 전달하고자 한다면 struct의 포인터를 전달해야 함

# 생성자 함수

구조체 필드가 사용 전에 초기화되어야 하는 경우가 있음

struct의 필드가 map 타입인 경우 map을 사전에 미리 초기화 해 두면, 외부 struct 사용자가 매번 map을 초기화 해야 된다는 것을 기억할 필요가 없음

이러한 목적을 위해 생성자 함수를 사용할 수 있음

생성자 함수는 struct를 리턴하는 함수로 그 함수 본문에서 필요한 필드를 초기화

```go
package main

type dict struct {
	data map[int]string
}

func newDict() *dict { //생성자 함수 정의
	d := dict{}
	d.data = map[int]string{}
	return &d //포인터 전달
}

func main() {
	dic := newDict() //생성자 호출
	dic.data[1] = "A"
}
```
