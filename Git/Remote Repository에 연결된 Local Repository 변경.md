# 🍯A 레포지와 연결되어 있는 로컬 레포지를 B  레포지로 옮기기

1. B 레포지 **clone > http url** 복사  
2. 로컬 레포지에서 **git bash** 실행  
3. `git remote rm origin` - A 레포지와 연결 해제  
4. `git remote add origin https://github.com/userid/Brepository` - B 레포지와 연결 생성  
5. `git pull` - B 레포지의 데이터 받아오기  
6. `git add .` - 로컬 레포지 데이터 스테이지에 올리기  
7. `git commit - m "commit message"` - 커밋  
8. `git push` - 커밋 푸쉬  
