//初始化页面
createCheckbox(items1,regionCheck,"regall");
createCheckbox(items2,productCheck,"proall");
getData();
createTable();
mergeCell(1,0);
choose(regionCheck,"regall");
choose(productCheck,"proall");

renderBar();
renderLine();

//添加事件监听

regionCheck.addEventListener("click",getData,false);
regionCheck.addEventListener("click",renderBar,false);
regionCheck.addEventListener("click",renderLine,false);
regionCheck.addEventListener("click",createTable,false);
regionCheck.addEventListener("click",changeTd,false);
regionCheck.addEventListener("click",function(){
     mergeCell(1,0);
	},false);

productCheck.addEventListener("click",getData,false);
productCheck.addEventListener("click",renderBar,false);
productCheck.addEventListener("click",renderLine,false);
productCheck.addEventListener("click",createTable,false);
productCheck.addEventListener("click",changeTd,false);
productCheck.addEventListener("click",function(){
	mergeCell(1,0);
},false);

window.addEventListener("mouseover",function(e){
	if(e.target.nodeName == "TD"){
		let arr=[];
		let hoverLine={};
		let tr = e.target.parentNode;
		let tdList = tr.querySelectorAll("td");
		for(var i=2;i<tdList.length;i++){
           arr.push(tdList[i].innerText);
		}
		if(table.rows[0].cells[0].innerHTML=="商品"){
			hoverLine["product"]= tdList[0].innerHTML;
			hoverLine["region"] = tdList[1].innerHTML;
			hoverLine["sale"] = arr;
		}
		else {
			hoverLine["product"]= tdList[1].innerHTML;
			hoverLine["region"] = tdList[0].innerHTML;
			hoverLine["sale"] = arr;			
		}
        list= [];
        list.push(hoverLine);
        renderBar();
        renderLine();
	}
	else if(e.target.parentNode.nodeName == "TD"){
		let arr=[];
		let hoverLine={};
		let tr = e.target.parentNode.parentNode;
		let tdList = tr.querySelectorAll("td");
		for(var i=2;i<tdList.length;i++){
           arr.push(tdList[i].innerText);
		}
		if(table.rows[0].cells[0].innerHTML=="商品"){
			hoverLine["product"]= tdList[0].innerHTML;
			hoverLine["region"] = tdList[1].innerHTML;
			hoverLine["sale"] = arr;
		}
		else {
			hoverLine["product"]= tdList[1].innerHTML;
			hoverLine["region"] = tdList[0].innerHTML;
			hoverLine["sale"] = arr;			
		}
        list= [];
        list.push(hoverLine);
        renderBar();
        renderLine();	
	}
})

window.addEventListener("mouseout",function(e){
	getData();
	renderBar();
    renderLine();	
})

document.querySelector("#btn-submit").addEventListener("click",function(){
	if(!window.localStorage){
		alert("浏览器不支持localStorage");
	}
	else{
		var storage = window.localStorage;
		var d = JSON.stringify(list);
		storage.setItem("data",d);
		var j = storage.getItem("data");
		j = JSON.parse(j);
		console.log(j);


	}
})
