let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};
let nuevo = par.toLowerCase().replace(/ /g, "");

// your code here

for(let i = 0; i<nuevo.length; i++){
    counts[nuevo[i]] = ( counts[nuevo[i]] || 0 ) + 1; // Incrementamos el valor si el elemento ya existe
}

console.log(counts);