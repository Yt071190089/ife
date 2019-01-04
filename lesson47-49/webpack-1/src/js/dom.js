import {customerQueue} from './customerQueue.js';

let cusjpg = require('../images/customer.jpg');
let queue = document.querySelector("#queue");

function createDomQueue(){
	for(let i in customerQueue){
		let img = document.createElement("img");
		img.src = cusjpg;
		img.style.width = "80px";
		queue.appendChild(img);
	}
}

export {createDomQueue};