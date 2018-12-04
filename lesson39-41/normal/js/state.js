function getState(){
	let box = document.querySelectorAll("input[type=checkbox]");
	var str = "";
	for(let i=0;i<box.length;i++){
		if(box[i].checked == true){
			str += "1";
		}
		else {
			str +="0";
		}
	}
	return str;
}

function setState(){
	if(location.search ==""){
		location.search ="11111111";
	}
	let box = document.querySelectorAll("input[type=checkbox]");
	let strArr = location.search.slice(1).split("");
	for(let i=0;i<strArr.length;i++){
		if(strArr[i]=="1"){
			box[i].checked = true;
		}
		else if(strArr[i]=="0"){
			box[i].checked = false;
		}
	}
}



