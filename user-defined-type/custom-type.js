// let user1: { userName: string; age: number;}
var userss;
userss = [];
var userX;
userX = { userName: 'Abu Kowsear', age: 23 };
userss.push(userX);
var userY;
userY = { userName: 'Abu Kowsear2', age: 22 };
userss.push(userY);
// console.log(userss)
for (var key in userss) {
    // console.log(userss[key]['userName'])
    // console.log(userss)
}
var getRequest;
getRequest = 'GET';
var handleRequestType = function (requestType) {
    console.log(requestType);
};
handleRequestType("GET");
