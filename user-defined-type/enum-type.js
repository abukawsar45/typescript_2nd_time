// enum -store constants;
// duplicate value is not allowed here
// enum types: 1. numeric, 2, string, 3. hetergenous;
// numeric enum
var RequestType;
(function (RequestType) {
    RequestType[RequestType["getData"] = 0] = "getData";
    RequestType[RequestType["readData"] = 5] = "readData";
    RequestType[RequestType["DeleteData"] = 6] = "DeleteData";
})(RequestType || (RequestType = {}));
console.log(RequestType);
console.log('line 12', RequestType.getData);
console.log('line 13', RequestType['readData']);
// string enum
var RequestStringType;
(function (RequestStringType) {
    RequestStringType["ReadData"] = "string data";
    RequestStringType["writeData"] = "324";
    RequestStringType["getData"] = "2 pcs";
})(RequestStringType || (RequestStringType = {}));
console.log(RequestStringType);
// hetergenous enum
var RequestHetergenousType;
(function (RequestHetergenousType) {
    RequestHetergenousType["readData"] = "a b c d";
    RequestHetergenousType[RequestHetergenousType["WriteData"] = 234] = "WriteData";
    RequestHetergenousType["getData"] = "dasf";
})(RequestHetergenousType || (RequestHetergenousType = {}));
console.log(RequestHetergenousType);
