let pubsub = {};
(function(q){
    let lists=[];
    let subUid = -1;
    q.publish = function(type,content){
        if(!lists[type]){
        	return false;
        }
        setTimeout(function(){
            let subscribers = lists[type];
            let len = subscribers.length;

            while(len--){
            	subscribers[len].func(type,content);
            }
          
          return true;
        },0);
    }

    q.subscribe =function(type,func){
       if(!lists[type]){
       	lists[type]= [];
       }
       let token = (++subUid).toString()
       lists[type].push({
          token:token,
          func:func
       })
       return token;
    }

    q.unsubscribe = function(token){
    	for(let m in lists){
    		if(lists[m]){
    			for(let i=0,j=lists.length;i<j;i++){
    				if(lists[m][i].token===token){
    					lists[m].splice(i)
    				}
    			}
    		}
    	}
    	return false;
    }
    
})(pubsub);

var girlA = pubsub.subscribe('js类的文章', function (type, content) {
    console.log('girlA订阅的'+type + ": 内容内容为：" + content);
});
var girlB = pubsub.subscribe('js类的文章', function (type, content) {
    console.log('girlB订阅的'+type + ": 内容内容为：" + content);
});
var girlC = pubsub.subscribe('js类的文章', function (type, content) {
    console.log('girlC订阅的'+type + ": 内容内容为：" + content);
});

pubsub.publish('js类的文章', '关于js的内容'); 