// import {customerQueue} from './customerQueue.js';

let queue = document.querySelector("#queue");

function createDomQueue(){
	for(let i in customerQueue){
		let img = document.createElement("img");
		img.src = "./images/customer.jpg";
		img.style.width = "80px";
		img.setAttribute("class","guest");
		queue.appendChild(img);
	}
}

// export {createDomQueue};