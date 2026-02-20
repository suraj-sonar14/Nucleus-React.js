// primitive and Non-primitive datatypes


   //Primitive 
  function main()
  {
    var a = 5;
    var b = a;
    b += 1;

    console.log("a = "+a);

    console.log("b = "+b);

    // Non-primitive
    
    var c =[1,2,3,4]
    var c1=c;

    c1.pop();

    console.log(c);

    console.log(c1);
  }

  main();

  