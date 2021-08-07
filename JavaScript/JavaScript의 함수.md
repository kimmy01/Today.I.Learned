### 😀JavaScript의 함수

```js
function add(x, y){
    var total = x + y;
    return total;
}

add(); // NaN
add(2, 3, 4); // 5 (처음의 두 수가 더해짐)
```



`arguments` 객체 

​	해당 함수에 매개변수로 넘겨진 모든 값을 가지고 있는 배열과 비슷한 객체

```js
function add(){
    var sum = 0;
    for (var i = 0, j = arguments.length; i < j; i++){
        sum += arguments[i];
    }
    return sum;
}

add(2, 3, 4, 5); // 14
```



#### 평균 구하기 함수

```js
function avg(){
    var sum = 0;
    for (var i = 0, j = arguments.length; i < j; i++){
        sum += arguments[i];
    }
    return sum / arguments.length;
}

avg(2, 3, 4, 5); // 3.5
```



#### Rest 파라미터 연산자

​	`(...variable)`으로 함수 파라미터 목록에 사용됨

​	함수가 호출될 때 전달되는 모든 인자 포함

​	variable 인자에서 반환되는 값을 사용하기 위해 `for`루프를 `for ..of` 루프로 변경

```js
function avg(...args) {
    var sum = 0;
    for (let value of args) {
        sum += value;
    }
    return sum / arr.length;
}

avg(2, 3, 4, 5); // 3.5
```



#### avg() 함수는 콤마로 구분된 파라미터를 받음! 배열의 평균을 알고싶으면?

​	두 번째 인자에 사용하고자 하는 배열을 넣어줌

```js
avg.apply(null, [2, 3, 4, 5]) // 3.5
```



#### 익명의 함수

```js
var avg = function() {
    var sum = 0;
    for (var i = 0, j = arguments.length; i < j; i++) {
        sum += arguments[i];
    }
    return sum / arguments.length;
}
```

```js
var a = 1;
var b = 2;

(function() {
    var b = 3;
    a += b; // 1 + 3
})();

a; // 4
b; // 2
```



#### 재귀함수 호출

```js
function countChars(elm) {
  if (elm.nodeType == 3) { // TEXT_NODE
    return elm.nodeValue.length;
  }
  var count = 0;
  for (var i = 0, child; child = elm.childNodes[i]; i++) {
    count += countChars(child);
  }
  return count;
}
```



##### 익명 함수를 재귀적으로 호출하기

```js
var charsInBody = (function counter(elm) {
  if (elm.nodeType == 3) { // TEXT_NODE
    return elm.nodeValue.length;
  }
  var count = 0;
  for (var i = 0, child; child = elm.childNodes[i]; i++) {
    count += counter(child);
  }
  return count;
})(document.body);

```

