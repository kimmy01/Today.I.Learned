# 배열

연속적인 메모리 공간에 동일한 타입의 데이터를 순차적으로 저장하는 자료구조

배열의 첫번째 요소는 0번, 그 다음은 1번, ... 

`var 변수명 [배열 크기] 데이터 타입` 과 같이 선언 (배열 크기를 데이터 타입 앞에 써줌)

배열 크기는 Type을 구성하는 한 요소로서, [3]int 와 [5]int는 서로 다른 타입으로 인식

배열 선언 후 각 배열의 요소를 인덱스를 사용해서 읽거나 쓸 수 있음

```go
package main

func main() {
	var a [3] int
	a[0] = 1
	a[1] = 2
	a[2] = 3
	println(a[1])
}
```

# 배열 초기화

배열 정의 시 초기값 설정 가능

배열을 초기화할 때 배열 크기 생략해도 입력된 요소 숫자만큼 배열 크기 정해짐

```go
var a1 = [3] int {1, 2, 3}
var a3 = [...] int {1, 2, 3} //배열 크기 자동으로 3으로 정함
```

# 다차원 배열

다차원 배열, 배열 크기 부분을 복수 개로 설정해서 선언

```go
var multi [3][4][5] int //정의
multi[0][1][2] = 10 //사용
```

# 다차원 배열 초기화
```go
func main() {
	var a = [2][3] int {
		{1, 2, 3},
		{4, 5, 6}, //끝에 콤마!
	}
	println(a[1][2])
}
```

# 슬라이스

내부적으로 배열에 기초해서 만들어졌지만, 배열과 달리 고정된 크기를 미리 지정하지 않을 수 있고, 차후 그 크기를 동적으로 변경할 수도 있고, 부분 배열을 발췌할 수도 있음

배열과 달리 크기는 지정하지 않음

```go
package main
import "fmt"

func main() {
	var a [] int //슬라이스 변수 선언
	a = [] int {1, 2, 3}
	a[1] = 10
	fmt.println(a) //[1, 10, 3]
}
```

Go 내장함수 `make()`를 사용할 수도 있음

`make()` 함수로 슬라이스 생성하면 개발자가 슬라이스의 길이(Length), 용량(Capacity)을 임의로 지정할 수 있음

Capacity 파라미터를 생략하면 Length와 같은 값을 가짐

슬라이스의 길이, 용량은 `len()` 와 `cap()`을 사용해서 확인 가능

```go
func main() {
	s := make([]int, 5, 10)
	println(len(s), cap(s)) // len 5 cap 10
}
```

슬라이스에 별도의 길이, 용량을 지정하지 않으면 기본적으로 길이와 용량이 0인 슬라이스 만듦

Nil Slice라고 함, Nil과 비교하면 true 리턴

```go
func main() {
	var s []int
	if s == nil {
		println("Nil Slice")
	}
	println(len(s), cap(s)) //모두 0
}
```

# 부분 슬라이스

슬라이스에서 일부 발췌해서 부분 슬라이스 만들 수 있음

슬라이스[처음인덱스:마지막인덱스+1] 형식으로 만들 수 있음

```go
package main
import "fmt"

func main() {
	s := [] int {0, 1, 2, 3, 4, 5}
	s = s[2:5]
	fmt.Println(s) //2, 3, 4
}
```

# 슬라이스 추가, 병합, 복사

새로운 요소 추가 ⇒ `append(슬라이스 객체, 추가할 값)` 사용 

여러 개 추가하려고 하면 두번째 파라미터 뒤에 계속 값 추가 가능

```go
func main() {
	s := [] int {0, 1}
	s = append(s, 2)
	s = append(s, 3, 4, 5)
	fmt.Println(s) //0, 1, 2, 3, 4, 5
}
```

슬라이스 용량(capacity)이 아직 남은 경우, 그 용량 내에서 슬라이스 길이(length)를 변경하여 데이터를 추가하고, 용량(capacity)을 초과하는 경우 현재 용량의 2배에 해당하는 새로운 Underlying array를 생성하고 기존 배열 값들을 모두 새 배열에 복제한 다음 다시 슬라이스 할당

```go
package main
import "fmt"
func main() {
	sliceA := make([]int, 0, 3) //길이 0, 용량 3
	for i := 1, i <= 15; i++ { 
		sliceA = append(sliceA, i) //1개씩 계속 추가
		fmt.Println(len(sliceA), cap(sliceA)) //슬라이스 길이, 용량 확인
	}
	fmt.Println(sliceA) // 1부터 15까지 출력
}
```

1~3 : 기존의 용량 3 사용

4~6 : 용량 6 사용

7~12 : 용량 12 사용

13~15 : 용량 24 사용

한 슬라이스를 다른 슬라이스 뒤에 병합하려면, 다음 예제와 같이 append() 사용

이 append() 함수에서는 2개의 슬라이스를 파라미터로 가짐

첫번째 슬라이스 뒤에 두번째 슬라이스 추가

두번째 슬라이스 뒤에 ... 붙임 ⇒ 해당 슬라이스의 컬렉션을 표현하는 것으로 두번째 슬라이스의 모든 요소들의 집합을 나타냄

```go
package main
import "fmt"
func main() {
	sliceA := [] int {1, 2, 3}
	sliceB := [] int {4, 5, 6}
	sliceA = append(sliceA, sliceB...)
	fmt.Println(sliceA) //1 2 3 4 5 6
}
```

한 슬라이스를 다른 슬라이스로 복사 ⇒ `copy(타겟 슬라이스, 복사할 슬라이스)`

슬라이스는 실제 배열을 가리키는 포인터 정보만 가짐, 복사를 더 정확히 표현하면 소스 슬라이스가 갖는 배열의 데이터를 타겟 슬라이스가 갖는 배열로 복제하는 것

```go
func main() {
	source := [] int {0, 1, 2}
	target := make([]int, len(source), cap(source)*2)
	copy(target, source)
	fmt.Println(target) // [0 1 2 ] 출력
	println(len(target), cap(target)) //3, 6 출력
}
```

# 슬라이스 내부 구조

내부적으로 사용하는 배열의 부분 영역인 세그먼트에 대한 메타 정보 가짐

크게 3개의 필드로 구성되어 있음

1. 내부적으로 사용하는 배열에 대한 포인터 정보
2. 세그먼트의 길이
3. 세그먼트의 최대 용량(capacity)

처음 슬라이스가 생성될 때 만약 길이와 용량이 지정되었다면, 내부적으로 용량(capacity)만큼의 배열을 생성하고, 슬라이스 첫번째 필드에 그 배열의 첫 메모리 위치를 지정

두번째 길이 필드는 지정된 첫 배열요소로부터의 길이를 가짐, 세번째 용량 필드는 전체 배열 크기를 가짐

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f53ff561-e47d-47e2-89c9-beb01ca3ac1d/Untitled.png)

부분 슬라이스 s[2:5]를 하게 되면 슬라이스의 내부 데이터는?

s[2:5]는 인덱스 2부터 인덱스 4까지 배열 요소 가리킴

슬라이스 s의 배열포인터는 세번째 배열 요소인 2를 가리키고, 길이는 3, 용량은 4를 가짐

# Map

key에 대응하는 value를 빠르게 찾는 해시테이블을 구현한 자료구조

`map[key타입]value타입` 으로 선언

```go
var idMap map[int]string //int타입의 키, string타입의 value를 갖는 맵
```

reference타입이라서 nil 값을 가지며, Nil Map이라고 부름

Nil Map에는 어떤 데이터를 쓸 수 없어서 map을 초기화 하기 위해 make() 함수를 사용

```go
idMap = make(map[int]string)
```

make() 함수의 첫번째 파라미터로 map 키워드와 [key타입]value타입을 지정

make() 함수는 해시테이블 자료구조를 메모리에 생성하고 그 메모리를 가리키는 map value를 리턴 (map value : 내부적으로 runtime.hmap 구조체를 가리키는 포인터)

idMap 변수는 이 해시테이블을 가리키는 map을 가리키게 됨

map은 make() 함수를 써서 초기화 할 수도 있지만 리터럴 사용해서 초기화 가능

```go
literalMap := map[string]string{
	"GOOG" : "Google Inc",
	"MSFT" : "Microsoft",
	"FB" : "FaceBook",
}
```

# Map 사용 방법

처음 map이 make() 함수에 의해 초기화 되었을 때는 아무 데이터가 없는 상태

`map변수[키] = 값` 과 같이 해당 키에 그 값 할당하면 됨

```go
package main

func main() {
	var m map[int]string
	
	m = make(map[int]string)
	m[901] = "Apple"
	m[134] = "Grape"
	m[777] = "Tomato"
	
	str := m[134]
	println(str) //Grape

	noData := m[999] //값 없으면 nil 또는 zero 리턴
	println(noData)

	delete(m, 777) //삭제
}
```

# Map 키 체크

map 안에 특정 키가 존재하는 지 체크할 필요가 있음

`map변수[키]` 읽기를 수행하면 2개의 리턴값 리턴

1. 키에 상응하는 값
2. 키가 존재하는 지 아닌지 나타내는 bool 값

```go
package main
 
func main() {
    literalMap := map[string]string{
        "GOOG": "Google Inc",
        "MSFT": "Microsoft",
        "FB":   "FaceBook",
        "AMZN": "Amazon",
    }
 
    // map 키 체크
    val, exists := tickers["MSFT"]
    if !exists {
        println("No MSFT ticker")
    }
}
```

# For loop Map

for range 루프 사용해서 Map이 가진 모든 요소 출력 가능
```go
package main
 
import "fmt"
 
func main() {
    myMap := map[string]string{
        "A": "Apple",
        "B": "Banana",
        "C": "Charlie",
    }
 
    // for range 문을 사용하여 모든 맵 요소 출력
    // Map은 unordered 이므로 순서는 무작위
    for key, val := range myMap {
        fmt.Println(key, val)
    }
}
```
    
