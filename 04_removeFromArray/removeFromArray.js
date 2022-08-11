const removeFromArray = function(array, ...data) {
for(let i=0;i<array.length;i++){
    if(data===array[i]){
        array.splice(i,1);
    }
}
};

// Do not edit below this line
module.exports = removeFromArray;
