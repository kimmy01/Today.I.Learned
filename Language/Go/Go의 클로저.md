함수를 클로저로서 사용 가능

클로저는 함수 바깥에 있는 변수를 참조하는 함수값을 말함

밖에 있는 변수를 마치 함수 안으로 끌어들인 것처럼 그 변수 읽거나 쓸 수 있음

```go
package main
 
func nextValue() func() int { //int를 리턴하는 익명함수를 리턴하는 함수
    i := 0
    return func() int {
        i++ //익명함수가 함수 밖에 있는 변수 i를 참조하고 있음
        return i
    }
}
 
func main() {
    next := nextValue() //클로저 함수를 next라는 변수에 할당
		//next()를 3번 호출 => 클로저 함수 내의 i는 계속 증가한 값을 가짐
    println(next())  // 1
    println(next())  // 2
    println(next())  // 3
 
    anotherNext := nextValue() //새로운 클로저 함수값을 생성, 다시 0부터 시작
    println(anotherNext()) // 1 다시 시작
    println(anotherNext()) // 2
}
```
