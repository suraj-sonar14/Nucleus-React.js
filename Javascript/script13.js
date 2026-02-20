// PASSWORD GENERATOR
function password_generation(a){
    var chars = "`1234567890-=~!@#$%^&*()_+{}|[]:./M<>qwertyuiopasdfghjklzxcvbnm,"

    chars = chars.split("")


      var pass=[];


     for(var i = 0; i< a; i++){

        var index = random(1,58);
     
        pass[i] = chars[index];

     }

     const str = pass.join("")

     console.log("Your password = " + str)

}


function random(min,max)
{
     var rand = Math.floor(Math.random() * max);
     return rand;
}
function main(){
    

     let len = prompt("enter the lenght of the password to generate:")

     password_generation(len);
}

main()