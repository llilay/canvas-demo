一些canvas学习demo
==
* var canvas = document.getElementById('tutorial');
* var ctx = canvas.getContext('2d');
## 绘制矩形
canvas提供了三种方法绘制矩形：

* fillRect(x, y, width, height) 绘制一个填充的矩形
* strokeRect(x, y, width, height) 绘制一个矩形的边框
* clearRect(x, y, width, height) 清除指定矩形区域，让清除部分完全透明。

x与y指定了在canvas画布上所绘制的矩形的左上角（相对于原点）的坐标。width和height设置矩形的尺寸。
## 绘制路径

* beginPath()  新建一条路径，生成之后，图形绘制命令被指向到路径上生成路径。
* closePath()  闭合路径之后图形绘制命令又重新指向到上下文中。
* stroke()  通过线条来绘制图形轮廓。
* fill()  通过填充路径的内容区域生成实心的图形。
* moveTo(x, y)  将笔触移动到指定的坐标x以及y上。
* lineTo(x, y)  绘制一条从当前位置到指定x以及y位置的直线。

生成路径的第一步叫做beginPath()。本质上，路径是由很多子路径构成，这些子路径都是在一个列表中，所有的子路径（线、弧形、等等）构成图形。而每次这个方法调用之后，列表清空重置，然后我们就可以重新绘制新的图形。

`注意：`当前路径为空，即调用beginPath()之后，或者canvas刚建的时候，第一条路径构造命令通常被视为是moveTo（），无论实际上是什么。出于这个原因，你几乎总是要在设置路径之后专门指定你的起始位置。
第二步就是调用函数指定绘制路径，本文稍后我们就能看到了。

第三，就是闭合路径closePath(),不是必需的。这个方法会通过绘制一条从当前点到开始点的直线来闭合图形。如果图形是已经闭合了的，即当前点为开始点，该函数什么也不做。

`注意：`当你调用fill()函数时，所有没有闭合的形状都会自动闭合，所以你不需要调用closePath()函数。但是调用stroke()时不会自动闭合。