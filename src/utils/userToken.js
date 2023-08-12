const getUserToken =  () => {
  //It will return only the auth user token
  const userData = JSON.parse(localStorage.getItem("userDatas"));
  return userData ? userData?.token : null;
};
export default getUserToken;
