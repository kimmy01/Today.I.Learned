### ๐JavaScript์ ๋ฐฐ์ด

```js
var a = new Array();
a[0] = "dog";
a[1] = "cat";
a[2] = "hen";
a.length // 3

var a = ["dog", "cat", "hen"];
a.length // 3
```



`array.length` ๊ฐ ๋ฐฐ์ด์ ๊ฐ์ด ์๋ ํญ๋ชฉ์ ๊ฐ์๋ฅผ ๋ฐํํ์ง๋ ์์!

```js
var a = ["dog", "cat", "hen"];
a[100] = "fox";
a.length // 101

// ์กด์ฌํ์ง ์๋ ๋ฐฐ์ด ์ธ๋ฑ์ค๋ฅผ ์ฐธ์กฐํ๋ ค๊ณ  ํ๋ฉด undefined๋ฅผ ๋ฐ์
typeof(a[90]) // undefined

// for .. of ๋ฃจํ
for(const currentValue of a){
    // currentValue๋ก ์ํ
}
```



`forEach()`

```js
['dog', 'cat', 'hen']
    .forEach(function(currentValue, index, array)){
             //currentValue๋ array[index]๋ก ๋ฌด์์ธ๊ฐ ์ํ
             }
```



๋ฐฐ์ด์ ํญ๋ชฉ ํ๋ ์ถ๊ฐํ๋ ๋ฐฉ๋ฒ

```js
a.push(item);
```



#### ๋ฐฐ์ด ๋ฉ์๋

`a.toString()` ๊ฐ ํญ๋ชฉ์ ๋ํ toString()์ ์ถ๋ ฅ์ด ์ฝค๋ง๋ก ๊ตฌ๋ถ๋ ํ ๊ฐ์ ๋ฌธ์์ด์ ๋ฐํ

```js
var a = [1, 2, 3, 4];
console.log(a.toString());
```

![image-20210807124652023](https://github.com/kimmy01/Today.I.Learned/blob/main/images/image-20210807124652023.png)

`a.toLocaleString()` ๊ฐ ํญ๋ชฉ์ ๋ํ `toLocaleString()`์ ์ถ๋ ฅ์ด ์ฝค๋ง๋ก ๊ตฌ๋ถ๋ ํ ๊ฐ์ ๋ฌธ์์ด์ ๋ฐํ

```js
var a = [1, 2, 3, 4, 5];
console.log(a.toLocaleString());
```

![image-20210807124844102](https://github.com/kimmy01/Today.I.Learned/blob/main/images/image-20210807124844102.png)

`a.concat(item1[, item2[, ... [, itemN]]])` item๋ค์ด ๋ง๋ถ์ฌ์ง ํ ๊ฐ์ ๋ฐฐ์ด ๋ฐํ

```js
var a = ['1, 2, 3, 4, 5'];
a = a.concat('a', ['b', 'c'], 'abc');
console.log(a);
```

![image-20210807130754452](https://github.com/kimmy01/Today.I.Learned/blob/main/images/image-20210807130754452.png)

`a.join(sep)` ๋ฐฐ์ด์ ๊ฐ๋ค์ sep ์ธ์๋ก ๊ตฌ๋ถํ์ฌ ํฉ์น ํ ๊ฐ์ ๋ฌธ์์ด๋ก ๋ณํ

```js
var a = [1, 2, 3];
console.log(a.join(';'));
```

![image-20210807130935513](https://github.com/kimmy01/Today.I.Learned/blob/main/images/image-20210807130935513.png)

`a.pop()` ๋ฐฐ์ด์ ๋ง์ง๋ง ํญ๋ชฉ์ ๋ฐํํ๋ฉด์ ์ ๊ฑฐ

```js
var a = [1, 2, 3];
console.log(a.pop());
console.log(a);
```

![image-20210807131040672](https://github.com/kimmy01/Today.I.Learned/blob/main/images/image-20210807131040672.png)

`a.push(item1, ..., itemN)` ๋ฐฐ์ด์ ๋์ item๋ค์ ๋ง๋ถ์

```js
var a = [1, 2, 3];
console.log(a);
a.push(4, 5, 6, 7);
console.log(a);
```

![image-20210807131155426](https://github.com/kimmy01/Today.I.Learned/blob/main/images/image-20210807131155426.png)

`a.shift()` ๋ฐฐ์ด์ ์ฒซ๋ฒ์งธ ํญ๋ชฉ์ ๋ฐํํ๋ฉด์ ์ ๊ฑฐ

```js
var a = [1, 2, 3];
console.log(a.shift());
console.log(a);
```

![image-20210807131239594](https://github.com/kimmy01/Today.I.Learned/blob/main/images/image-20210807131239594.png)

`a.unshift(item1[, item2[, ...[, itemN]]])` ๋ฐฐ์ด์ ์์ชฝ์ item๋ค์ ๋ง๋ถ์

```js
var a = ['1, 2, 3, 4, 5'];
a.unshift('a', ['b', 'c'], 'abc');
console.log(a);
```

![image-20210807131419920](https://github.com/kimmy01/Today.I.Learned/blob/main/images/image-20210807131419920.png)

`a.slice(start[, end])` ๋ฐฐ์ด์ ์ผ๋ถ๋ถ์ ์๋ฐฐ์ด๋ก ๋ฐํ

```js
var a = [1, 2, 3, 4, 5];
console.log(a);
a = a.slice(1, 3);
console.log(a);
```

![image-20210807131557944](https://github.com/kimmy01/Today.I.Learned/blob/main/images/image-20210807131557944.png)

`a.sort([cmpfn])` ์ต์์ผ๋ก ๋น๊ต์ฉ๋์ ํจ์๋ฅผ ์๋ ฅ ๋ฐ์

```js
var a = [1, 10, 9, 3, 4, 6];
a.sort((a, b) => a-b);
console.log(a);
```

![image-20210807131830213](https://github.com/kimmy01/Today.I.Learned/blob/main/images/image-20210807131830213.png)

`a.splice(start, delcount[, item1[, ..[, itemN]]])` ๋ฐฐ์ด์ ์ผ๋ถ๋ถ์ ์ ๊ฑฐํ๊ณ  ๋ค๋ฅธ ํญ๋ชฉ์ผ๋ก ๋์ฒดํ์ฌ ๋ฐฐ์ด์ ๋ณ๊ฒฝ

```js
var a = [1, 10, 9, 3, 4, 6];
a.splice(1, 2, [5, 6, 7]);
console.log(a);
```

![image-20210807132547002](https://github.com/kimmy01/Today.I.Learned/blob/main/images/image-20210807132547002.png)

`a.reverse()` ๋ฐฐ์ด์ ์์๋ฅผ ๊ฑฐ๊พธ๋ก ๋ฐฐ์ด

```js
var a = [1, 2, 3, 4, 5, 6, 7];
console.log(a.reverse());
```

![image-20210807132642590](https://github.com/kimmy01/Today.I.Learned/blob/main/images/image-20210807132642590.png)

