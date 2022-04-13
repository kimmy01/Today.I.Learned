Go에서 변수와 상수는 함수 밖에서도 사용 가능

# 변수

키워드 `var` 사용해서 선언

`var` 키워드 뒤에 변수명 작성, 그 뒤에 변수타입 작성

변수 선언문에서 변수 초기값 할당 가능

```go
var a int //int변수 선언
var f float32 = 11. //float변수 선언 및 초기화
a = 10 //선언만 하고 나중에 할당 가능
```

선언된 변수가 프로그램 내에서 사용되지 않으면 에러 발생 ⇒ 사용되지 않는 변수는 삭제!

```go
var i, j, k int = 1, 2, 3 //동일한 타입의 복수 변수 생성, 초기화(순서대로)
```

변수 선언하면서 초기값 지정하지 않으면 기본적으로 Zero Value 할당

숫자형 - 0, bool형 - flase, string형 - “”(빈문자열)

할당되는 값을 보고 그 타입을 추론하는 기능 자주 사용됨

`:=` 이라는 Short Assignment Statement를 사용하여 변수 선언할 수도 있음(함수 내에서만)

```go
//둘은 같은 의미
var i = 1
i := 1
```

# 상수

상수는  `const`를 사용해서 선언

`const`키워드 뒤에 상수명 작성, 그 뒤에 상수타입, 상수값 할당

```go
const c int = 10
const s string = "Hi"
const c = 10 //타입 추론 int
const s = "Hi" //타입 추론 string
const (
	Visa = "Visa"
	Master = "Master"
	Amex = "American Express"
) //상수 묶어서 지정 가능
const (
	Apple = iota //0
	Grape        //1
	Orange       //2
) //상수값을 0부터 순차적으로 부여하기 위해 iota라는 identifier 사용 가능
```

# Go keyword

break case chan const continue default defer else fallthrough for func go goto if import interface map package range return select struct switch type var
