csdn地址:https://blog.csdn.net/abfdada/article/details/80175985

用法:
<h1>1 静态加载:将父节点中已有的子节点重新以瀑布流的形式横向加载
	<h3> 1.1 每列依次加载一个子节点putEasyWater(瀑布流静态加载的父节点,加载成多少列)方法.

 
demo:
```
	<div id="contentId">
		<span>1</span>
		<span>2</span>
		<span>3</span>
		<span>4</span>
		<span>5</span>
		<span>6</span>
		<span>7</span>
		<span>8</span>
		<span>9</span>
		<span>10</span>
	</div>
  
<script >
//模拟数据,把<div id="contentId">里的子节点赋予参差不齐的高度 start
var contentchildren=$("#contentId").children();
var itemCount=contentchildren.length;
for (var j =0; j<itemCount; j++) {
(contentchildren.eq(j)).css({"width":"200px","height":(100+Math.random()*300),"display":"block","background-color":"pink","border":"2px solid black"});
}
//模拟模拟数据,把<div id="contentId">里的子节点赋予参差不齐的高度 end

//调用方法加载
putEasyWater("#contentId",3);
</script>

```
效果如下:

![这里写图片描述](https://img-blog.csdn.net/201805030954559?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2FiZmRhZGE=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

<h3>1.2 目前高度最低的列加载子节点的形式重新加载成瀑布流(避免出现瀑布流每列的高度相差太大的情况)putSmartWater(瀑布流静态加载的父节点,加载成多少列)

demo:

```

	<div id="contentId">
		<span>1</span>
		<span>2</span>
		<span>3</span>
		<span>4</span>
		<span>5</span>
		<span>6</span>
		<span>7</span>
		<span>8</span>
		<span>9</span>
		<span>10</span>
	</div>

<script >
//模拟数据,把<div id="contentId">里的子节点赋予参差不齐的高度 start
var contentchildren=$("#contentId").children();
var itemCount=contentchildren.length;
for (var j =0; j<itemCount; j++) {
(contentchildren.eq(j)).css({"width":"200px","height":(100+Math.random()*300),"display":"block","background-color":"pink","border":"2px solid black"});
}
//模拟模拟数据,把<div id="contentId">里的子节点赋予参差不齐的高度 end

//调用方法加载
putSmartWater("#contentId",3);
</script>

```
效果如下

![这里写图片描述](https://img-blog.csdn.net/20180503100120429?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2FiZmRhZGE=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
<h1>2.动态加载:每次加载一个想要的子节点到瀑布流
<h3>2.1 目前列子节点数目最少的一列加载一个新的子节点,
putDynamicWater(动态加载瀑布流的父节点,加载成多少列,需要动态加载的新节点),避免出现瀑布流每列的高度相差太大的情况.

demo:

```

	<div id="contentId">
	</div>

<script >
		//创建10条随机高度的模拟数据 逐条动态添加 
		for (var j =0; j<10; j++) {
		//创建模拟数据start
			var myitem=document.createElement("span");
			$(myitem).css({"width":"200px","height":(100+Math.random()*300),"display":"block","background-color":"pink","border":"2px solid black"});
			myitem.innerText=j+"";
		//创建模拟数据end
			putDynamicWater("#contentId",3,myitem);//添加myitem到瀑布流
			//putSmartDynamicWater("#contentId",3,myitem);//添加myitem到瀑布流

		}
	

	</script>

```
效果图如下

![这里写图片描述](https://img-blog.csdn.net/20180503100808999?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2FiZmRhZGE=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
<h3>2.2 在高度最低的列加载一个新的子节点,
putSmartDynamicWater(动态加载瀑布流的父节点,加载成多少列,需要动态加载的新节点)


demo:
```

	<div id="contentId">
	</div>


<script >
		//创建10条随机高度的模拟数据 逐条动态添加 
		for (var j =0; j<10; j++) {
		//创建模拟数据start
			var myitem=document.createElement("span");
			$(myitem).css({"width":"200px","height":(100+Math.random()*300),"display":"block","background-color":"pink","border":"2px solid black"});
			myitem.innerText=j+"";
		//创建模拟数据end
			//putDynamicWater("#contentId",3,myitem);//添加myitem到瀑布流
			putSmartDynamicWater("#contentId",3,myitem);//添加myitem到瀑布流

		}
	

	</script>

```
效果图如下

![这里写图片描述](https://img-blog.csdn.net/20180503101044561?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2FiZmRhZGE=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
