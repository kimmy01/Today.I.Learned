### ๐ถDTO

**D**ata **T**ransfer **O**bject - **๋ฐ์ดํฐ ์ ์ก ๊ฐ์ฒด**

**๊ณ์ธต ๊ฐ ๋ฐ์ดํฐ ๊ตํ์ ์ํด ์ฌ์ฉํ๋ ๊ฐ์ฒด**

<img src="https://github.com/kimmy01/Today.I.Learned/blob/main/images/image-20210721230042520.png" style="zoom: 33%;" />

๋ก์ง ํฌํจ ๋ถ๊ฐ๋ฅ 

์์ํ ๋ฐ์ดํฐ ๊ฐ์ฒด, `getter/setter` ๋ฉ์๋๋ง ๊ฐ์ง

๋ฐ์ดํฐ ์ฌ์ฉ ๊ธฐ๋ฅ์ ๋ด๋น ํด๋์ค

**DB ์ ๊ทผ์ ํ๊ธฐ ์ํ ๋ก์ง / ๋น์ฆ๋์ค ๋ก์ง**์ ๋ถ๋ฆฌํ๊ธฐ ์ํด์ ์ฌ์ฉํจ

DB Connection ๋ก์ง๊น์ง ์ค์ ๋์ด ์๋ ๊ฒฝ์ฐ๊ฐ ๋ง์

DB๋ฅผ ์ฌ์ฉํ๊ธฐ ์ํด ๋ฐ์ดํฐ๋ฅผ CRUDํ๋ ๊ธฐ๋ฅ ์ ๋ด

```java
public class MoveDto {
    private String source;
    private String target;
    
    public MoveDto(String source, String target){
        this.source = source;
        this.target = target;
    }
    
    public String getSource() {
        return source;
    }
    
    public String getTarget() {
        return target;
    }
    
    public void setSource(String source){
        this.source = source;
    }
    
    public void setTarget(String target){
        this.target = target;
    }
}
```



### ๐ถVO

**V**alue **O**bject - **๊ฐ ๊ทธ ์์ฒด๋ฅผ ํํํ๋ ๊ฐ์ฒด**

์๋ก ๋ค๋ฅธ ์ด๋ฆ์ ๊ฐ์ง VO์ ์ธ์คํด์ค๊ฐ **๋ชจ๋  ์์ฑ ๊ฐ์ด ๊ฐ๋ค๋ฉด ๊ฐ์ ๊ฐ์ฒด**

ใฐ ์ ์ ์กฐ๊ฑด์ `equals()`์ `hashCode()`๋ฅผ **์ค๋ฒ๋ผ์ด๋ฉ** ํด์ผ ํจ ใฐ

**๊ฐ์ฒด์ ๋ถ๋ณ์ฑ** ๋ณด์ฅ

๋ก์ง ํฌํจ ๊ฐ๋ฅ

```java
public class Color{
    private final double red;
    private final double green;
    private final double blue;
    
    private Color(double red, double green, double blue){
        this.red = red;
        this.green = green;
        this.blue = blue;
    }
    
    public static Color of(double red, double green, double blue){
        return new Color(red, green, blue);
    }
    
    @Override
   public boolean equals(Object o) {
      if (this == o) return true;
      if (o == null || getClass() != o.getClass()) return false;
      Color color = (Color) o;
      return red == color.red && green == color.green && blue == color.blue;
   }
    
}
```

`//๋์ ๋์ผํ ๊ฐ์ฒด`

`Color color1 = Color.of(255, 255, 0)`

`Color color2 = Color.of(255, 255, 0)`

`equals()` ์ค๋ฒ๋ผ์ด๋ฉ โก ์์ฑ๋ค์ด ๋์ผํ ๊ฐ์ธ์ง ๋น๊ตํ๊ธฐ ์ํด์

`hashCode()` ์ค๋ฒ๋ผ์ด๋ฉ โก map ๋ฑ์์ hashCode๋ก ๊ฐ์ ์ฐพ์ ๋ ์ฌ์ฉ ๊ฐ๋ฅ



### ๐ถDTO์ VO์ ํผ์ฉ ์ด์ 

์น ๊ฐ๋ฐ์์ ํผ์ฉํด์ ์ฌ์ฉํ๋ VO๋ ์ฌ์ค DTO์ด๋ค!

ํผ์ฉ์ ์์ธ์? **Core J2EE patterns**๋ผ๋ ์ฑ์ ์ดํ์์ `getter, setter`๊ฐ ์๊ณ  ๋ฐ์ดํฐ ์ ์ก์ ์ฌ์ฉ๋๋ ๊ฐ์ฒด๊ฐ **VO**๋ผ๊ณ  ํ๋๋ฐ, 2ํ ๋ถํฐ๋ **DTO**๋ผ๊ณ  ์ ์ 

๊ทธ๋ ์ง๋ง ์ด๋ฏธ ์ฌ๋๋ค์ด DTO๋ฅผ VO๋ผ๊ณ  ์ฌ์ฉํด์ ๋ณ์นญ์ฒ๋ผ ์ฐ์ด๊ฒ ๋จ



### ๐ถDTO๋ฅผ VO์ฒ๋ผ ๋ถ๋ณ๊ฐ์ฒด๋ก ์ฌ์ฉํ๋ฉด ์ข์์ ?

DTO๊ฐ ์ ์กํ๊ณ ์ ํ๋ ๋ฐ์ดํฐ๊ฐ ์ ์ก ๊ณผ์ ์์ **๋ณ์กฐ๋์ง ์๋๋ค**๋ ๊ฒ์ ๋ณด์ฅํ  ์ ์์



### ๐ถEntity

์ค์  **DB์ ํ์ด๋ธ๊ณผ ๋งคํ**๋๋ ํด๋์ค

ID๋ก ๊ตฌ๋ถ์ด ๋จ

๋ก์ง ํฌํจ ๊ฐ๋ฅ

```java
import javax.persistence.*;

@Entity
public class User {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   privae Long id;
  
   @Column(nullable = false)
   private String name;
  
   @Column(nullable = false)
   private String email;
  
   @Builder
   public User(String name, String email) {
      this.name = name;
      this.email = email;
   }
  
   public User update(String name, String email) {
      this.name = name;
      this.email = email;
      return this;
   }
}
```



### ๐ถEntity๋ฅผ DTO ๋์ ?

์ฌ์ฉํ  ์๋ ์์ง๋ง, View์์ ํํํ๋ ์์ฑ ๊ฐ๋ค์ด ์์ฒญ์ ๋ฐ๋ผ์ ๊ณ์ ๋ฌ๋ผ์ง ์ ์๋๋ฐ, ๊ทธ ๋๋ง๋ค Entity์ ์์ฑ๊ฐ์ ๋ณ๊ฒฝํ๋ฉด ์์์ฑ ๋ชจ๋ธ(DB๋ชจ๋ธ)์ ํํํ Entity์ ์์์ฑ์ด ๋ชจํธํด์ง๊ธฐ ๋๋ฌธ์ Controller์์ ์ธ DTO์ Entity ํด๋์ค๋ ๊ตฌ๋ถํ๋ ๊ฒ์ด ์ข์



<img src="https://github.com/kimmy01/Today.I.Learned/blob/main/images/image-20210721230206570.png" style="zoom:33%;" />


### ๐ซDTO

- **๋ฐ์ดํฐ ์ ๋ฌ **๋ง์ ์ํ ๊ฐ์ฒด 

  ๋ฐ์ดํฐ ์ ๋ฌ ์ฉ๋๋ก๋ง ์ฌ์ฉํ๋๊ฒ ๋ชฉ์ ์ด๋ผ๋ฉด, **getter/setter**๋ง ํ์ํ๊ณ , ๊ทธ ์ธ ๋น์ฆ๋์ค ๋ก์ง์ ๊ตณ!์ด! ์์ ํ์๊ฐ ์์

### ๐ณVO

- **๋ ๊ฐ์ฒด์ ๋ชจ๋  ํ๋ ๊ฐ๋ค์ด ๋์ผํ๋ฉด ๋ ๊ฐ์ฒด๋ ๊ฐ๋ค**๋ ๊ฒ์ด ํต์ฌ ์ ์
- ์์ ํ ๊ฐ ์์ฒด ํํ ์ฉ๋๋ก๋ง ์ฌ์ฉํ๋ ๊ฒ ๋ชฉ์ ์ด๋ผ๋ฉด, ๋ ๊ฐ์ฒด์ ๋ชจ๋  ํ๋ ๊ฐ๋ค์ด ๋ชจ๋ ๊ฐ์๋ฉด ๊ฐ์ ๊ฐ์ฒด์ด๋๋ก ๋ง๋๋ **eqauls()/hashCode()**๋ง ์ค์ํ์ง, ๋ค๋ฅธ ๋ฉ์๋๋ ์์ด๋ ์์ด๋ ์ด๋ค ๋ฉ์๋๊ฐ ์์ด๋ ์๊ด ์์
- ๊ทธ๋ ์ง๋ง! VO๋ ํน์  ๊ฐ ์์ฒด๋ฅผ ํํํ๊ธฐ ๋๋ฌธ์, **setter**์ฑ๊ฒฉ์ ๋ฉ์๋๋ ์์ ๊ณ  **๋ถ๋ณ ๊ฐ์ฒด**๋ก ๋ง๋ค์ด์ผ ํจ


#### ๋ก๋ ๋ฒํธ๋ค์ VO๋ก ๋ง๋ค์ด์ผ ํ๋ค๊ณ  ๊ฐ์ 

**LottoNumber(1๋ฒ)** ๊ฐ์ฒด๋ฅผ ๋ถ๋ณ์ผ๋ก ๋ง๋ค์ด์ผ **์ด ๊ฐ์ฒด๋ ๋ก๋๋ฒํธ 1๋ฒ์ด๋ค** ๋ผ๊ณ  ๋งํ  ์ ์์

์ค๊ฐ์ **setter**์ ๊ฐ์ ์ซ์๊ฐ ๋ฐ๋ ์ ์๋ ์ฌ์ง๊ฐ ์์ผ๋ฉด **์ด ๊ฐ์ฒด๋ ๋ก๋๋ฒํธ 1๋ฒ ๊ทธ ์์ฒด์ด๋ค**๋ผ๊ณ  ๋ง ํ  ์ ์์. (์์ฑ๊ฐ์ด ๋ณํ  ์ ์๋ ๊ฐ๋ฅ์ฑ์ด ์๊ธฐ ๋๋ฌธ)


**๋ผํ**๋์ ํ์ฝํก ์์์ ์ฐธ๊ณ ํ์์ต๋๋ค  
https://www.youtube.com/watch?v=J_Dr6R0Ov8E  

**๊นํํฌ**๋์ velog๋ฅผ ์ฐธ๊ณ ํ์์ต๋๋ค  
https://velog.io/@taehee-kim-dev/DTO-vs-VO  
