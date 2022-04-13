# 메소드

Go 메소드는 특별한 형태의 func 함수

메소드는 함수 정의에서 func 키워드와 함수명 사이에 ‘그 함수가 어떤 struct를 위한 메소드인지'를 표시하게 됨

receiver로 불리는 이 부분은 메소드가 속한 struct 타입과 struct 변수명을 지정, struct 변수명은 함수 내에서 마치 입력 파라미터처럼 사용됨

```go
package main
 
//Rect - struct 정의
type Rect struct {
    width, height int
}
 
//Rect의 area() 메소드
func (r Rect) area() int {
    return r.width * r.height   
}
 
func main() {
    rect := Rect{10, 20}
    area := rect.area() //메서드 호출
    println(area)
}
```

# Value receiver vs 포인터 receiver

Value receiver는 struct의 데이터를 복사해서 전달, 메소드 내 struct의 필드 값이 변경되더라도 호출자의 데이터는 변경되지 않음

포인터 receiver는 메소드 내의 필드 값 변경이 그대로 호출자에서 반영됨

Rect.area() 메소드는 Value receiver를 표현한 것 ⇒ area() 메소드 내에서 width나 height가 변경되어도 main() 함수의 rect 구조체의 필드 값에는 변화가 없음

포인터 receiver로 변경한다면 main() 함수의 rect 구조체의 필드 값이 변경됨

```go
func (r *Rect) area2() int {
	r.width++
	return r.width * r.height
}
func main() {
	rect := Rect(10, 20)
	area := rect.area2() //메소드 호출
	println(rect.width, area) //11 220
}
```
