import {delay} from './delay.js';

class IfeRestaurant{
	constructor(obj){
		this.cash = obj.cash || 1000000;
		this.seats = obj.seats ||1;
		this.staff = obj.staff || [];
	}

	hire(employee){
		this.staff.push(employee);
	}

	fire(name){
		this.staff = this.staff.filter((item) =>{
			return item.name !== name;
		})
	}
}

let id = 1;

class Staff{
	constructor(name,salery){
		this.name = name;
		this.salery = salery;
		this.id = id++;
	}

	finishWork(){}
}

class singleCook extends Staff{
	constructor(name,salery,status){
		super(name,salery,id);
		this.status = "空闲中";
	}
	finishWork(arr){
		let firstDishes = arr.shift();
		let _this = this;
		return Promise.resolve().then(
			function(){
				if(firstDishes){
					console.log('烹饪中......');
					let t = firstDishes.cookingTime;
					let timer = setInterval(() =>{
                         _this.status = `正在做${firstDishes.name},还需要${t-1}s`;
                         t--;
                         if(t===0){
                         	clearInterval(timer);
                         }
					},1000);
				}
				return delay(firstDishes.cookingTime*1000);
			}).then(function(){
				console.log(`${firstDishes.name}做好了，上菜！`);
				_this.status = '空闲中';
				singleWaiter.getWaiter().finishWork(firstDishes.name);
				return delay(50);
			})
	}
	static getCook(name,salery){
		if(!this.instance){
			this.instance = new singleCook(name,salery);
		}
		return this.instance;
	}
}

class singleWaiter extends Staff{
	constructor(name,salery){
		super(name,salery,id);
	}

	finishWork(task){
		if(Array.isArray(task)){
			let arr=[];
			for(let index in task){
				arr.push(task[index].name)
			}
			let str = arr.join(",");
			console.log(`顾客点了一份${str}`);
			console.log(`服务员：大厨，做一份${str}`);
		}
		else {
			console.log(`${task}来了`);
		}
	}

	static getWaiter(name,salery){
		if(!this.instance){
			this.instance = new singleWaiter(name,salery);
		}
		return this.instance;
	}
}

class Dishes{
	constructor(name,cost,price,cookingTime){
		this.name = name;
		this.cost = cost;
		this.price = price;
		this.cookingTime = cookingTime;
	}
}

let dishes = [
    new Dishes("麻辣小龙虾",30,58,5),
    new Dishes("酸辣土豆丝",8,15,3),
    new Dishes("肉末茄子",12,25,3),
    new Dishes("水煮肉片",18,38,4),
    new Dishes("酸菜鱼",25,52,4)
];

function getMenu(){
	let menu = [];
	for(let i in dishes){
		let obj = {};
		obj.name= dishes[i].name;
		obj.price = dishes[i].price;
		obj.cookingTime = dishes[i].cookingTime;
		menu.push(obj)
	}
	return menu;
}

let menu = getMenu();

class Customer{
	constructor(){
		this.dishes=[];
		this.needPay = 0;
		this.count = [];
		this.eaten = 0;
	}

	order(){
		let m = Math.floor(Math.random()*5) +1;
		for(let i=0;i<m;i++){
			let n = Math.floor(Math.random()*menu.length);
			this.dishes.push(menu[n]);
		}
		console.log('点餐中......');
	}
	eat(){
		let _this = this;
		if(!this.eaten){
			console.log('顾客开始用餐......');
		}
		Promise.resolve().then(function(){
			return delay(3000);
		}).then(function(){
			_this.count.shift();
		})
		_this.eaten++;
	}
	pay(arr){
		let _this =this;
		for(let i in arr){
			_this.needPay +=arr[i].price;
		}
		console.log('小二，结账');
		console.log(`一共${this.needPay}元`);
        console.log("-------顾客离开了-------");
	}
}

export {IfeRestaurant,Staff,singleWaiter,singleCook,Dishes,Customer,menu}