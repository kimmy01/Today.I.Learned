### 😀 JavaScript의 객체

name-value 형식

**name** : JavaScript 문자열

**value**: 객체를 포함하여 아무 값 가능



```js
var obj = new Object();
var obj = {};

var obj = {
    name: "Carrot",
    "for": "Max",
    details:{
        color: "orange",
        size: 12
    }
}

obj.details.color; // orange
obj["details"]["size"]; // 12
```

객체 프로토타입 `Person` 와 프로토타입의 인스턴스 `you` 생성

```js
function Person(name, age){
    this.name = name;
    this.age = age;
}

var you = new Person('You', 25); // "You"라는 이름의 25세 사람 생성
```



```js
// dot 표기법
obj.name = "Simon";
var name = obj.name;

// bracket 표기법
obj["name"] = "Simon";
var name = obj["name"];

// key를 정의하기 위해 변수 사용 가능
var user = prompt('what is your key?')
obj[user] = prompt('what is its value?')
```



```js
obj.for = "Simon"; // 구문 오류! for가 이미 예약어이기 때문
obj["for"] = "Simon"; // 정상 동작!
```

