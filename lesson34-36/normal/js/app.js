//初始化页面
createCheckbox(items1,regionCheck,"regall");
createCheckbox(items2,productCheck,"proall");
getData();
createTable();
mergeCell(1,0);
choose(regionCheck,"regall");
choose(productCheck,"proall");

renderBar(numsList());
renderLine(numsList());

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
		console.log("hello");
		let arr1=[]
		let arr=[];
		let tr = e.target.parentNode;
		let tdList = tr.querySelectorAll("td");
		for(var i=2;i<tdList.length;i++){
           arr.push(tdList[i].innerText);
		}
		arr1.push(arr);
		console.log(arr1);
		renderBar(arr1);
        renderLine(arr1);
	}
})

window.addEventListener("mouseout",function(e){
	renderBar(numsList());
    renderLine(numsList());	
})
