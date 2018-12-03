function storage(newData){
	if(!window.localStorage){
		alert("浏览器不支持localStorage");
	}
	else {
		var storage = window.localStorage;
		if(storage.getItem("newSourceData")){
			var json = storage.getItem("newSourceData");
			let newSourceData = JSON.parse(json);

			for(let i=0;i<newSourceData.length;i++){
				if(newSourceData[i]["product"]== newData["product"]&&newSourceData[i]["region"]== newData["region"]){
					newSourceData[i]["sale"] = newData["sale"];
					let d2 = JSON.stringify(newSourceData);
					storage.setItem("newSourceData",d2);
					return true;
				}
			}
			newSourceData.push(newData);
			let d2= JSON.stringify(newSourceData);
			storage.setItem("newSourceData",d2);
		}
		else {
			let newSourceData = [];
			newSourceData.push(newData);
			let d = JSON.stringify(newSourceData);
			storage.setItem("newSourceData",d);
		}
	}
}