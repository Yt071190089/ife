// import {IfeRestaurant,singleCook,singleWaiter} from './js/iferestaurant.js';
// import {operating} from './js/open.js';
// import {createDomQueue} from './js/dom.js';
// import {customerIn} from './js/animate.js';


// let restaurant = new IfeRestaurant({
// 	cash: 1000000,
// 	seats:1,
// 	staff: []
// });

// let cook = singleCook.getCook("老李",10000);
// let waiter = singleWaiter.getWaiter("小王",8000);
let btn = document.querySelector("#btn");
let Event= Observer.getInstance();
Event.setListener("arrive",customerIn);
Event.setListener("back",f1);
Event.setListener("serving",f2);
Event.setListener("goaway",f3);
Event.setListener("findWaiter",operating);


// restaurant.hire(cook1);
// restaurant.hire(waiter);
createDomQueue();
btn.onclick =function(){
	Event.trigger("arrive");
    setTimeout(customerIn,5000);
    setTimeout(customerIn,10000);
};

