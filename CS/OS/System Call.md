# System Call

`fork()` `exec()` `wait()` 와 같은 것들은 프로세스 생성과 제어를 위한 System Call임

* `fork()` `exec()` 새로운 프로세스 생성과 관련 있음
  *  `fork()` 동일한 프로세스의 내용을 여러 번 동작할 때 사용
  * `exec()` child에서는 parent와 다른 동작을 하고 싶을 때 사용

* `wait()` 프로세스(Parent)가 만든 다른 프로세스(Child)가 끝날 때까지 기다리는 명령어

