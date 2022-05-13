
let theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];

//your code here
 let wokoWiki = function(result){
	if(result === 0) {
        return "woko";
    } else {
        return "wiki";
    }
};

console.log(theBools.map(wokoWiki));