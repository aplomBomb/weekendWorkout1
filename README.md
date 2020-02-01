### Take a dirty string of values and random non-alpha-numeric characters and return a balanced checkbook of sorts, writes to 'results.txt'.


#### Input:

```
1233.00
125 Hardware;! 24.8?;
123 Flowers 93.5
127 Meat 120.90
120 Picture 34.00
124 Gasoline 11.00
123 Photos;! 71.4?;
122 Picture 93.5
132 Tires;! 19.00,?;
129 Stamps 13.6
129 Fruits{} 17.6
129 Market;! 128.00?;
```

#### Output:

```
Starting balance: 1233.00
125 Hardware 24.8 | Balance: 1208.20
123 Flowers 93.5 | Balance: 1114.70
127 Meat 120.90 | Balance: 993.80
120 Picture 34.00 | Balance: 959.80
124 Gasoline 11.00 | Balance: 948.80
123 Photos 71.4 | Balance: 877.40
122 Picture 93.5 | Balance: 783.90
132 Tires 19.00 | Balance: 764.90
129 Stamps 13.6 | Balance: 751.30
129 Fruits 17.6 | Balance: 733.70
129 Market 128.00 | Balance: 605.70
Total expense: 627.30
Median expense: 57.03
```