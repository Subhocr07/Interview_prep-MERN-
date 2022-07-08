var fruit = 'apple'

{
  var fruit = 'orange'
  console.log(fruit) // orange
}

console.log(fruit) // orange 

//var not follow block scope

var fruit = 'apple'

function gimmeFruit() {
  var fruit = 'orange'
  console.log(fruit) // ??
}

console.log(fruit) // ??
gimmeFruit()

//var follow functional scopes

 

 