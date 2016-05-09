var Duck = (function () {
    function Duck() {
        this.name = 'Shwetha';
    }
    Duck.prototype.quack = function () {
        console.log('The Duck name is :', this.name);
    };
    return Duck;
}());
var container = document.getElementById('container');
function countdown(initial, final, interval) {
    if (final === void 0) { final = 0; }
    if (interval === void 0) { interval = 1; }
    var current = initial;
    while (current > initial) {
        container.innerHTML = "Inside the while loop" + current;
        current -= interval;
    }
}
var todo = {
    id: 'Learn Typescript',
    name: 'Pramod Jingade',
    completed: true
};
var displayName = "Todo # " + todo.id;
var myDom = "<div todo = \"" + todo.id + "\" class=\"list-group-item\">EcmaScript 6 TemplateString is super awesome!</div>";
var myCurrentDom = document.getElementById('insertHTMLinHere');
var container = document.getElementById('container');
for (var x = 0; x <= 5; x++) {
    var counter_1 = x;
}
var myArray = ['Pramod', 'Shwetha', 'Shruthi', 'Pratibha', 'Santosh', 'Ethan'];
for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
    var value = myArray_1[_i];
    console.log("" + value);
}
var container = document.getElementById('container');
function counter(el) {
    this.count = 0;
    el.innerHTML = this.count;
    el.addEventListener('click', function () {
        this.count += 1;
        el.innerHTML = this.count;
    });
}
var containerLambda = document.getElementById('container');
function counter1(el) {
    var _this = this;
    this.count = 0;
    el.innerHTML = this.count;
    el.addEventListener('click', function () {
        _this.count += 1;
        el.innerHTML = _this.count;
    });
}
var array1 = [1, 2, 3, 4, 5];
var array2 = array1.concat([6, 7, 8]);
var list = [10, 9, 8, 7];
list.push.apply(list, array1);
