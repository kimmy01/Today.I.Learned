### ๐JavaScript ์ฌ์ฉ์ ์ ์ ๊ฐ์ฒด

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



#### ์์ ์ฝ๋๋ฅผ ๊ฐ์ ํ ์ฝ๋ 1

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

// this์ ๋ฌธ์ ์ 
var s = makePerson('Simon', 'Willison');
var fullName = s.fullName;
fullName(); // undefined undefined
```



#### ์์ ์ฝ๋๋ฅผ ๊ฐ์ ํ ์ฝ๋ 2

`new`ํค์๋๋ฅผ ๋์

์๋ก์ด ๋น ๊ฐ์ฒด๋ฅผ ๋ง๋  ๋ค, ์ง์ ๋ ํจ์๋ฅผ ๋ถ๋ฌ ์๋ก์ด ๊ฐ์ฒด๋ฅผ `this`์ ์ค์ 

`this`๋ก ์ง์ ๋ ํจ์๋ ๊ฐ์ ๋ฐํํ์ง ์๊ณ  `this`๊ฐ์ฒด๋ฅผ ์์ ํ๊ธฐ๋ง ํจ

`this`๊ฐ์ฒด๋ฅผ ํธ์ถํ๋ ๊ณณ์ผ๋ก ๋ฐํํ๋ ๊ฒ์ `new` 

`new`์ ์ํด ํธ์ถ๋๋๋ก ์ค๊ณ๋ ํจ์ : `constructor`ํจ์ (์ผ๋ฐ์ ์ผ๋ก ์ฒซ์๋ฅผ ๋๋ฌธ์๋ก ํ์)

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



#### ์์ ์ฝ๋๋ฅผ ๊ฐ์ ํ ์ฝ๋ 3 (์ค๋ณต ๋ด์ฅ ํจ์ ์ ๊ฑฐ)

๋ฉ์๋๋ฅผ ํ ๋ฒ๋ง ๋ง๋ค๊ณ , `constructor `๋ด๋ถ์ ํด๋น ๋ฉ์๋๋ค์ ์ฐธ์กฐํ๋๋ก ํ ๋น

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



#### ์์ ์ฝ๋๋ฅผ ๊ฐ์ ํ ์ฝ๋ 4 

`Person.prototype` ์ ๋ชจ๋  `Person`์ธ์คํด์ค๋ค ๊ฐ์ ๊ณต์ ๋๋ ๊ฐ์ฒด

`Person` ๊ฐ์ฒด์ ์ค์ ๋์ง ์์ ์์ฑ์ ์ ๊ทผ ์๋ํ  ๋๋ง๋ค ๊ทธ๊ฒ์ ๋์ฒด์ฉ๋๋ก `Person.prototype`์ ๊ทธ ์์ฑ์ด ์กด์ฌํ๋ ์ง ํ์ธ

`Person.prototype`์ ํ ๋น๋ ๋ชจ๋  ๊ฒ์ this๊ฐ์ฒด๋ฅผ ํตํด ํด๋น `constructor`์ ์ํ ๋ชจ๋  ์ธ์คํด์ค๋ค ๊ฐ์ ์ฌ์ฉ ๊ฐ๋ฅ

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

// ์ด๋ฏธ ์กด์ฌํ๋ ๊ฐ์ฒด์ ์ถ๊ฐ์ ์ธ ๋ฉ์๋๋ฅผ ๋ฐ๋ก๋ฐ๋ก ์ถ๊ฐ ๊ฐ๋ฅ
var s = new Person("Simon", "Willison");
s.firstNameCaps(); //TypeError on line 1: s.firstNameCaps is not a function

Person.prototype.firstNameCaps = function() {
    return this.first.toUpperCase()
};
s.firstNameCaps(); // "SIMON"
```



โ	`prototype`์ ์ฌ์ฉํ์ฌ String๊ฐ์ฒด์ ๋ฌธ์์ด ์์๋ฅผ ๊ฑฐ๊พธ๋ก ๋ฆฌํดํด์ฃผ๋ ๋ฉ์๋

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

// ๋ฌธ์์ด ์์์์๋ ์ฌ์ฉ ๊ฐ๋ฅ
"This can now be reversed".reversed(); // desrever eb won nac sihT
```



`Object.prototype`์ `toString()`๋ฉ์๋๋ ๊ฐ์ฒด์ ๋๋ฒ๊น์ ์ ์ฉ

```js
var s = new Person("Simon", "Willison");
s.toString(); // [object Object]

Person.prototype.toString = function() {
  return '<Person: ' + this.fullName() + '>';
}

s.toString(); // "<Person: Simon Willison>"
```

