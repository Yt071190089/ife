function numsList(){
    let nums=[];
    for(let i=0;i<list.length;i++){
       nums.push(list[i]["sale"]);
    }
    return nums;
}

function renderBar(nums){
    var numsList = nums;
    var xmls  = "http://www.w3.org/2000/svg";
    var barWrapper = document.getElementById("bar-wrapper");
    barWrapper.innerHTML = "";

    var colorList = ["#60acfc","#32d3eb","#5bc49f","#feb64d","#ff7c7c","#9287e7"];

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

    // 创建svg元素需要传入命名空间，其他与创建HTML元素类似
    var svgDom = document.createElementNS(xmls,"svg");
    svgDom.setAttribute("width", "650");
    svgDom.setAttribute("height", "330");
    barWrapper.appendChild(svgDom);

    //y轴最大高度为210
    var lineY = document.createElementNS(xmls,"line");
    lineY.setAttribute("x1","30.5");
    lineY.setAttribute("y1","60");
    lineY.setAttribute("x2","30.5");
    lineY.setAttribute("y2","270");
    lineY.setAttribute("style","stroke:black");
    svgDom.appendChild(lineY);

    for(var i=0;i<6;i++){
        let y = 60.5 + 35*i;
        let valueY = max*(6-i)/5;
        var scaleY1= document.createElementNS(xmls,"line");
        scaleY1.setAttribute("x1", "30.5");
        scaleY1.setAttribute("y1", y);
        scaleY1.setAttribute("x2", "630");
        scaleY1.setAttribute("y2", y);
        scaleY1.setAttribute("style","stroke:#dbdbdb;");
        svgDom.appendChild(scaleY1);

        var scaleY2 = document.createElementNS(xmls,"line");
        scaleY2.setAttribute("x1", "30.5");
        scaleY2.setAttribute("y1", y);
        scaleY2.setAttribute("x2", "25");
        scaleY2.setAttribute("y2", y);
        scaleY2.setAttribute("style","stroke: #000");
        svgDom.appendChild(scaleY2); 

        var textY = document.createElementNS(xmls,"text");
        textY.setAttribute("x", 0);
        textY.setAttribute("y", y + 5);
        textY.setAttribute("style", "font-size:13;font-family:微软雅黑");
        textY.innerHTML = valueY;
        svgDom.appendChild(textY);              
    }

    var lineX = document.createElementNS(xmls,"line");
    lineX.setAttribute("x1","30.5");
    lineX.setAttribute("y1","270");
    lineX.setAttribute("x2","630.5");
    lineX.setAttribute("y2","270");
    lineX.setAttribute("style","stroke:black");
    svgDom.appendChild(lineX);

    for(var j=0;j<12;j++){
        let x = 30.5 + 50*(j+1);
        text = (j+1)+"月";
        var scaleX = document.createElementNS(xmls,"line");
        scaleX.setAttribute("x1",x);
        scaleX.setAttribute("y1",270);
        scaleX.setAttribute("x2",x);
        scaleX.setAttribute("y2",275);
        scaleX.setAttribute("style","stroke: #000");
        svgDom.appendChild(scaleX); 

        var textX = document.createElementNS(xmls,"text");
        textX.setAttribute("x", x-38);
        textX.setAttribute("y", 290);
        textX.setAttribute("style", "font-size:13;font-family:微软雅黑");
        textX.innerHTML = text;
        svgDom.appendChild(textX);         
    }

function renderRect(){

   var length = numsList.length;
   var perLength;

   for(var i=0;i<length;i++){

    let singeProduct = numsList[i];
    var nums = i;
    var colors = colorList[nums%6];
    perLength = 40/length;
    for(var j=0;j<singeProduct.length;j++){
        let x = 30.5+50*j+5+ perLength*nums;
        let y = singeProduct[j]/(1.2*max)*210;
        var bar = document.createElementNS(xmls,"rect");
        bar.setAttribute("width",perLength);
        bar.setAttribute("height",y);
        bar.setAttribute("x",x);
        bar.setAttribute("y",269.5-y);
        bar.setAttribute("style","fill:"+colors);
        svgDom.appendChild(bar);
    }
   }
  }
     renderRect();
     
}

