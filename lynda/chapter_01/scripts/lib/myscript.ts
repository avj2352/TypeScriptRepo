/*Welcome to my first Typescript Class*/
class Duck{
  name:String = 'Shwetha';
  quack():void{
    console.log('The Duck name is :',this.name);
  }
}//endclass:Duck
//let todo:String = "Pramod Jingade";
//console.log("This is a simple string: ", todo);

//Features of EcmaScript 6 - 2015. Optional parameters
var container = document.getElementById('container');

// EcmaScript 2015 #1: function has optional parameters
function countdown(initial, final = 0, interval=1){
  var current = initial;
  while(current > initial){
    container.innerHTML = "Inside the while loop" + current;
    current -= interval;
  }//endwhile
}//end:countdown()

// EcmaScript 2015 #2: Template Strings!!
var todo = {
  id: 'Learn Typescript',
  name: 'Pramod Jingade',
  completed: true
}
var displayName = `Todo # ${todo.id}`;

// EcmaScript 2015 #2: Much more robust use of Template Strings using HTML!!
var myDom = `<div todo = "${todo.id}" class="list-group-item">EcmaScript 6 TemplateString is super awesome!</div>`;
var myCurrentDom = document.getElementById('insertHTMLinHere');

//EcmaScript 2015 #3: Using Let and const
var container = document.getElementById('container');
for(var x=0;x<=5;x++){
  // let counter = x; // Allows you to declare and access Variables in THE SAME SCOPE
  const counter = x; // Initialize a variable to a value, like public static final in Java, and never let that value change!!

}//endfor
//console.log(counter);

//EcmaScript 2015 #4: New Forof loop
var myArray = [ 'Pramod', 'Shwetha', 'Shruthi', 'Pratibha','Santosh', 'Ethan' ];
for(var value of myArray){
  console.log(`${value}`);
}//end:forof

//EcmaScript 2015 #5: Using Lambdas.....without Lambdas
var container = document.getElementById('container');
function counter(el){
  this.count = 0;
  el.innerHTML = this.count;
  el.addEventListener('click',function(){
    this.count +=1; // here's where it gets tricky. on clicking, Javascript will throw = NaN
    //Reason is because on clicking the addEventListener's this is now pointing to the DOM
    //In order to resolve this issue, use Lambdas
    el.innerHTML = this.count;
  });//el.addEventListener()
}//endfunction: counter

//EcmaScript 2015 #5: Using Lambdas.....Rewriting the above function using LAMBDAS
var containerLambda = document.getElementById('container');
function counter1(el){
  this.count = 0;
  el.innerHTML = this.count;
  el.addEventListener('click',()=>{ // This is the use of the Lambda expression. This actually return the output of the function.
    this.count +=1;
    el.innerHTML = this.count;
  });//el.addEventListener
}//endfunction:counter1

//EcmaScript 2015 #6: Spread Operators:
var array1 = [1,2,3,4,5];
var array2 = [...array1,6,7,8]; // This is the superb use of spread Operators
var list = [10,9,8,7];
list.push(...array1); //One more use of the spread operator
