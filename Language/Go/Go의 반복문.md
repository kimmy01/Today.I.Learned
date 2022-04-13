1. for문
    
    Go에는 반복문에 for 하나만 있음
    
    for 초기값; 조건식; 증감식 {} 인데 여기서 경우에 따라 초기값, 조건식, 증감식 생략 가능
    
    ```go
    package main
    
    func main() {
    	sum := 0
    	for i := 1; i <= 100; i++ {
    		sum += i
    	}
    	println(sum)
    }
    ```
    
2. for문 - 조건식만 쓰는 for루프
    
    while문처럼 사용 가능한 for문
    
    ```go
    package main
    
    func main() {
    	n := 1
    	for n < 100 {
    		n *= 2
    	}
    }
    ```
    
3. for문 - 무한루프
    
    초기값, 조건식, 증감식 모두 생략
    
    ```go
    package main
    
    func main() {
    	for {
    		println("Infinite loop")
    	}
    }
    ```
    
4. for range문
    
    컬렉션으로부터 한 요소씩 가져와서 차례대로 for블럭의 문장들 실행
    
    foreach와 비슷한 사용
    
    `for 인덱스, 요소값 := range 컬렉션`
    
    range 키워드 다음의 컬렉션으로부터 하나씩 요소를 리턴해서 그 요소의 위치 인덱스와 값을 for키워드 다음의 2개의 변수에 각각 할당
    
    ```go
    names := []string{"kim", "lee", "jang"}
    for index, name := range names {
    	println(index, name)
    }
    ```
    
5. break, continue, goto문
    
    for루프 내에서 즉시 빠져나올 경우, break문 사용 (switch, select에서도 가능)
    
    나머지 문장 실행하지 않고 for루프의 시작으로 가려면 continue문 사용 (for만)
    
    기타 임의의 문장으로 이동하기 위해 goto문 사용 (for루프와 상관 없이 사용 가능)
    
    ```go
    package main
    func main() {
        var a = 1
        for a < 15 {
            if a == 5 {
                a += a
                continue // for루프 시작으로 이동
            }
            a++
            if a > 10 {
                break  //루프 빠져나옴
            }
        }
        if a == 11 {
            goto END //goto 사용
        }
        println(a)
     
    END:
        println("End")
    }
    ```
    
    break는 보통 단독 사용, 경우에 따라서 “break 레이블" 사용해서 지정된 레이블로 이동 가능. 레이블은 보통 현재 for루프를 바로 위에 적게 되는데, 현재 루프 빠져나와서 지정된 레이블로 이동하고 break문의 직속 for루프 전체의 다음 문장 실행
