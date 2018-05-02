/**
 * [init 初始化content]
 * @param  {[type]} content   [需要盛放瀑布流的节点]
 * @param  {[type]} columnNum [多少列]
 * @return {[type]}           [description]
 */
function init(content,columnNum){
	$(content).html('');
	for (var i = 0; i<columnNum; i++) {
		$(content).append('<div style="float:left" class="div-item'+i+'\"></div>');
	}
}
/**
 * [putEasyWater 静态加载瀑布流,将content写好的节点以瀑布流的形式重新加载,加载顺序是每列依次加载]
 * @param  {[type]} content   [需要盛放瀑布流的节点]
 * @param  {[type]} columnNum [多少列]
 * @return {[type]}           [description]
 */
function putEasyWater(content,columnNum){
	var contentchildren=$(content).children();
	var itemCount=contentchildren.length;
	init(content,columnNum);
	for (var j =0; j<itemCount; j++) {
		$(content+" .div-item"+(j%columnNum)).append(contentchildren.eq(j))
	}
}
/**
 * [putSmartWater 静态加载瀑布流,将content写好的节点以瀑布流的形式重新加载,加载规则是高度最低的列加载]
 * @param  {[type]} content   [需要盛放瀑布流的节点]
 * @param  {[type]} columnNum [description]
 * @return {[type]}           [description]
 */
function putSmartWater(content,columnNum){
	var contentchildren=$(content).children();
	var itemCount=contentchildren.length;
	init(content,columnNum);
	for (var j =0; j<itemCount; j++) {
		getMinHeight($(content).children()).append(contentchildren.eq(j));
	}


}
/**
 * [getMinHeight 获取高度最低的节点]
 * @param  {[type]} items [节点数组对象]
 * @return {[type]}       [高度最低的节点]
 */
function getMinHeight(items){
	var minHeightItem=items.eq(0);
	for (var m = 1; m<items.length; m++) {
		var currentItem=items.eq(m);
		if(minHeightItem.prop('scrollHeight')>currentItem.prop('scrollHeight'))
		{
			minHeightItem=currentItem;
		}
	}
	return minHeightItem;
}
/**
 * [putDynamicWater 静态加载瀑布流,以瀑布流的形式在content里加载一个newItem节点,加载顺序是节点数量最少的列加载]
 * @param  {[type]} content   [需要盛放瀑布流的节点]
 * @param  {[type]} columnNum [description]
 * @param  {[type]} newItem   [需要加载的新节点]
 * @return {[type]}           [description]
 */
function putDynamicWater(content,columnNum,newItem){
	var contentchildren=$(content).children();
	if (contentchildren.length!=columnNum) {
		init("#contentId",3);
		contentchildren=$(content).children();
	}
	getMinRowItem(contentchildren).append(newItem);
}
/**
 * [getMinRowItem 获取节点最少的列]
 * @param  {[type]} items [description]
 * @return {[type]}       [description]
 */
function getMinRowItem(items){
	var minRowItem=items.eq(0);
	for (var m = 1; m<items.length; m++) {

		var currentItem=items.eq(m);

		if(minRowItem.children().length>currentItem.children().length)
		{
			minRowItem=currentItem;
		}
	}
	return minRowItem;
}
/**
 * [putDynamicWater 静态加载瀑布流,以瀑布流的形式在content里加载一个newItem节点,加载规则是高度最低的列加载]
 * @param  {[type]} content   [需要盛放瀑布流的节点]
 * @param  {[type]} columnNum [description]
 * @param  {[type]} newItem   [需要加载的新节点]
 * @return {[type]}           [description]
 */
function putSmartDynamicWater(content,columnNum,newItem){
	var contentchildren=$(content).children();
	if (contentchildren.length!=columnNum) {
		init("#contentId",3);
		contentchildren=$(content).children();
	}
	getMinHeight(contentchildren).append(newItem);
}