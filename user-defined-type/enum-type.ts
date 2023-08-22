// enum -store constants;
// duplicate value is not allowed here
// enum types: 1. numeric, 2, string, 3. hetergenous;

// numeric enum
enum RequestType{
  getData,
  readData=5,
  DeleteData, 
}
console.log(RequestType)
console.log('line 12', RequestType.getData)
console.log('line 13', RequestType['readData'])

// string enum
enum RequestStringType {
  ReadData = 'string data',
  writeData = '324',
  getData = '2 pcs'
}

console.log(RequestStringType);

// hetergenous enum
enum RequestHetergenousType{
  readData = 'a b c d',
  WriteData = 234,
  getData = 'dasf'
}

console.log(RequestHetergenousType)