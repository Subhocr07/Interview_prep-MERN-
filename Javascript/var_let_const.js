//var vs let vs const
//scope-scope is a certain region of a programm where defined variables exist and can be recognised and beyond that it can not be recognised..
//var is global scope and it can be redeclarable like var a=5;..var a=5;
{
    var a=5;
}
console.log(a)//it will show 5 but ...


//let and const is block scope
const c=7;
{
    let b=6;
    console.log(c);//7
    console.log(b)//6..outside of this block is not available
}
console.log(b)//b is not defined


