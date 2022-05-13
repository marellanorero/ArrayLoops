function lyricsGenerator(arr) {
    let string = "";
    for (let i = 0; i < arr.lenght; i++) {
        if (arr[i] === 0) {
            string += "Boom ";
        } else if (arr[i] === 1) {
            string += "Drop the base ";
            if(arr[i]+1  === 1 && arr[i] +2 === 1){
                string += '!!!Break the base!!! ';
            }
        }
    }
    return string;
}
// test Data
console.log(lyricsGenerator([0, 0, 1, 1, 0, 0, 0]))
console.log(lyricsGenerator([0, 0, 1, 1, 1, 0, 0, 0]))
console.log(lyricsGenerator([0, 0, 0]))
console.log(lyricsGenerator([1, 0, 1]))
console.log(lyricsGenerator([1, 1, 1]))