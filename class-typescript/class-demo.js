var User = /** @class */ (function () {
    function User(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    User.prototype.displayData = function () {
        console.log("username: ".concat(this.userName, ", age: ").concat(this.age));
    };
    return User;
}());
// class object
// user1 - name: aks, age: 22;
// user1 - name: aks2, age: 23;
var user1 = new User('abu kaw sar', 22);
user1.displayData();
