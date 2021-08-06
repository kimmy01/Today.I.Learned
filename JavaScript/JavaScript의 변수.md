### 😀JavaScript의 변수

#### let

​	블록 유효 범위 변수 선언 가능

​	**변수가 포함된 함수 블록**에서 사용 가능

```js
let a;
let name = 'Simon';

// apple은 여기에서 보이지 않음
for(let apple = 0; apple < 5; apple++){
    // apple은 여기에서 유효함
}
// apple은 여기에서 보이지 않음
```



#### const

​	변경되지 않는 변수를 선언할 수 있음

​	**변수가 선언된 함수 블록**에서 사용 가능

```js
const Pi = 3.14; // 변수 Pi 선언
Pi = 1; // 상수로 설정된 변수는 변경할 수 없어서 에러!
```



#### var

​	가장 일반적인 변수 선언 키워드

​	`let`, `const`가 갖는 제한을 `var`는 갖지 않음

​	**변수가 선언된 함수 블록**에서 사용 가능

```js
var a;
var name = 'Simon';

// apple은 여기에서 사용 가능
for(var apple = 0; apple < 5; apple++){
    // apple은 함수 전체에서 사용 가능
}
// apple은 여기에서 사용 가능
```

​	자바스크립트는 자바나 다른 언어와 달리 블록에 범위가 없고 함수에만 범위가 있음

​	`let`, `const` 선언을 사용하면 블록 범위 변수를 만들 수 있음



