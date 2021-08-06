### ☺JavaScript의 수

```javascript
console.log(3/2); // 1.5
console.log(Math.floor(3/2)); // 1
Math.sin(3.5);
var circumference = 2*Math.PI*r;
```



##### 두 번째 매개변수를 밑으로 하여 문자열 정수 변환

```javascript
parseInt('123', 10); // 123
parseInt('010', 10); // 10
```



##### 문자열의 형식이 확실하지 않으면 다음과 같은 결과

```js
parseInt('010');  //  8 (0으로 시작하는 문자열을 8진수로)
parseInt('0x10'); // 16 (0x로 시작하는 문자열을 16진수로)
```



##### 2진수로 변환하고 싶다면?

```js
parseInt('11', 2); // 3
```



##### +연산자를 사용해서 값을 숫자로 변환 할 수 있음!

```js
+ '42';   // 42
+ '010';  // 10
+ '0x10'; // 16
```



##### 변환하려는 문자열이 숫자가 아니라면? NaN(Not a Number)로 바뀜

```js
parseInt('hello', 10); // NaN
NaN + 5; // NaN (어떠한 수학 연산의 입력값으로 NaN이 주어지면 그 결과도 NaN)
isNaN(NaN); // true (isNaN()함수를 사용해서 NaN 여부를 검사 가능)
```



##### Infinity, -Infinity

```js
1 / 0; // Infinity
-1 / 0; // -Infinity

//Infinity, -Infinity, NaN 테스트 가능
isFinite(1 / 0); // false
isFinite(-Infinity); // false
isFinite(NaN); // false
```



`parseInt()` 와 `parseFloat()` 함수는 문자가 나올 때까지 문자열을 파싱하고, 그 지점까지 파싱된 숫자를 반환함

`+` 연산자는 중간에 유효하지 않은 문자가 있으면 그대로 문자열을 `NaN`으로 반환해버림

