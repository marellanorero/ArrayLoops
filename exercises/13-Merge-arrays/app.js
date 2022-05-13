var chunk_one = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
var chunk_two = [ 'Lucas' , 'Jake','Scott','Amy', 'Molly','Hannah','Lucas'];

const mergeArrays = (firstArray, secondArray) => {
    //your code here
    for(let i = 0; i < firstArray.length; i++){
        for(let x = 0; x < secondArray.length; x ++){
            return firstArray.concat(secondArray)
        }
    }
}

console.log(mergeArrays(chunk_one, chunk_two));