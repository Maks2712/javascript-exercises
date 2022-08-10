const repeatString = function(string,num) {
let res='';
let i=0;

if(num>0){
while (i<num){
    res+=string;
    i++
}
}
else if (num<0){
   res= 'ERROR'
}

return res;
};

// Do not edit below this line
module.exports = repeatString;
