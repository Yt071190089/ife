import {IfeRestaurant,singleCook,singleWaiter} from './js/iferestaurant.js';
import {operating} from './js/open.js';
import {createDomQueue} from './js/dom.js';
import {customerIn} from './js/animate.js';
import './css/index.css';


let restaurant = new IfeRestaurant({
	cash: 1000000,
	seats:1,
	staff: []
});

let cook = singleCook.getCook("老李",10000);
let waiter = singleWaiter.getWaiter("小王",8000);
let btn = document.querySelector("#btn");

restaurant.hire(cook);
restaurant.hire(waiter);
createDomQueue();
btn.onclick =customerIn;
