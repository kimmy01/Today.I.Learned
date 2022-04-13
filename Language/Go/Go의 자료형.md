# Data type

1. 부울린 타입
    
    bool
    
2. 문자열 타입
    
    string : 한 번 생성되면 수정될 수 없는 Immutable 타입
    
3. 정수형 타입
    
    int int8 int16 int32 int64
    
    uint uint8 uint16 uint32 uint64 uintptr
    
4. Float 및 복소수 타입
    
    float32 float 64 complex64 complex128
    
5. 기타 타입
    
    byte : uint8과 동일, 바이트 코드에 사용
    
    rune : int32와 동일, 유니코드 코드포인트에 사용
    

# 문자열

백틱, “” 으로 표현 가능

**백틱**으로 둘러싸인 문자열은 Raw String Literal이라고 함. 별도로 해석되지 않고 Raw String 그 자체의 값 가짐. 문자열 내에 \n 있어도 개행으로 해석되지 않음. 복수 라인 문자열 표현 시 자주 사용

**“”**으로 둘러싸인 문자열은 Interpreted String Literal이라고 함. 복수 라인에 걸쳐 쓸 수 있으며 인용부호 안의 Escape 문자열들은 특별한 의미로 해석. 문자열 내에 \n 있으면 개행으로 해석됨. 문자열을 여러 라인에 걸쳐서 쓰기 위해서는 + 연산자를 이용해서 결합하여 사용

```go
package main

import "fmt"

func main() {
	rawLiteral := `가나다\n라마바사`
	interLiteral := "가나다\n" +
									"라마바사"
	fmt.Println(rawLiteral)
	fmt.Println()
	fmt.Println(interLiteral)
}
//출력
가나다\n라마바사

가나다
라마바사
```

# 자료형 변환

T(v)와 같이 표현

T는 변환하고자 하는 타입 표시

v는 변환될 값 지정

정수 100을 float로 변환 ⇒ float32(100)

문자열을 바이트배열로 변환 ⇒ []byte(”ABC”)

int에서 uint로 변환 시, 암묵적 변환을 해주지 않기 때문에 런타임 에러 발생하지 않기 위해 반드시 uint(123)처럼 변환 명시적으로 지정해주어야 함
