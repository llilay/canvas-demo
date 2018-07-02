一些canvas学习demo
==
* var canvas = document.getElementById('tutorial');
* var ctx = canvas.getContext('2d');
## 绘制矩形
canvas提供了三种方法绘制矩形：

* fillRect(x, y, width, height) 绘制一个填充的矩形
* strokeRect(x, y, width, height) 绘制一个矩形的边框
* clearRect(x, y, width, height) 清除指定矩形区域，让清除部分完全透明。