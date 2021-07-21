### 😶DTO

**D**ata **T**ransfer **O**bject - **데이터 전송 객체**

**계층 간 데이터 교환을 위해 사용하는 객체**

<img src="https://github.com/kimmy01/Today.I.Learned/blob/main/images/image-20210721230042520.png" style="zoom: 33%;" />

로직 포함 불가능 

순수한 데이터 객체, `getter/setter` 메소드만 가짐

데이터 사용 기능을 담당 클래스

**DB 접근을 하기 위한 로직 / 비즈니스 로직**을 분리하기 위해서 사용함

DB Connection 로직까지 설정되어 있는 경우가 많음

DB를 사용하기 위해 데이터를 CRUD하는 기능 전담

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



### 😶VO

**V**alue **O**bject - **값 그 자체를 표현하는 객체**

서로 다른 이름을 가진 VO의 인스턴스가 **모든 속성 값이 같다면 같은 객체**

〰 전제조건은 `equals()`와 `hashCode()`를 **오버라이딩** 해야 함 〰

**객체의 불변성** 보장

로직 포함 가능

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

`//둘은 동일한 객체`

`Color color1 = Color.of(255, 255, 0)`

`Color color2 = Color.of(255, 255, 0)`

`equals()` 오버라이딩 ➡ 속성들이 동일한 값인지 비교하기 위해서

`hashCode()` 오버라이딩 ➡ map 등에서 hashCode로 값을 찾을 때 사용 가능



### 😶DTO와 VO의 혼용 이유

웹 개발에서 혼용해서 사용하는 VO는 사실 DTO이다!

혼용의 원인은? **Core J2EE patterns**라는 책의 초판에서 `getter, setter`가 있고 데이터 전송에 사용되는 객체가 **VO**라고 했는데, 2판 부터는 **DTO**라고 정정

그렇지만 이미 사람들이 DTO를 VO라고 사용해서 별칭처럼 쓰이게 됨



### 😶DTO를 VO처럼 불변객체로 사용하면 좋은점?

DTO가 전송하고자 하는 데이터가 전송 과정에서 **변조되지 않는다**는 것을 보장할 수 있음



### 😶Entity

실제 **DB의 테이블과 매핑**되는 클래스

ID로 구분이 됨

로직 포함 가능

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



### 😶Entity를 DTO 대신?

사용할 수는 있지만, View에서 표현하는 속성 값들이 요청에 따라서 계속 달라질 수 있는데, 그 때마다 Entity의 속성값을 변경하면 영속성 모델(DB모델)을 표현한 Entity의 순수성이 모호해지기 때문에 Controller에서 쓸 DTO와 Entity 클래스는 구분하는 것이 좋음



<img src="https://github.com/kimmy01/Today.I.Learned/blob/main/images/image-20210721230206570.png" style="zoom:33%;" />



**라흐**님의 테코톡 영상을 참고하였습니다

https://www.youtube.com/watch?v=J_Dr6R0Ov8E
