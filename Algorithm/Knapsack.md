# Knapsack

![knapsack](https://github.com/kimmy01/Today.I.Learned/blob/main/images/knapsack.jpg)

#### 점화식
```
  if(w[i-j] <= j) {
    dp[i][j] = Math.max(v[i-1]+dp[i-1][j-w[i]], dp[i-1][j]);
  }else{
    dp[i][j] = dp[i-1][j];
  }
```
