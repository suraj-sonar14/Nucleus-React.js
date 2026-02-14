function main()
{
    var a = 12321;

    var b = a.toString()
    
    b =  b.split("").reverse().join("")
   
    console.log("A:"+ a)

    console.log("B:"+ b)

    if(a==b)
    {
        console.log("palindrome Number")
    }
    else
    {
         console.log("Not a palindrome")
    }

    console.log(typeof(b))

    console.log(typeof(a))
}

main()