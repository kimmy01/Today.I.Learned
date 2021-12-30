# PCB & Context Switching

* Process Metadata

  프로세스들의 특징을 갖고 있는 정보

  * Process ID
  * Process State
  * Process Priority
  * CPU Registers
  * Owner
  * CPU Usage
  * Memory Usage

이 메타데이터는 프로세스가 생성되면 **PCB(Process Control Block)**라는 곳에 저장

#### PCB(Process Control Block)

프로세스 메타데이터들을 저장해놓는 곳. 한 PCB 안에는 한 프로세스의 정보가 담김

```
프로그램 실행 -> 프로세스 생성 -> 프로세스 주소 공간(코드, 데이터, 스택) 생성 -> 이 프로세스의 메타데이터들이 PCB에 저장
```

Context Switching이 이루어질 때, 앞으로 다시 수행할, 대기 중인 프로세스에 관한 저장 값을 PCB에 저장해둠

Linked List 방식으로 관리

PCB List Head에 PCB들이 생성될 때마다 붙음, 주소값으로 연결되는 연결리스트라서 삽입 삭제 용이

프로세스가 생성되면 해당 PCB가 생성되고, 프로세스 완료되면 제거됨

#### Context Switching

CPU가 이전 프로세스 상태를 PCB에 보관하고 또 다른 프로세스의 정보를 PCB에 읽어 레지스터에 적재하는 과정

`인터럽트`, `실행 중인 CPU 사용 허가시간 모두 소모`, `입출력 대기`하는 경우에 발생

`Ready -> Running` `Running -> Ready` `Running -> Waiting` 같은 상태 변경 시 발생

##### Context Switching의 오버헤드

CPU에 계속 프로세스를 수행시키도록 하기 위해서 다른 프로세스를 실행시키고 Context Switching하는 것
