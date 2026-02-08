// password generator with the special symbol , alphabets ,numbers

function password_generation(a){
   // var alphabet = "`1234567890-=~!@#$%^&*()_+{}|[]:./M<>qwertyuiopasdfghjklzxcvbnm,"

    if (a < 8)
    { 
         return "Password length must be 8 characters."
    }

    var number = "1234567890"

    var lower = "Mqwertyuiopasdfghjklzxcvbnm"

    var upper = "ASDFGHJKLZXCVBNMQWERTYUIOP"
    
    var special = "`-=~!@#$%^&*()_+{}|[]:./<>"

    number = number.split("")

    upper = upper.split("")

    lower  = lower.split()

    special = special.split("")

    var index=0;

    var pass = []

    while(pass.length != a)
    {
        for(j = 0; j < 2; j++)
        {
            index = random(1,10);
            pass[j]= number[index];
        }

        for(k = 0; k < 2; k++ )
        {
             len = pass.length;
             index = random(1,28);
             pass[len+1]= special[index];
        }

        for(d = 0; d < 1; d++)
        {
             len = pass.length;
             index = random(1,26);
             //pass[len-1]= upper[index]; 
        }

        

     //     for(f= ; f < ; f++)
     //    {
     //         len = pass.length;
     //         index = random(1,26);
     //         pass[len+1]= lower[index]; 
     //    }

        

    }



  console.log(pass)


     const str = pass.join("")

    // console.log("Your password = " + str)

}


function random(min,max)
{
     var rand = Math.floor(Math.random() * max);
     return rand;
}
function main(){
    

     let len = prompt("enter the lenght of the password to generate:")

    console.log( password_generation(len));
}

main()