import{regionCheck,productCheck,items1,items2,createCheckbox,choose} from "./js/checkbox.js"
import {list,getData} from "./js/getData";
import {createTable} from "./js/table";
import {mergeCell} from "./js/merge";
import {changeTd} from "./js/changeTd";
require("./css/common.css");


//初始化页面
createCheckbox(items1,regionCheck,"regall");
createCheckbox(items2,productCheck,"proall");
getData();
createTable();
mergeCell(1,0);
choose(regionCheck,"regall");
choose(productCheck,"proall");

//添加事件监听

regionCheck.addEventListener("click",getData,false);
regionCheck.addEventListener("click",createTable,false);
regionCheck.addEventListener("click",changeTd,false);
regionCheck.addEventListener("click",function(){
     mergeCell(1,0);
	},false);

productCheck.addEventListener("click",getData,false);
productCheck.addEventListener("click",createTable,false);
productCheck.addEventListener("click",changeTd,false);
productCheck.addEventListener("click",function(){
	mergeCell(1,0);
},false);


