# 함수

여러 문장 묶어서 실행하는 코드 블럭 단위

`func` 키워드 사용해서 정의

func 뒤에 함수명 적고 괄호 () 안에 함수에 전달하는 파라미터 적음

리턴 타입은 파라미터 괄호 () 뒤에 적음

함수는 패키지 안에 정의되며 호출되는 함수가 호출하는 함수의 반드시 앞에 올 필요는 없음

```go
package main
func main() {
	msg := "Hello"
	say(msg)
}
func say(msg string) {
	println(msg)
}
```

# Pass by reference

Go에서 파라미터 전달 방법

1. Pass by value
    
    전달되는 파라미터의 값이 복사되어 전달됨
    
    함수 내에서 값이 바뀌어도 호출함수 main()에서의 변수에는 변함이 없음
    
2. Pass by reference
    
    &변수를 하면 변수의 주소를 표시하게 됨 (포인터)
    
    함수에 값을 복사하는 것이 아니라 해당 변수의 주소를 전달하게 됨
    
    ```go
    package main
    func main() {
    	msg := "Hello"
    	say(&msg)
    	println(msg) //변경된 메시지로 출력
    }
    func say(msg *string) { //*string : 파라미터가 포인터임
    	println(*msg)
    	*msg = "Changed" //메시지 변경, dereferencing
    }
    ```
    

# Variadic Function(가변인자 함수)

함수에 고정된 수의 파라미터들을 전달하지 않고 다양한 숫자의 파라미터를 전달하고자 할 때 가변 파라미터를 나타내는 `...` 를 사용

```go
package main
func main() {
	say("This", "is", "a", "book")
	say("Hi")
}
func say(msg ...string) {
	for _, s := range msg {
		println(s)
	}
}
```

# 함수 리턴값

리턴값이 없을 수도, 하나일 수도, 여러 개일 수도 있음

Named Return Parameter라는 기능도 제공 (리턴되는 값들을 (함수에 정의된) 리턴 파라미터들에 할당할 수 있는 기능)

리턴 값이 있으면 func 문의 파라미터 괄호 다음, 마지막에 리턴 값의 타입 정의, return 사용

```go
package main

func main() {
	total := sum(1, 3, 5, 7, 9)
	println(total)
}

func sum(nums ...int) int {
	s := 0
	for _, n := range nums {
		s += n
	}
	return s
}
```

```go
package main
 
func main() {
    count, total := sum(1, 7, 3, 5, 9)
    println(count, total)   
}
 
func sum(nums ...int) (int, int) {
    s := 0      // 합계
    count := 0  // 요소 갯수
    for _, n := range nums {
        s += n
        count++
    }
    return count, s
}
```

```go
func sum(nums ...int) (count int, total int) { //Named Return Parameter
    for _, n := range nums {
        total += n
    }
    count = len(nums)
    return
}
//리턴 파라미터명과 타입 함께 정의한 것, 함수 내에서 리턴 파라미터에 직접 값 할당
//실제로 아무 것도 리턴하지 않더라도 리턴되는 값이 있다면 빈 return을 써줘야 함
```
