function renderLine(){

  function numsList(){
    nums=[];
    for(let i=0;i<list.length;i++){
       nums.push(list[i]["sale"]);
    }
    return nums;
    } 
    
   var numsList = nums;     
   var lineWrapper = document.getElementById("line-wrapper");
   lineWrapper.innerHTML = "";

   var colorList = ["#60acfc","#32d3eb","#5bc49f","#feb64d","#ff7c7c","#9287e7"];
   var numsList = nums;

   function getMax(){
    var arrMax= [];
    for(var i=0;i<numsList.length;i++){
        var arrs = numsList[i];
        var maxNum = Math.max.apply(null,arrs);
        arrMax.push(maxNum);
    }
    var max = Math.max.apply(null,arrMax);
    return max;
   }
  
   var max = getMax();

   var canvas = document.createElement("canvas");
   canvas.setAttribute("id","line");
   canvas.setAttribute("width","650");
   canvas.setAttribute("height","330")
   lineWrapper.appendChild(canvas);

   if(canvas.getContext){
   	var ctx = canvas.getContext("2d");
   	ctx.save();
   	ctx.beginPath();

   	ctx.moveTo(30.5,60);
   	ctx.lineTo(30.5,270);
   	ctx.lineTo(630.5,270);
   	ctx.stroke();

   	//y轴刻度
   	for(var i=0;i<6;i++){
   		ctx.beginPath();
   		let y = 60.5 +35*i;
   		let valueY = 1.2*max*(6-i)/6;
   		ctx.moveTo(25,y);
   		ctx.lineTo(30.5,y);
   		ctx.strokeStyle = "black";
   		ctx.stroke();
   		ctx.beginPath();
   		ctx.moveTo(30.5,y);
   		ctx.lineTo(630.5,y);
   		ctx.strokeStyle="#dbdbdb";
   		ctx.stroke();
   		ctx.font = "12px 微软雅黑";
   		ctx.fillText(valueY,0,y+5);

   	}

   	//x轴刻度
   	for(var j=0;j<12;j++){
   		ctx.beginPath();
   		let x = 30.5 + 50*j;
   		let text = (j+1)+"月";
   		ctx.moveTo(x,270);
   		ctx.lineTo(x,275);
   		ctx.strokeStyle="black";
   		ctx.stroke();
   		ctx.font ="12px 微软雅黑";
   		ctx.fillText(text,x-9,290);

   	}
    function lines(){
    	var length = numsList.length;
    	for (let i=0;i<length;i++){
    	   let singeProduct = numsList[i];
    	   var nums = i;
           var colors = colorList[nums%6];
           for(let j=0;j<singeProduct.length;j++){
               let x1 = 30.5+50*j;
               let y1 = 270-singeProduct[j]/(1.2*max)*210;
               let x2 = 30.5+50*(j+1);
               let y2 = 270-singeProduct[j+1]/(1.2*max)*210;
               ctx.beginPath();
               ctx.fillStyle = colors;
               ctx.arc(x1,y1,3,0,Math.PI*2);
               ctx.fill();
               if(x2){
                 ctx.beginPath();
                 ctx.moveTo(x1,y1);
                 ctx.lineTo(x2,y2);
                 ctx.strokeStyle = colors;
                 ctx.stroke();
               }
           }
    	}
    }
    lines();

   }



}