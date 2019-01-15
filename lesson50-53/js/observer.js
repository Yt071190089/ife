class Observer{
	constructor(){
		this.clientList ={};
	}

	static getInstance(){
		if(!this.instance){
			this.instance = new Observer();
		}
		return this.instance;
	}

	setListener(type,fn){
		if(!this.clientList[type]){
			this.clientList[type]= [];
		}
		this.clientList[type].push(fn);
	}

	trigger(type,content){
		if(!this.clientList[type]){
			return false;
		}
		for(let i=0;i<this.clientList[type].length;i++){
			this.clientList[type][i](content);
		}
	}
	cancelListener(type,fn){
		let fns = this.clientList[type];
         if(!fns){
         	return false;
         }
         for(let i=0;i<fns.length;i++){
         	let _fn= fns[i];
         	if(_fn===fn){
         		fns.splice(i,1);
         	}
         }

	}
}