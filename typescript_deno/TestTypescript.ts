// Use deno to run the Typescript!
// Very very easy than node.js
// Install deno from deno.land
//     Just copy the single file deno to your home
//     And add the env var in your shell config(such as .bashrc)
// deno run TestTypescript.ts
// Happy!

// Simple HelloWorld like test for ts

function sayHello(person: string)
{
    return "Hello, " + person;
}

let user = "Michel";
console.log(sayHello(user));
console.log();


// Test the var and let

let foo = "Foo";

{
  var bar = "Bar";     // var is global
  let baz = "Bazz";    // let is local
  console.log("{");
  console.log("  " + baz);
  console.log("{");
}
console.log(foo);      // Foo
console.log(bar);      // Bar
// console.log(baz);   // Uncomment and error here
