// password generator with the special symbol , alphabets ,numbers

function password_generation(len){
   

    if (len < 8 || len > 20)
    { 
         return "Password length must be 8 characters & not above 20."
    }

    var number = "1234567890"

    var lower = "mqwertyuiopasdfghjklzxcvbnm"

    var upper = "ASDFGHJKLZXCVBNMQWERTYUIOP"
    
    var special = "`-=~!@#$%^&*()_+{}|[]:./<>"

    number = number.split("")

    upper = upper.split("")

    lower  = lower.split("")

    special = special.split("")

    var index=0;

    var pass = []

    var result = []

    var i,j,k,T;

    var  count = 0;

    if(len < 10)                                              // If password length is less than 10;
    {

         for(i=0;i<1;i++)
         {
              index = random(0,9);
              pass[count] = number[index];
              count++;
         }

         for(j=0;j<1;j++)
         {
            index = random(0,32);
            pass[count]= special[index];
            count++;
         }

         for(k=0;k<1;k++)
         {
             index = random(0,25);
             pass[count] = upper[index];
             count++;
         }

         for(T=count; T<len; T++)
         {
            index = random(0,25);
            pass[count] = lower[index];
            count++;
         }
    }

    if(len >= 10)                                           // If password length is greater than 10;
    {

         for(i=0;i<2;i++)
         {
              index = random(0,9);
              pass[count] = number[index];
              count++;
         }

         for(j=0;j<2;j++)
         {
            index = random(0,32);
            pass[count]= special[index];
            count++;
         }

         for(k=0;k<2;k++)
         {
             index = random(0,25);
             pass[count] = upper[index];
             count++;
         }

         for(T=count; T<len; T++)
         {
            index = random(0,25);
            pass[count] = lower[index];
            count++;
         }

    }

    console.log(pass)

    var num = 0;

    prev_index = -1;

    var min = 0;

    var max = pass.length - 1;

    while(result.length <= pass.length)
    {
        index = random(min,max);

        if(prev_index == index)
        {
          continue;
        }
        else
        {
          result[num] = pass[index];
          prev_index = index;
          num++;
        }
    }

   
     const str = result.join("")

     console.log("Your password = " + str)

}


function random(min,max)                                // function random to detect the random index.
{ 
     var rand = Math.random() * max;
     rand = Math.floor(rand);
     return rand;
}


function main(){
    

    let len = prompt("enter the lenght of the password to generate:")

    console.log( password_generation(len));
}

main()