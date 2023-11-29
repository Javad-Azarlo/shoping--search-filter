const user_valid = (user) => {
 const regex = /^[a-zA-Z\d_]{4,16}$/;
 const resualt = regex.test(user);
 return resualt;
}
const pass_valid = (pass) => {
  const regex = /^.{4,20}$/;
  const resualt = regex.test(pass);
  return resualt;
}
const validation = (username , password) => {
    const user_name = user_valid(username);
    const pass_word = pass_valid(password);
    if(user_name && pass_word){
        return true;
    }
    else if(!user_name){
        alert("user is not valid")
    }
    else if(!pass_word){
        alert("password is not valid")
    }
}

export default validation;