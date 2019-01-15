// import { operating } from './open.js';

function customerIn(){
	let seats = document.querySelectorAll(".seats");
	let states = restaurant.state;


    for(let i=0;i<states.length;i++){
    let customers = document.querySelectorAll("#queue .guest");
      if(states[i].state==false){
      	if(!customers[0]) return;
		let seatsNum = states[i].num;
		customers[0].style.position = 'absolute';
		customers[0].setAttribute("class",i);
		let l = customers[0].offsetLeft;
		let t = customers[0].offsetTop;
		let finalLeft = 480;
		//根据座位的序号计算位置
		let finalTop=states[i].num*120;
		let timer = setInterval(()=>{
			if(l!==finalLeft){
				l+=1;
			    customers[0].style.left = l+"px";
			}
			if(t!==finalTop){
				customers[0].style.top = t++ +"px";
			}
			if(l===finalLeft && t===finalTop){
				// 顾客入座后服务员到顾客旁边开始点菜并开始其他一系列动作
				// waitersMove必须监测，必须有waiters可以，不然后面operating会报错
				states[i].state = true;

				// let waitersNum = waiterMove(finalLeft,finalTop,seatsNum);
				waiterMove(finalLeft,finalTop,seatsNum);
				// operating(seatsNum,waitersNum);
				// customers.shift();
				clearInterval(timer);
			}
		},10);
		// setTimeout(customerIn,5000);
		break;
	}
    }

}

function customerOut(n){
	// let customers = document.querySelectorAll("#queue img");
	// let content = document.querySelector("#content");
	// let queue = document.querySelector("#queue");

	// if(customers[0]){
	// 	let cus = customers[0];
	// 	cus.style.top = 300+ 'px';
	// 	queue.removeChild(cus);
	// 	content.appendChild(cus);

	// 	let finalTop =640;
	// 	let top  =cus.offsetTop;
	// 	let timer = setInterval(()=>{
	// 		if(top<finalTop){
	// 			cus.style.top = top++ +'px';
	// 		}else if(content.contains(cus)){
	// 			content.removeChild(cus);
	// 		}
	// 	},5)
	// }
	let cusOut = document.getElementsByClassName(n)[0];
	let queue = document.querySelector("#queue");

	let finalTop =440;
	let top  =cusOut.offsetTop;
	let timer = setInterval(()=>{
		if(top<finalTop){
			cusOut.style.top = top++ +'px';
		}else{
			clearInterval(timer);
			queue.removeChild(cusOut);
		}
	},5)
}

// 服务员移动到顾客旁边
// 如果此时没有空闲的服务员，会返回undefined

function waiterMove(left,top,seatsNum){
	let waiters = document.querySelectorAll(".waiter");
    let waitersNum;

   let timer = setInterval(function(){
   	  for(let i=0;i<waiterArr.length;i++){
   	  	if(waiterArr[i].state===false){
   	  		console.log('i am coming');
   	  		waitersNum =i;
            waiters[i].style.left = 120 + "px";
            waiters[i].style.top = top+100 + "px";
            waiterArr[i].state = true;
            clearInterval(timer);
            operating(seatsNum,waitersNum);
            break;
            // console.log(waitersNum);
            // return waitersNum;   	  		
   	  	}
   	  }
   },100);

};

function waiterMove1(left,top,seatsNum,sName,lia){
	let waiters = document.querySelectorAll(".waiter");
    let waitersNum;

   let timer = setInterval(function(){
   	  for(let i=0;i<waiterArr.length;i++){
   	  	if(waiterArr[i].state===false){
   	  		console.log('i am coming');
   	  		waitersNum =i;
            waiters[i].style.left = 120 + "px";
            waiters[i].style.top = top+100 + "px";
            waiterArr[i].state = true;
            clearInterval(timer);
            setTimeout(function(){
            	f2([sName,lia,i]);
            },500)
            // f2([sName,lia,i]);
            break;
            // console.log(waitersNum);
            // return waitersNum;   	  		
   	  	}
   	  }
   },100);	
}

// 服务员回到厨师旁边
function waiterBack(waitersNum){
	let waiters = document.querySelectorAll(".waiter");
	console.log("i am back");
	waiters[waitersNum].style.left = (60*waitersNum)+ 'px';
	waiters[waitersNum].style.top = 0+'px';
}



// export {customerIn, customerOut, waiterMove,waiterBack};