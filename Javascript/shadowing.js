function showShadow () {
    let a='hello'
    if(true){
        let a='hi'
        console.log(a)//first will print this..we shadowed functional variable by block variable
    }
    console.log(a)//this will print at last
}
showShadow();

//illegal shadowing...var can not be shadowed by let but let can be by var..

function showShadow () {
    var a='hello';
    // let b='bye';
    if(true){
        let a='hi';
        // var b='Subho';
        console.log(a)//first will print this..
    }
    console.log(a)//this will print at last
    // console.log(b);
}
showShadow();
