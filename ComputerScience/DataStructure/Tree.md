# Tree

`Node`와 `Edge`로 이루어진 자료구조

<img src="https://github.com/kimmy01/Today.I.Learned/blob/main/images/tree.png" width="500px">

`root node` : 값이 1인 노드

모든 노드들은 0개 이상의 자식 노드를 가지며, 부모-자식 관계로 부름

### 트리 특징

1. 사이클이 존재할 수 없다 (사이클 있으면 그것은 그래프!)
2. 모든 노드는 자료형으로 표현 가능
3. 루트에서 한 노드로 가는 경로는 유일한 경로 뿐
4. 노드 개수가 N개면 간선은 N-1개

### 트리 순회

1. 전위 순회(pre-order)
    
    루트 - 왼쪽 자식 - 오른쪽 자식
    
    각 루트를 순차적으로 먼저 방문
    
    `1 - 2 - 4 - 8 - 9 - 5 - 10 - 11 - 3 - 6 - 13 - 7 - 14`
    
2. 중위 순회(in-order)
    
    왼쪽 자식 - 루트 - 오른쪽 자식
    
    왼쪽 하위 트리를 방문 후 루트 방문
    
    `8 - 4 - 9 - 2 - 10 - 5 - 11 - 1 - 6 - 13 - 3 - 14 - 7`
    
3. 후위 순회(post-order)
    
    왼쪽 자식 - 오른쪽 자식 - 루트
    
    왼쪽 하위 트리부터 하위를 모두 방문 후 루트 방문
    
    `8 - 9 - 4 - 10 - 11 - 5 - 2 - 13 - 6 - 14 - 7 - 3 - 1`
    
4. 레벨 순회(level-order)
    
    루트 계층부터 계층 별로 방문
    
    `1 - 2 - 3 - 4 - 5 - 6 - 7 - 8 - 9 - 10 - 11 -13 - 14`
    

```java
public class Tree<T> {
	private Node<T> root;
	
	public Tree(T rootData) {
		root = new Node<T>();
		root.data = rootData;
		root.children = new ArrayList<Node<T>>();
	}
	public static class Node<T> {
		private T data;
		private Node<T> parent;
		private List<Node<T>> children;
	}
}
```
