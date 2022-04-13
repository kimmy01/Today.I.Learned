# 인터페이스

**구조체**가 **필드**들의 집합체라면, **interface**는 **메소드**들의 집합체

interface는 타입(type)이 구현해야 하는 메소드 원형(prototype)들을 정의

하나의 사용자 정의 타입이 interface를 구현하기 위해서는 단순히 그 인터페이스가 갖는 모든 메소드들을 구현하면 됨

```go
type Shape interface {
	area() float64
	perimeter() float64
}
```

# 인터페이스 구현

인터페이스 구현하기 위해서는 해당 타입이 그 인터페이스의 메소드들을 모두 구현하면 됨

Shape 인터페이스를 구현하기 위해서는 area(), perimeter() 2개의 메소드만 구현하면 됨

Rect와 Circle이라는 2개의 타입이 있을 때, Shape 인터페이스 구현하기 위해서 아래와 같이 각 타입 별로 2개의 메소드 구현하며 됨

```go
//Rect 정의
type Rect struct {
    width, height float64
}
 
//Circle 정의
type Circle struct {
    radius float64
}
 
//Rect 타입에 대한 Shape 인터페이스 구현 
func (r Rect) area() float64 { return r.width * r.height }
func (r Rect) perimeter() float64 {
     return 2 * (r.width + r.height)
}
 
//Circle 타입에 대한 Shape 인터페이스 구현 
func (c Circle) area() float64 { 
    return math.Pi * c.radius * c.radius
}
func (c Circle) perimeter() float64 { 
    return 2 * math.Pi * c.radius
}
```

# 인터페이스 사용

함수가 파라미터로 인터페이스를 받아들이는 경우

함수 파라미터가 interface인 경우, 어떤 타입이든 해당 인터페이스를 구현하기만 하면 모두 입력 파라미터로 사용될 수 있다는 것을 의미

showArea() 함수는 Shape 인터페이스들을 파라미터로 받아들이고 있는데, 따라서 Rect와 Circle 처럼 Shape 인터페이스를 구현한 타입 객체들을 파라미터로 받을 수 있음

showArea() 함수 내에서 해당 인터페이스가 가진 메소드, 즉 area 또는 perimeter()를 사용할 수 있음

```go
func main() {
    r := Rect{10., 20.}
    c := Circle{10}
 
    showArea(r, c)
}
 
func showArea(shapes ...Shape) {
    for _, s := range shapes {
        a := s.area() //인터페이스 메서드 호출
        println(a)
    }
}
```

# 인터페이스 타입

빈 인터페이스 ⇒ 인터페이스 타입이라고도 불림

여러 표준 패키지들의 Prototype을 보면, 빈 interface가 자주 등장함

메소드를 전혀 갖지 않는 빈 인터페이스

빈 인터페이스는 어떠한 타입도 담을 수 있는 컨테이너라고 볼 수 있음

Dynamic Type이라고 볼 수 있음 (Java의 Object)

```go
func Marshal (v interface{}) ([]byte, error);
func Println (a ...interface{}) (n int, err error);
```

```go
package main
import "fmt"

func main() {
	var x interface{}
	x = 1
	x = "Tom"
	printIt(x)
}
func printIt(v interface{}) {
	fmt.Println(v) //Tom
}
```

# Type Assertion

인터페이스 타입의 x와 타입 T에 대해 x.(T)라고 표현했을 때, x가 nil이 아니며, x는 T 타입에 속한다는 점을 확인하는 것으로 ⇒ Type Assertion이라고 부름

x가 nil 이거나 x의 타입이 T가 아니라면 런타임 에러가 발생할 것

x가 T 타입인 경우는 T 타입의 x를 리턴

아래 예제의 j는 a.(int)로부터 int형 변수 j가 됨
```go
func main() {
	var a interface{} = 1
	i := a //a, i는 dynamic type 값 1
	j := a.(int) //j는 int 타입, 값은 1
	println(i) //포인터주소 출력
	println(j) //1 출력
}
```
