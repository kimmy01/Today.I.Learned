### ☺JavaScript의 문자열과 그 외 타입

##### 문자열의 길이

```javascript
'hello'.length; // 5
```



##### 문자열 메소드

```js
'hello'.charAt(0); // "h"
'hello, world'.replace('hello', 'goodbye'); // "goodbye, world"
'hello'.toUpperCase(); // "HELLO"
```



#### null 

​	의도적으로 값이 없음을 나타내는 객체 타입



#### undefined

​	아직 어떤 값도 할당되지 않은 변수임을 가리키는 객체 타입

​	변수에 값을 주지 않고 선언하는 것이 가능하기 때문에 존재하는 타입



#### Boolean

​	true, false 값을 가질 수 있는 타입, `&&`, `||`, `!` 논리 연산자 지원

	1. `false`,` 0`, 빈 문자열(`""`), 수가 아님을 뜻하는 `NaN`, `null`, `undefined` 모두 `false`가 됨
 	2. 다른 모든 값은 `true`

```js
Boolean(''); // false
Boolean(234); // true
```

