# Create
단일 컬렉션 대상으로 삽입 작업
- `db.{collection_name}.insertOne()`
- `db.{collection_name}.insertMany()`

# Read
컬렉션에 도큐먼트를 쿼리하는 것
- `db.{collection_name}.find()`
```
db.users.find( // collection
  { age: { $gt: 18 } }, // query
  { name: 1, address: 1 } // projection
).limit(5) // cursor modifier
```
# Update
컬렉션의 기존 문서 수정, 단일 컬렉션 대상, 단일 문서 수준에서 원자적으로 이루어짐
- `db.{collection_name}.updateOne()`
- `db.{collection_name}.updateMany()`
- `db.{collection_name}.replaceOne()`
```
db.users.updateMany( // collection
  { age: { $lt: 18 } }, // update filter
  { $set: { status: "reject" } } // update action
)
```

# Delete
컬렉션에서 기존 문서 삭제
- `db.{collection_name}.deleteOne()`
- `db.{collection_name}.deleteMany()`
```
db.users.deleteMany( // collection
  { status: "reject" } // delete filter
)
```
