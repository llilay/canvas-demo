# 色彩 Colors

## fillStyle = color
设置图形的填充颜色。
## strokeStyle = color
设置图形轮廓的颜色。

# 透明度 Transparency

## globalAlpha = transparencyValue
这个属性影响到 canvas 里所有图形的透明度，有效的值范围是 0.0 （完全透明）到 1.0（完全不透明），默认是 1.0。
globalAlpha 属性在需要绘制大量拥有相同透明度的图形时候相当高效。不过，我认为下面的方法可操作性更强一点。

因为 strokeStyle 和 fillStyle 属性接受符合 CSS 3 规范的颜色值，那我们可以用下面的写法来设置具有透明度的颜色。

// 指定透明颜色，用于描边和填充样式
* ctx.strokeStyle = "rgba(255,0,0,0.5)";
* ctx.fillStyle = "rgba(255,0,0,0.5)";

# 线型 Line styles
可以通过一系列属性来设置线的样式。

## lineWidth = value
设置线条宽度。
## lineCap = type
设置线条末端样式。
## lineJoin = type
设定线条与线条间接合处的样式。
## miterLimit = value
限制当两条线相交时交接处最大长度；所谓交接处长度（斜接长度）是指线条交接处内角顶点到外角顶点的长度。
## getLineDash()
返回一个包含当前虚线样式，长度为非负偶数的数组。
## setLineDash(segments)
设置当前虚线样式。
## lineDashOffset = value
设置虚线样式的起始偏移量。