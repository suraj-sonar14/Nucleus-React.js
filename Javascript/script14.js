
function arr_bassic(){
    var arr = [1,2,3,4,5]
    console.log(arr)
    console.log(arr.length)
}

function arr_add(arr){
    if(typeof(arr) !== "object"){
        return "PLEASE ENTER CORRECT VALUE"
    }

    sum  = 0
    for(let i = 0;i<arr.length;i++){
        sum+=arr[i]
    }
    return sum
}

function arr_sort(arr){
    if(typeof(arr) !== "object"){
        return "PLEASE ENTER CORRECT VALUE"
    }
    var temp;
   
    for(var i = 0;i<arr.length;i++){
        for(var j= i+1 ;j<arr.length;j++){
            
            if(arr[i]>arr[j])
            {
               temp = arr[i];
               arr[i]=arr[j];
               arr[j]=temp;
            }
        }
    }
    return arr
}

var a ;
function main(){
    var a = arr_sort([8,4,2,5,1])
    console.log(a)
}

main()