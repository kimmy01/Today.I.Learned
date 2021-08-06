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

