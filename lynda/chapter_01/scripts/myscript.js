var Duck = (function () {
    function Duck() {
        this.name = 'Shwetha';
    }
    Duck.prototype.quack = function () {
        console.log('The Duck name is :', this.name);
    };
    return Duck;
}());
