let userIdCatch : string | number ;


userIdCatch = 34;
userIdCatch = '34';

const displayUserInfo = (userId: string | number) => {
  console.log(userId);
}

displayUserInfo('34435');
displayUserInfo(34334);