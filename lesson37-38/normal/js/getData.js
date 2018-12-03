let list =[];

function getData(){
	let ipts = document.querySelectorAll("input[type=checkbox]:checked");
	let arr=[];
	list =[];
	let storage = window.localStorage;

	for(let i =0;i<ipts.length;i++){
		if(!ipts[i].id){
			arr.push(ipts[i].value);
		}
	}


	for(let i=0;i<sourceData.length;i++){
		if(arr.indexOf(sourceData[i].region)!==-1&&arr.indexOf(sourceData[i].product)!==-1){
			list.push(sourceData[i]);
		}
	}
    // 判断LocalStorage中是否有数据，从LocalStorage中读取数据，判断是否有相同数据，有就替换js文件ife31data中得到的数据。
    if(storage.getItem("newSourceData")){
	let json = storage.getItem("newSourceData");
	let newSourceData = JSON.parse(json); 
	for(let i=0;i<newSourceData.length;i++){
		for(let j=0; j<list.length;j++){
			if(newSourceData[i].region==list[j].region&&newSourceData[i].product==list[j].product){
				list[j]= newSourceData[i];
			}
		}
	}   	
    }
	return list;
}