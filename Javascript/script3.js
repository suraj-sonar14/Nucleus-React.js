function main()
{
    var a = 10;
    var b = 10;

    console.log(a==b);   // returns output in boolean

    var b = 10;
    var b1 = "10";

    console.log(b==b1);   // double equal checks only the content

    console.log(b===b1);  // tripple equal checks the datatype
}

main();