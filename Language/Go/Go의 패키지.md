# 패키지

코드의 모듈화, 재사용 기능 제공

패키지를 사용해서 작은 단위의 컴포넌트를 작성하고, 작은 패키지들을 활용해서 프로그램을 작성할 것을 권장

실제 프로그램 개발에 필요한 많은 패키지들을 표준 라이브러리로 제공

표준 라이브러리 패키지들은 GOROOT/pkg 안에 존재

# Main 패키지

패키지는 라이브러리로서 사용되지만, “main”이라고 명명된 패키지는 Go 컴파일러에 의해 특별하게 인식됨

패키지 명이 main인 경우, 컴파일러는 해당 패키지를 공유 라이브러리가 아닌 실행 프로그램으로 만듦

이 main 패키지 안의 main() 함수가 프로그램의 시작점, entry point가 됨

패키지를 공유 라이브러리로 만들 때, main 패키지나 main 함수 사용하면 안됨

# 패키지 import

다른 패키지를 프로그램에서 사용하기 위해서 import를 사용해서 패키지 포함시킴

Go의 표준 라이브러리인 fmt 패키지를 사용하기 위하여 import “fmt”와 같이 해당 패키지를 포함시킬 것을 선언해줌

import 후에는 다음과 같이 fmt의 Println() 함수를 호출해서 사용 가능

```go
package main
import "fmt"
func main() {
	fmt.Println("Hello")
}
```

# 패키지 스코프

패키지 내에는 함수, 구조체, 인터페이스, 메소드 등이 존재하는데 이들의 이름(Identifier)이 첫문자를 대문자로 시작하면 이것은 public으로 사용 가능

패키지 외부에서 이들을 호출하거나 사용할 수 있음

이름이 소문자로 시작하면 non-public 으로 패키지 내부에서만 사용 가능

# 패키지 init 함수와 alias

개발자가 패키지를 작성할 때, 패키지 실행 시 처음으로 호출되는 init() 함수를 작성할 수 있음. init 함수는 패키지가 로드되면서 실행되는 함수로 별도 호출 없이 자동으로 호출됨

```go
package testlib

var pop map[string]string

func init() { //패키지 로드 시 map 초기화
	pop = make([string]string)
}
```

패키지를 import 하면서 단지 그 패키지 안의 init() 함수만을 호출하고자 하는 케이스가 있음

패키지 import 시 _라는 alias를 지정

other/xlib 패키지를 호출하면서 _ alias를 지정한 예

```go
package main
import _ "other/xlib"
```

패키지 이름이 동일하지만 서로 다른 버전, 서로 다른 위치에서 로딩하고자 할 때 alias 사용
```go
import {
	mongo "other/mongo/db"
	mysql "other/mysql/db"
}
func main() {
	mondb := mongo.Get()
	mydb := mysql.Get()
}
```
