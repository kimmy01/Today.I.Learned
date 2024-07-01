# MongoDB Document
- Collection(rdb의 table) - Document(rdb의 row) 구조
- 데이터 레코드를 BSON 문서로 저장 (JSON 문서의 이진 표현, JSON보다 더 많은 데이터 유형 포함)
  ```
    {
      _id: ObjectId("asdfadfasdfadfasdfad'), // ObjectId (primary key)
      age: 25,  // field-value 쌍 구조
      status: "A",
      groups: ["news", "sports"], // 배열의 두번째 요소를 지정하려면 "groups.1"의 점표기법으로 가능
      birth: new Date('Jun 13, 1980'), // Date 형식 값
      views: NumberLong(10000000), // NumberLong 유형의 값
      name : { // sub-document 구조
        first: "happy", // 여기 접근하려면 "name.first"
        last: "kim"
      }
    }
  ```

- BSON 문서의 최대 크기는 16MB
- `_id` 필드는 항상 문서의 제일 첫번째 필드
