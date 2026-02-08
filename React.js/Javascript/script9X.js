
function add(...arr){
    
    var n = arr.length

    add = 0;

    for(var i = 0;i<n;i++){
        add += arr[i];
    }

    return add;
}

function main(){
    console.log(add(1,2,3,4,5,6,7,8,9,10,100))
}

main()