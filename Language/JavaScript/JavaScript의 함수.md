### ๐JavaScript์ ํจ์

```js
function add(x, y){
    var total = x + y;
    return total;
}

add(); // NaN
add(2, 3, 4); // 5 (์ฒ์์ ๋ ์๊ฐ ๋ํด์ง)
```



`arguments` ๊ฐ์ฒด 

โ	ํด๋น ํจ์์ ๋งค๊ฐ๋ณ์๋ก ๋๊ฒจ์ง ๋ชจ๋  ๊ฐ์ ๊ฐ์ง๊ณ  ์๋ ๋ฐฐ์ด๊ณผ ๋น์ทํ ๊ฐ์ฒด

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



#### ํ๊ท  ๊ตฌํ๊ธฐ ํจ์

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



#### Rest ํ๋ผ๋ฏธํฐ ์ฐ์ฐ์

โ	`(...variable)`์ผ๋ก ํจ์ ํ๋ผ๋ฏธํฐ ๋ชฉ๋ก์ ์ฌ์ฉ๋จ

โ	ํจ์๊ฐ ํธ์ถ๋  ๋ ์ ๋ฌ๋๋ ๋ชจ๋  ์ธ์ ํฌํจ

โ	variable ์ธ์์์ ๋ฐํ๋๋ ๊ฐ์ ์ฌ์ฉํ๊ธฐ ์ํด `for`๋ฃจํ๋ฅผ `for ..of` ๋ฃจํ๋ก ๋ณ๊ฒฝ

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



#### avg() ํจ์๋ ์ฝค๋ง๋ก ๊ตฌ๋ถ๋ ํ๋ผ๋ฏธํฐ๋ฅผ ๋ฐ์! ๋ฐฐ์ด์ ํ๊ท ์ ์๊ณ ์ถ์ผ๋ฉด?

โ	๋ ๋ฒ์งธ ์ธ์์ ์ฌ์ฉํ๊ณ ์ ํ๋ ๋ฐฐ์ด์ ๋ฃ์ด์ค

```js
avg.apply(null, [2, 3, 4, 5]) // 3.5
```



#### ์ต๋ช์ ํจ์

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



#### ์ฌ๊ทํจ์ ํธ์ถ

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



##### ์ต๋ช ํจ์๋ฅผ ์ฌ๊ท์ ์ผ๋ก ํธ์ถํ๊ธฐ

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

