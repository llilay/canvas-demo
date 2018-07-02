一些canvas学习demo
==
* var canvas = document.getElementById('tutorial');
* var ctx = canvas.getContext('2d');
## 绘制矩形
canvas提供了三种方法绘制矩形：

* fillRect(x, y, width, height) 绘制一个填充的矩形
* strokeRect(x, y, width, height) 绘制一个矩形的边框
* clearRect(x, y, width, height) 清除指定矩形区域，让清除部分完全透明。

将一个矩形路径增加到当前路径上:
* rect(x, y, width, height) 绘制一个左上角坐标为（x,y），宽高为width以及height的矩形。

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

## 圆弧
* arc(x, y, radius, startAngle, endAngle, anticlockwise) 画一个以（x,y）为圆心的以radius为半径的圆弧（圆），从startAngle开始到endAngle结束，按照anticlockwise给定的方向（默认为顺时针）来生成。
* arcTo(x1, y1, x2, y2, radius) 根据给定的控制点和半径画一段圆弧，再以直线连接两个控制点。

`arc x,y为绘制圆弧所在圆上的圆心坐标。radius为半径。startAngle以及endAngle参数用弧度定义了开始以及结束的弧度。这些都是以x轴为基准。参数anticlockwise为一个布尔值。为true时，是逆时针方向，否则顺时针方向。`

## 二次贝塞尔曲线及三次贝塞尔曲线
二次及三次贝塞尔曲线都十分有用，一般用来绘制复杂有规律的图形。

* quadraticCurveTo(cp1x, cp1y, x, y) 绘制二次贝塞尔曲线，cp1x,cp1y为一个控制点，x,y为结束点。
* bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) 绘制三次贝塞尔曲线，cp1x,cp1y为控制点一，cp2x,cp2y为控制点二，x,y为结束点。

## Path2D 对象
为了简化代码和提高性能，Path2D对象已可以在较新版本的浏览器中使用，用来缓存或记录绘画命令，这样你将能快速地回顾路径。

* Path2D()
Path2D()会返回一个新初始化的Path2D对象（可能将某一个路径作为变量——创建一个它的副本，或者将一个包含SVG path数据的字符串作为变量）。

* Path2D.addPath(path [, transform])​ 添加了一条路径到当前路径（可能添加了一个变换矩阵）。