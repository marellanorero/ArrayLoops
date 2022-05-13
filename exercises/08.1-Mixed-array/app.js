var mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];
let empty  = [];
//your code here

for(let i = 0; i < mix.length; i++){
    empty.push(typeof(mix[i]))
}
console.log(empty )
