// import {IfeRestaurant,Staff,singleWaiter,singleCook,Dishes,Customer} from './iferestaurant.js';
// import {customerQueue} from './customerQueue.js';
// import {delay} from './delay.js';
// import  {customerIn,customerOut,waiterMove,waiterBack} from './animate.js';

let restaurant = new IfeRestaurant({
	cash:1000000,
	seats: 3,
	staff: [],
  state: [{state:false,num:0,cus:{}},{state:false,num:1,cus:{}},{state:false,num:2,cus:{}}]
})

// let cook1 = new Cook("老李",10000);
// let waiter = singleWaiter.getWaiter("小王",8000);
let resCash = document.querySelector("#cash");
let spareSeats = document.querySelector("#spare-seats");
// let cookStatus = document.querySelectorAll("#cook-status")
// let cookStatus = document.querySelector("#cook-status");
let todoList = document.querySelector("#todoList");
let speak = document.querySelector("#speak");
// let cusStatus = document.querySelector("#cus-status");
let  cusStatus = document.querySelectorAll("#cus-status");
let addCook = document.querySelector("#addCook");
let addWaiter = document.querySelector("#addWaiter");
let cookList =["老李","老王","老张","老杨","老黄"];
let waiterList = ["lucy","jack","tom"];
let cookArr=[];
let waiterArr=[];
let todoArr =[];


addCook.onclick = function(){
   let name = cookList.shift();
   if(!name) return;
   let cook = new Cook(name,10000);
   cookArr.push(cook);
   cook.createCook();
   restaurant.hire(cook);
}

addWaiter.onclick = function(){
  let name = waiterList.shift();
  if(!name) return;
  let waiter = new Waiter(name,8000);
  waiterArr.push(waiter);
  waiter.createWaiter();
  restaurant.hire(waiter);
}

// restaurant.hire(cook1);
// restaurant.hire(waiter);


function operating(seatsNum,waitersNum){
	let cus = customerQueue.shift();
  let num = seatsNum;
  let num1=waitersNum;
  restaurant.state[num].cus = cus;

	Promise.resolve()
	     .then(function(){
	     	cus.order();
	     	cusStatus[num].innerHTML = "点餐中，还有3s点好";
	     	let t=3;
	     	let timer = setInterval(()=>{
	     		t--;
	     		if(t){
	     			cusStatus[num].innerHTML = `点餐中，还有${t}s点好`;
	     		}
	     		else {
	     			cusStatus[num].innerHTML = "";
	     			let ul = document.createElement("ul");
	     			ul.textContent = "点菜列表";
	     			for(let i=0;i<cus.dishes.length;i++){
	     				let li = document.createElement("li");
	     				li.innerHTML = cus.dishes[i].name;
	     				ul.appendChild(li);
	     			}
	     		cusStatus[num].appendChild(ul);
          cus.cost(cus.dishes);
          restaurant.cash -=cus.costPay;
          resCash.innerHTML = `cash:${restaurant.cash}`;
	     		clearInterval(timer);
	     		}
	     	},1000)
	     	restaurant.seats -=1;
	     	spareSeats.innerHTML =`seats:${restaurant.seats}`;
	     	return delay(3000);
	     })
	     .then(function(){
	     	waiterArr[num1].finishWork(cus.dishes,num); 
	     	waiterBack(num1);
	     	return delay(500);
	     })
	     .then(function(){
	     	let ordered = [].concat(cus.dishes);
	     	let ul2 = document.createElement("ul");
	     	ul2.setAttribute("id","eat-list");
	     	cusStatus[num].appendChild(ul2);
        waiterArr[num1].state = false;

        //监测更新TodoList的列表，选择一个厨师去做菜
        Event.trigger("back",[cus.dishes,num]);

	     	// function f(){
       //    console.log('zuo cai la');
	     	// 	cook.finishWork(cus.dishes)
	     	// 	     .then(function(){
       //                     let currentDishes = ordered.shift();
       //                     ordered.push(currentDishes);
       //                     speak.innerHTML = `${currentDishes.name}来了`;
       //                     let ul= cusStatus.querySelector("ul");
       //                     let lis = document.querySelectorAll("#seats1 ul li");
       //                     let li = document.createElement("li");

       //                     waiterMove();
       //                     li.textContent = currentDishes.name + "(等待吃)";
       //                     ul.removeChild(lis[0]);
       //                     ul2.appendChild(li);
       //                     setTimeout(()=>{
       //                     	speak.innerHTML = "";
       //                     },500);
       //                     cus.count.push(currentDishes);

       //                     if(cus.count.length >=1){
       //                     	function eating(){
       //                     		let eatList = document.querySelectorAll("#eat-list li");

       //                     		for(let i=0;i<eatList.length;i++){
       //                     			let _1st = eatList[0];

       //                     			let t=3;
       //                     			_1st.innerHTML = currentDishes.name + "...正在吃，剩余3s吃完";
       //                     			let timer = setInterval(()=>{
       //                     				t--;
       //                     				if(t){
       //                     					_1st.innerHTML = `${currentDishes.name}...正在吃，剩余${t}吃完`;

       //                     				}else {
       //                     					_1st.innerHTML = `${currentDishes.name}...吃完了`;
       //                     					if(_1st.parentNode ===ul2){
       //                     						ul2.removeChild(_1st);
       //                     					}
       //                     					ul.appendChild(_1st);
       //                     					clearInterval(timer);
       //                     				}
       //                     			},1000)
       //                     		}
       //                     	}
       //                     	eating();
       //                     	cus.eat();
       //                     }
       //                     if(cus.dishes.length===0){
       //                     	// 如果厨师已经把菜做完，每隔500ms检测一次顾客有没有吃完
       //                     	  let timer = setInterval(()=>{
       //                     	  	   if(cus.count.length===0){
       //                     	  	   	   // 如果已经吃完，则付账并离开
       //                     	  	   	   cus.pay(ordered);
       //                     	  	   	   cusStatus.innerHTML = `顾客支付了${cus.needPay}元然后离开了`;
       //                     	  	   	   Promise.resolve().then(function(){
       //                     	  	   	   	     return delay(300)
       //                     	  	   	   }).then(function(){
       //                     	  	   	   	cusStatus.innerHTML = "";
       //                     	  	   	   });
       //                     	  	   	   customerOut();
       //                     	  	   	   // 更新餐馆现金和座位状态
       //                     	  	   	   restaurant.cash +=cus.needPay;
       //                     	  	   	   restaurant.seats +=1;
       //                     	  	   	   resCash.innerHTML = `cash:${restaurant.cash}`;
       //                     	  	   	   spareSeats.innerHTML = `seats:${restaurant.seats}`;
       //                     	  	   	   // 如果餐厅有空位并且有队列中有顾客等待,则顾客入座 
       //                     	  	   	   if(restaurant.seats>=1&&customerQueue.length){
       //                     	  	   	       customerIn();
       //                     	  	   	   }
       //                     	  	   	   clearInterval(timer);
       //                     	  	   }
       //                     	  },500)
       //                     }else if (cus.dishes.length) {
       //                     	    // 如果还有菜没做完，服务员回到厨师处并再次执行f()
       //                     	    Promise.resolve().then(function(){
       //                     	    	return delay(500) // 此处500ms是要等waiter从厨师身边移动到顾客身边
       //                     	    }).then(function(){
       //                     	    	speak.innerHTML = '';
       //                     	    	waiterBack();
       //                     	    })
       //                     	    f();
       //                     }
	     	// 	     });
       //           todoList.innerHTML ="代做菜品：";
       //           for(let i in cus.dishes){
       //           	let li = document.createElement("li");
       //           	let text = cus.dishes[i].name;
       //           	li.innerHTML =text;
       //           	todoList.appendChild(li);
       //           }
       //           let timer = setInterval(()=>{
       //           	cookStatus.innerHTML = cook.status;
       //           	if(!customerQueue.length){
       //           		clearInterval(timer);
       //           	}
       //           },200)
	     	// }
       //        f();
	     });
}

function f1(arr){
     let newDishes = arr[0];
     let num =arr[1];
     // todoList.innerHTML = '代做菜品:';
     Promise.resolve()
      .then(function(){
     outset:
     for(let i=0;i<newDishes.length;i++){
       let new1 = newDishes[i].name;
       let oldDishes = todoList.querySelectorAll("li");



       if(oldDishes.length==0){
            let li = document.createElement("li");
            let text = new1 +","+ num;
            li.innerHTML =text;
            todoList.appendChild(li); 
            todoArr.push(newDishes[i]);       
       }
       else{
        for(let j=0;j<oldDishes.length;j++){
          let old = oldDishes[j].innerHTML;
          if(old.indexOf(new1)>-1){
            old = old + ","+num;
            oldDishes[j].innerHTML = old;
            continue outset;
          }
        }
        let li = document.createElement("li");
        let text = new1 +","+ num;
        li.innerHTML = text;
        todoList.appendChild(li);
        todoArr.push(newDishes[i]); 
        }
     }        
      })
      .then(f5
          //选择一个厨师做菜;
          // let cooks = document.querySelectorAll(".cook");
          // let cookStatus = document.querySelectorAll("#cook-status");
          // let text = todoList.querySelector("li").innerHTML;
          // text = text.split(",");
          // // let sName=text.shift();

          // for(let i=0;i<cookArr.length;i++){
          //   if(cookArr[i].state==false){
          //     cookArr[i].state =true;
          //     let firstDishes = todoArr.shift();
          //     let lia = todoList.querySelector("li");
          //     if(!firstDishes) break;
          //     lia = lia.innerHTML.split(",");
          //     let sName = lia.shift();
          //     todoList.removeChild(todoList.childNodes[0]);

          //     cookArr[i].finishWork(firstDishes,lia).then(
          //         //触发上菜的事件，需要遍历服务员，找到空闲的，传递给服务员上菜的信息，同时遍历TODO，继续做下一个菜
          //         function(){
          //           cookArr[i].state = false;

          //           waiterMove1(120,lia[0]*120,lia[0],sName,lia);
          //           // Event.trigger("serving",[sName,lia]);
          //         }
          //       );
          //        let timer = setInterval(()=>{
          //          cookStatus[i].innerHTML = cookArr[i].status;
          //          if(!customerQueue.length){
          //            clearInterval(timer);
          //          }
          //        },200)              
          //   }
          // }
          
      )
}

//传递进来的参数是一个数组，数组的第一项是菜的名字，第二项是一个数组，有哪几桌的人点了这菜
function f2(arr){
    let name = arr[0];
    console.log(name);
    let num = arr[1];
    //如果有两桌同时都点了菜，我们默认选择服务员只去第一个桌
    let seatsNum = arr[1][0];
    // waiterMove1(120,seatsNum*120,seatsNum);
    for(let i=0;i<arr[1].length;i++){
      let n = arr[1][i]
      //给新上的菜创建li
      let lie = document.createElement("li");
      lie.textContent = name + "(等待吃)";

      //给位置上的菜添加新上的菜，同时删除菜单列表中的菜
      // let eatList = document.querySelectorAll("#eat-list");
      let cusstate = document.querySelectorAll("#cus-status");
      let fisrtUl =cusstate[n].querySelector("ul");
      let eatList = cusstate[n].querySelector("#eat-list");
      let lis = cusstate[n].querySelectorAll("li");
      let lis0 = fisrtUl.querySelectorAll("li");
      for(let i=0;i<lis0.length;i++){
        if(lis0[i].innerHTML==name){
          fisrtUl.removeChild(lis0[i])
        }
      }
      // fisrtUl.removeChild(lis[0]);
      eatList.appendChild(lie);

      function eat(){
        let last = eatList.querySelectorAll("li");
        // console.log(restaurant.state[num].cus);
        let newPush = last[last.length-1];
        let t=3;
         newPush.innerHTML = name + "...正在吃，剩余3s吃完";
        let timer = setInterval(()=>{
             t--;
             if(t){
              newPush.innerHTML = `${name}...正在吃，剩余${t}吃完`;

              }else {
              newPush.innerHTML = `${name}...吃完了`;
              if(newPush.parentNode === eatList){
                  eatList.removeChild(newPush);
                   }
              fisrtUl.appendChild(newPush);
              Event.trigger("goaway",[name,n]);
              clearInterval(timer);
              }

      },1000);

    }
    eat();
    let objCus = restaurant.state[n].cus;
    // objCus.count.push(name);
    if(objCus.count.length!=objCus.dishes.length)  {
      waiterBack(arr[2]);
      waiterArr[arr[2]].state = false;
    }  
   }
}

function f3(arr){
     // console.log(arr);
    let name= arr[0];
    let n = arr[1];
    let objCus = restaurant.state[n].cus;
    // console.log(objCus);
    objCus.count.push(name);
    if(objCus.count.length==objCus.dishes.length){
      console.log('wo yao jie zhang le ');
      objCus.pay(objCus.dishes);
      cusStatus[n].innerHTML = `顾客支付了${objCus.needPay}元然后离开了`;
      Promise.resolve().then(function(){
        return delay(300)
      }).then(function(){
        cusStatus[n].innerHTML ="";
      })
      customerOut(n);

      //更新餐厅的状态
      restaurant.cash +=objCus.needPay;
      restaurant.seats +=1;
      resCash.innerHTML = `cash:${restaurant.cash}`;
      spareSeats.innerHTML = `seats:${restaurant.seats}`;
      restaurant.state[n].state =false;
      restaurant.state[n].cus = {};
      if(restaurant.seats>=1&&customerQueue.length){
         customerIn();
      }

    }
}

function f5(){
          //选择一个厨师做菜;
          let cooks = document.querySelectorAll(".cook");
          let cookStatus = document.querySelectorAll("#cook-status");
          // let text = todoList.querySelector("li").innerHTML;
          // text = text.split(",");
          // let sName=text.shift();

          for(let i=0;i<cookArr.length;i++){
            if(cookArr[i].state==false){
              let firstDishes = todoArr.shift();
              let lia = todoList.querySelector("li");
              if(!firstDishes) return;
              cookArr[i].state =true;
              lia = lia.innerHTML.split(",");
              let sName = lia.shift();
              todoList.removeChild(todoList.childNodes[0]);

                 let timer = setInterval(()=>{
                   cookStatus[i].innerHTML = cookArr[i].status;
                   // if(!customerQueue.length){
                   //   clearInterval(timer);
                   // }
                 },200) 

              cookArr[i].finishWork(firstDishes,lia).then(
                  //触发上菜的事件，需要遍历服务员，找到空闲的，传递给服务员上菜的信息，同时遍历TODO，继续做下一个菜
                  function(){
                    cookArr[i].state = false;
                    clearInterval(timer);
                    cookStatus[i].innerHTML = "空闲中";
                    f5();
                    waiterMove1(120,lia[0]*120,lia[0],sName,lia);
                    // Event.trigger("serving",[sName,lia]);
                  }
                );
           
            }
          }  
}
// export {cook, waiter, operating}
