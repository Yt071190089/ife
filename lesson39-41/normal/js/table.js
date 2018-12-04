let wrapper = document.querySelector("#table-wrapper");
let table = document.createElement("table");
table.setAttribute("id","table");

function createTable(){
	table.innerHTML = "";
	let tr = document.createElement("tr");
    tr.innerHTML = `
       <th>商品</th>
       <th>地区</th>
       <th>1月</th>
       <th>2月</th>
       <th>3月</th>
       <th>4月</th>
       <th>5月</th>
       <th>6月</th>
       <th>7月</th>
       <th>8月</th>
       <th>9月</th>
       <th>10月</th>
       <th>11月</th>
       <th>12月</th>              
    `;
    table.appendChild(tr);
    wrapper.appendChild(table);


    //遍历拿到的数据数组list
    for(let i=0; i<list.length;i++){
    	let tr = document.createElement("tr");
    	//遍历数组中每一个对象
    	for(let key in list[i]){
    		if(list[i].hasOwnProperty(key)){
    		// 判断list[i]的value是否是数组，非数组则直接添加到td里
    		if(!Array.isArray(list[i][key])){
    			let td = document.createElement("td");
    			td.innerHTML =list[i][key];
    		    tr.appendChild(td);
    		}else {
    			// 如果是数组，则遍历数组，将数组中的每一项分别创建并添加到td
    			for(let k =0;k<list[i][key].length;k++){
    				let td = document.createElement("td"),
                inputData = document.createElement("input"),
                inputConfirm = document.createElement("input"),
                inputCancel = document.createElement("input"),
                img = document.createElement("img"),
                textCont = document.createTextNode(list[i][key][k]);

            img.setAttribute("src","images/edit.png");
            img.setAttribute("alt","edit");
            img.setAttribute("width","15px");
            img.setAttribute("height","15px");
            img.setAttribute("class", "revise");

            inputConfirm.setAttribute("type","button");
            inputConfirm.setAttribute("value","确定");
            inputConfirm.setAttribute("class","confirm");

            inputCancel.setAttribute("type","button");
            inputCancel.setAttribute("value","取消");
            inputCancel.setAttribute("class","cancel");

            inputData.setAttribute("type","text");
            inputData.setAttribute("value",list[i][key][k]);
            inputData.setAttribute("class","inputData");

            td.appendChild(inputConfirm);
            td.appendChild(inputCancel);
            td.appendChild(inputData);
            td.appendChild(img);
            td.appendChild(textCont);
            tr.appendChild(td);
            
            img.onclick = function(e){
                var target = e.target;
                target.parentNode.children[0].setAttribute("style", "display:block");
                target.parentNode.children[1].setAttribute("style", "display:block");
                target.parentNode.children[2].setAttribute("style", "display:block");
                target.parentNode.children[2].focus(); 
                target.parentNode.children[2].select();
                target.parentNode.children[3].setAttribute("style", "display:none");
            }
            
            inputConfirm.onclick = function(e){
              var target = e.target;
              var temp = target.parentNode.textContent;
              var re = /^[0-9]+.?[0-9]*/;
              console.log('hello')
              if(!re.test(target.parentNode.children[2].value)){
                alert("please print a number");
                target.parentNode.children[2].value = temp;
              }
              else {
                target.parentNode.children[0].setAttribute("style", "display:none");
                target.parentNode.children[1].setAttribute("style", "display:none");
                target.parentNode.children[2].setAttribute("style", "display:none");
                target.parentNode.children[3].setAttribute("style", "display:block");

                var newDate ={}
                var sale =[];

                var tr = e.target.parentNode.parentNode;
                var inputData = tr.getElementsByClassName("inputData");

                if(table.rows[0].cells[0].innerHTML=="商品"){
                  newDate["product"] = tr.cells[0].innerHTML;
                  newDate["region"] = tr.cells[1].innerHTML;
                  for(let i=0; i<inputData.length;i++){
                    sale.push(Number(inputData[i].value));
                  }
                  newDate["sale"] = sale;
                }
                else {
                  newDate["product"] = tr.cells[1].innerHTML;
                  newDate["region"] = tr.cells[2].innerHTML;
                  for(let i=0; i<inputData.length;i++){
                    sale.push(Number(inputData[i].value));
                  }                                  
                }
                storage(newDate);
              }
              getData();
              createTable();
              mergeCell(1,0);
            }
           
           inputCancel.onclick = function(e){
              var target = e.target;
              var temp = target.parentNode.textContent;
              target.parentNode.children[0].setAttribute("style", "display:none");
              target.parentNode.children[1].setAttribute("style", "display:none");
              target.parentNode.children[2].setAttribute("style", "display:none");
              target.parentNode.children[3].setAttribute("style", "display:block");
              target.parentNode.children[2].value =temp;

           }
          
         inputData.onkeydown = function(e){
              if(e.keyCode=="27"){
              this.parentNode.children[0].setAttribute("style", "display:none");
              this.parentNode.children[1].setAttribute("style", "display:none");
              this.parentNode.children[2].setAttribute("style", "display:none");
              this.parentNode.children[3].setAttribute("style", "display:block");                
              }
              else if(e.keyCode=="13"){
              let re = /^[0-9]+.?[0-9]*/;
              if(!re.test(this.parentNode.children[2].value)){
                alert("please print a number");
                target.parentNode.children[2].value = temp;
              }
              else {
                this.parentNode.children[0].setAttribute("style", "display:none");
                this.parentNode.children[1].setAttribute("style", "display:none");
                this.parentNode.children[2].setAttribute("style", "display:none");
                this.parentNode.children[3].setAttribute("style", "display:none");

                var newDate ={}
                var sale =[];

                var tr = e.target.parentNode.parentNode;
                var inputData = tr.getElementsByClassName("inputData");

                if(table.rows[0].cells[0].innerHTML=="商品"){
                  newDate["product"] = tr.cells[0].innerHTML;
                  newDate["region"] = tr.cells[1].innerHTML;
                  for(let i=0; i<inputData.length;i++){
                    sale.push(Number(inputData[i].value));
                  }
                  newDate["sale"] = sale;
                }
                else {
                  newDate["product"] = tr.cells[1].innerHTML;
                  newDate["region"] = tr.cells[2].innerHTML;
                  for(let i=0; i<inputData.length;i++){
                    sale.push(Number(inputData[i].value));
                  }
                  newDate["sale"] = sale;                                    
                }
                storage(newDate);
              }
              getData();
              createTable();
              mergeCell(1,0);                
              }
         }
          
           inputData.onblur = function(e){
              let target = e.target;
              let temp = target.parentNode.textContent;
              setTimeout(function(e){
              target.parentNode.children[0].setAttribute("style", "display:none");
              target.parentNode.children[1].setAttribute("style", "display:none");
              target.parentNode.children[2].setAttribute("style", "display:none");
              target.parentNode.children[3].setAttribute("style", "display:block");              
              target.parentNode.children[2].value = temp;
              },266);

           }

    			}
    		}
    		}
    	}
    	table.appendChild(tr);
    }
    wrapper.appendChild(table);
}