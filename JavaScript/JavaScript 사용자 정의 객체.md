### 😀JavaScript 사용자 정의 객체

```js
function makePerson(first, last) {
  return {
    first: first,
    last: last
  }
}
function personFullName(person) {
  return person.first + ' ' + person.last;
}
function personFullNameReversed(person) {
  return person.last + ', ' + person.first
}

var s = makePerson("Simon", "Willison");
personFullName(s); // "Simon Willison"
personFullNameReversed(s); // "Willison, Simon"
```



#### 위의 코드를 개선한 코드 1

```js
function makePerson(first, last) {
  return {
    first: first,
    last: last,
    fullName: function() {
      return this.first + ' ' + this.last;
    },
    fullNameReversed: function() {
      return this.last + ', ' + this.first;
    }
  };
}

var s = makePerson('Simon', 'Willison');
s.fullName(); // "Simon Willison"
s.fullNameReversed(); // "Willison, Simon"

// this의 문제점
var s = makePerson('Simon', 'Willison');
var fullName = s.fullName;
fullName(); // undefined undefined
```



#### 위의 코드를 개선한 코드 2

`new`키워드를 도입

새로운 빈 객체를 만든 뒤, 지정된 함수를 불러 새로운 객체를 `this`에 설정

`this`로 지정된 함수는 값을 반환하지 않고 `this`객체를 수정하기만 함

`this`객체를 호출하는 곳으로 반환하는 것은 `new` 

`new`에 의해 호출되도록 설계된 함수 : `constructor`함수 (일반적으로 첫자를 대문자로 표시)

```js
function Person(first, last) {
  this.first = first;
  this.last = last;
  this.fullName = function() {
    return this.first + ' ' + this.last;
  };
  this.fullNameReversed = function() {
    return this.last + ', ' + this.first;
  };
}
var s = new Person('Simon', 'Willison');
```



#### 위의 코드를 개선한 코드 3 (중복 내장 함수 제거)

메소드를 한 번만 만들고, `constructor `내부에 해당 메소드들을 참조하도록 할당

```js
function personFullName() {
  return this.first + ' ' + this.last;
}
function personFullNameReversed() {
  return this.last + ', ' + this.first;
}
function Person(first, last) {
  this.first = first;
  this.last = last;
  this.fullName = personFullName;
  this.fullNameReversed = personFullNameReversed;
}
```



#### 위의 코드를 개선한 코드 4 

`Person.prototype` 은 모든 `Person`인스턴스들 간에 공유되는 객체

`Person` 객체의 설정되지 않은 속성에 접근 시도할 때마다 그것의 대체용도로 `Person.prototype`에 그 속성이 존재하는 지 확인

`Person.prototype`에 할당된 모든 것은 this객체를 통해 해당 `constructor`에 속한 모든 인스턴스들 간에 사용 가능

```js
function Person(first, last) {
  this.first = first;
  this.last = last;
}
Person.prototype.fullName = function() {
  return this.first + ' ' + this.last;
};
Person.prototype.fullNameReversed = function() {
  return this.last + ', ' + this.first;
};

// 이미 존재하는 객체에 추가적인 메소드를 바로바로 추가 가능
var s = new Person("Simon", "Willison");
s.firstNameCaps(); //TypeError on line 1: s.firstNameCaps is not a function

Person.prototype.firstNameCaps = function() {
    return this.first.toUpperCase()
};
s.firstNameCaps(); // "SIMON"
```



​	`prototype`을 사용하여 String객체에 문자열 순서를 거꾸로 리턴해주는 메소드

```js
var s = "Simon";
s.reversed(); // TypeError on line 1: s.reversed is not a function

String.prototype.reversed = function() {
    var r = "";
    for (var i = this.length - 1; i >= 0; i--) {
        r += this[i];
    }
    return r;
};

s.reversed(); // nomiS

// 문자열 상수에서도 사용 가능
"This can now be reversed".reversed(); // desrever eb won nac sihT
```



`Object.prototype`의 `toString()`메소드는 객체의 디버깅에 유용

```js
var s = new Person("Simon", "Willison");
s.toString(); // [object Object]

Person.prototype.toString = function() {
  return '<Person: ' + this.fullName() + '>';
}

s.toString(); // "<Person: Simon Willison>"
```

