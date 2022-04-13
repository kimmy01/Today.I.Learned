1. if문
    
    조건 부분을 ()괄호로 둘러싸지 않아도 됨
    
    조건 블럭의 시작 {을 if문과 같은 라인에 두어야 함
    
    ```go
    if k == 1 { //같은 라인
    	println("One")
    }
    ```
    
    if 조건식 사용하기 전에 optional statement를 함께 실행할 수 있음
    
    ```go
    if val := i*2; val < max {
    	println(val)
    }
    val++ //스코프 벗어나서 에러
    ```
    
2. switch문
    
    switch문 뒤에 하나의 변수, 표현을 지정하고
    
    case문에 해당 변수가 가질 수 있는 값들을 지정하여 각 경우에 다른 문장 블럭들을 실행할 수 있음
    
    ```go
    package main
    
    func main() {
    	var name string
    	var category = 1
    
    	switch category {
    	case 1:
    		name = "paper book"
    	case 2:
    		name = "ebook"
    	case 3:
    		name = "blog"
    	default:
    		name = "other"
    	}
    	println(name)
    	switch x := category << 2; x - 1 {
    		...
    	}
    }
    ```
    
    - switch 뒤에 expression이 없을 수 있음 - 다른 언어는 switch 키워드 뒤에 변수나 표현을 반드시 두지만 Go는 없어도 됨. 이 경우에는 switch expression을 true로 생각하고 첫번째 case문으로 이동해서 검사
        
        ```go
        func grade(score int) {
        	switch {
            case score >= 90:
                println("A")
            case score >= 80:
                println("B")
            case score >= 70:
                println("C")
            case score >= 60:
                println("D")
            default:
                println("No Hope")
            }
        }
        ```
        
    - case문에 expression을 쓸 수 있음 - 다른 언어의 case문은 일반적으로 리터럴 값만 갖지만, Go는 case문에 복잡한 expression을 가질 수 있음
    - no default fall through - 다른 언어의 case문은 break를 쓰지 않으면 다음 case로 이동하지만, Go는 다음 case로 가지 않음(자동으로 컴파일러가 case문의 마지막에 break 추가하기 때문)
        
        다른 언어처럼 계속 다음 case문을 실행하고 싶으면, fallthrough 문을 추가
        
        ```go
        package main
         
        import "fmt"
         
        func main() {
            check(2)
        }
         
        func check(val int) {
            switch val {
            case 1:
                fmt.Println("1 이하")
                fallthrough
            case 2:
                fmt.Println("2 이하")
                fallthrough
            case 3:
                fmt.Println("3 이하")
                fallthrough
            default:
                fmt.Println("default 도달")
            }
        }
        ```
        
    - type switch - 다른 언어의 switch는 일반적으로 변수 값 기준으로 case를 분기하지만, Go는 그 변수의 Type에 따라 분기 가능
