### ๐ JavaScript์ ๊ฐ์ฒด

name-value ํ์

**name** : JavaScript ๋ฌธ์์ด

**value**: ๊ฐ์ฒด๋ฅผ ํฌํจํ์ฌ ์๋ฌด ๊ฐ ๊ฐ๋ฅ



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

๊ฐ์ฒด ํ๋กํ ํ์ `Person` ์ ํ๋กํ ํ์์ ์ธ์คํด์ค `you` ์์ฑ

```js
function Person(name, age){
    this.name = name;
    this.age = age;
}

var you = new Person('You', 25); // "You"๋ผ๋ ์ด๋ฆ์ 25์ธ ์ฌ๋ ์์ฑ
```



```js
// dot ํ๊ธฐ๋ฒ
obj.name = "Simon";
var name = obj.name;

// bracket ํ๊ธฐ๋ฒ
obj["name"] = "Simon";
var name = obj["name"];

// key๋ฅผ ์ ์ํ๊ธฐ ์ํด ๋ณ์ ์ฌ์ฉ ๊ฐ๋ฅ
var user = prompt('what is your key?')
obj[user] = prompt('what is its value?')
```



```js
obj.for = "Simon"; // ๊ตฌ๋ฌธ ์ค๋ฅ! for๊ฐ ์ด๋ฏธ ์์ฝ์ด์ด๊ธฐ ๋๋ฌธ
obj["for"] = "Simon"; // ์ ์ ๋์!
```

