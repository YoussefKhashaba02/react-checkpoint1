var arr=[1,4,-5,3,-2,10,-6,20];
function fun(a){
var min=0;
var d=9999999999999999999999;
for(var i=0;i<arr.length;i++){
    for(var j=i+1;j<arr.length;j++){
        
        if(arr[i]+arr[j]==0){
            return 0;
        }
        
        if((arr[i]+arr[j])>0 && (arr[i]+arr[j])<d){
            d=arr[i]+arr[j];
            min=arr[i]+arr[j];
        }
        
        if((arr[i]+arr[j])<0 && 0-(arr[i]+arr[j])<d){
            d=0-(arr[i]+arr[j]);
            min=arr[i]+arr[j];
        }
        
    }
    
}
return min;
}
 console.log(fun(arr));