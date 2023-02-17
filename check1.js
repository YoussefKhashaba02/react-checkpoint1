var s= "My name is Youssef";
let nvowels=0;
let nspaces=0;

for(var i=0;i<s.length;i++){
    if(s[i]== " "){
        nspaces++;
    }
    if(s[i]== "a"||s[i]== "e"||s[i]== "i"||s[i]== "o"||s[i]== "u"){
        nvowels++;
    }
}
console.log("Vowels: "+nvowels);
console.log("Spaces: "+nspaces);

var sum=0;
var arr1=[3,1,7,9];
var arr2=[2,4,1,9,3];
for(var i=0;i<arr1.length;i++){
    var j=0
    for(;j<arr2.length;j++){
        if(arr1[i]==arr2[j]){
            break;
        }
    }
    if(j==arr2.length){
        sum+=arr1[i];
    }
}
for(var i=0;i<arr2.length;i++){
    var j=0
    for(;j<arr1.length;j++){
        if(arr2[i]==arr1[j]){
            break;
        }
    }
    if(j==arr1.length){
        sum+=arr2[i];
    }
}
console.log("sum: " +sum)