# 익명함수

함수 이름을 갖지 않는 함수

그 함수 전체를 변수에 할당하거나 다른 함수의 파라미터에 직접 정의되어 사용

main() 함수 안에서 익명함수가 선언되어 sum이라는 변수에 할당되고 있음

```go
package main

func main() {
	sum := func(n ...int) int { //익명함수 정의
		s := 0
		for _, i := range n {
			s += i
		}
		return s
	}
	result := sum(1, 2, 3, 4, 5) //변수명으로 함수 호출
	println(result)
}
```

# 일급함수

Go 기본타입과 동일하게 취급, 다른 함수의 파라미터로 전달하거나 다른 함수의 리턴값으로 사용될 수 있음

함수의 입력 파라미터나 리턴 파라미터로서 함수 자체가 사용될 수 있음

함수를 다른 함수의 파라미터로 전달하기 위해서는 

1. 익명함수를 변수에 할당한 후 이 변수를 전달하는 방법
2. 직접 다른 함수 호출 파라미터에 함수를 적는 방법

이 있음

```go
package main
 
func main() {
    //변수 add 에 익명함수 할당
    add := func(i int, j int) int {
        return i + j
    }
 
    // add 함수 전달
    r1 := calc(add, 10, 20)
    println(r1)
 
    // 직접 첫번째 파라미터에 익명함수를 정의함
    r2 := calc(func(x int, y int) int { return x - y }, 10, 20)
    println(r2)
 
}
 
func calc(f func(int, int) int, a int, b int) int {
    result := f(a, b)
    return result
}
```

# type문 사용한 함수 원형 정의

구조체(struct), 인터페이스 등 Custom Type, User Defined Type을 정의하기 위해 사용

함수 원형을 정의하는 데 사용도 가능

```go
//원형 정의
type calculator func(int, int) int

//calculator 원형 사용
func calc(f calculator, a int, b int) int {
	result := f(a, b)
	return result
}
```

함수 원형을 정의하고 함수를 타 메소드에 전달하고 리턴 받는 기능을 ‘Delegate’라고 부름
