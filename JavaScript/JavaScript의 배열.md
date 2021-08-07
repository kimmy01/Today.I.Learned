### 😀JavaScript의 배열

```js
var a = new Array();
a[0] = "dog";
a[1] = "cat";
a[2] = "hen";
a.length // 3

var a = ["dog", "cat", "hen"];
a.length // 3
```



`array.length` 가 배열에 값이 있는 항목의 개수를 반환하지는 않음!

```js
var a = ["dog", "cat", "hen"];
a[100] = "fox";
a.length // 101

// 존재하지 않는 배열 인덱스를 참조하려고 하면 undefined를 받음
typeof(a[90]) // undefined

// for .. of 루프
for(const currentValue of a){
    // currentValue로 수행
}
```



`forEach()`

```js
['dog', 'cat', 'hen']
    .forEach(function(currentValue, index, array)){
             //currentValue나 array[index]로 무엇인가 수행
             }
```



배열에 항목 하나 추가하는 방법

```js
a.push(item);
```



#### 배열 메소드

`a.toString()` 각 항목에 대한 toString()의 출력이 콤마로 구분된 한 개의 문자열을 반환

```js
var a = [1, 2, 3, 4];
console.log(a.toString());
```

![image-20210807124652023](C:\Users\multicampus\Documents\Today.I.Learned\images\image-20210807124652023.png)

`a.toLocaleString()` 각 항목에 대한 `toLocaleString()`의 출력이 콤마로 구분된 한 개의 문자열을 반환

```js
var a = [1, 2, 3, 4, 5];
console.log(a.toLocaleString());
```

![image-20210807124844102](C:\Users\multicampus\Documents\Today.I.Learned\images\image-20210807124844102.png)

`a.concat(item1[, item2[, ... [, itemN]]])` item들이 덧붙여진 한 개의 배열 반환

```js
var a = ['1, 2, 3, 4, 5'];
a = a.concat('a', ['b', 'c'], 'abc');
console.log(a);
```

![image-20210807130754452](C:\Users\multicampus\Documents\Today.I.Learned\images\image-20210807130754452.png)

`a.join(sep)` 배열의 값들을 sep 인자로 구분하여 합친 한 개의 문자열로 변환

```js
var a = [1, 2, 3];
console.log(a.join(';'));
```

![image-20210807130935513](C:\Users\multicampus\Documents\Today.I.Learned\images\image-20210807130935513.png)

`a.pop()` 배열의 마지막 항목을 반환하면서 제거

```js
var a = [1, 2, 3];
console.log(a.pop());
console.log(a);
```

![image-20210807131040672](C:\Users\multicampus\Documents\Today.I.Learned\images\image-20210807131040672.png)

`a.push(item1, ..., itemN)` 배열의 끝에 item들을 덧붙임

```js
var a = [1, 2, 3];
console.log(a);
a.push(4, 5, 6, 7);
console.log(a);
```

![image-20210807131155426](C:\Users\multicampus\Documents\Today.I.Learned\images\image-20210807131155426.png)

`a.shift()` 배열의 첫번째 항목을 반환하면서 제거

```js
var a = [1, 2, 3];
console.log(a.shift());
console.log(a);
```

![image-20210807131239594](C:\Users\multicampus\Documents\Today.I.Learned\images\image-20210807131239594.png)

`a.unshift(item1[, item2[, ...[, itemN]]])` 배열의 앞쪽에 item들을 덧붙임

```js
var a = ['1, 2, 3, 4, 5'];
a.unshift('a', ['b', 'c'], 'abc');
console.log(a);
```

![image-20210807131419920](C:\Users\multicampus\Documents\Today.I.Learned\images\image-20210807131419920.png)

`a.slice(start[, end])` 배열의 일부분을 새배열로 반환

```js
var a = [1, 2, 3, 4, 5];
console.log(a);
a = a.slice(1, 3);
console.log(a);
```

![image-20210807131557944](C:\Users\multicampus\Documents\Today.I.Learned\images\image-20210807131557944.png)

`a.sort([cmpfn])` 옵션으로 비교용도의 함수를 입력 받음

```js
var a = [1, 10, 9, 3, 4, 6];
a.sort((a, b) => a-b);
console.log(a);
```

![image-20210807131830213](C:\Users\multicampus\Documents\Today.I.Learned\images\image-20210807131830213.png)

`a.splice(start, delcount[, item1[, ..[, itemN]]])` 배열의 일부분을 제거하고 다른 항목으로 대체하여 배열을 변경

```js
var a = [1, 10, 9, 3, 4, 6];
a.splice(1, 2, [5, 6, 7]);
console.log(a);
```

![image-20210807132547002](C:\Users\multicampus\Documents\Today.I.Learned\images\image-20210807132547002.png)

`a.reverse()` 배열의 순서를 거꾸로 배열

```js
var a = [1, 2, 3, 4, 5, 6, 7];
console.log(a.reverse());
```

![image-20210807132642590](C:\Users\multicampus\Documents\Today.I.Learned\images\image-20210807132642590.png)

