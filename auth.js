import { fetch_login } from "./utils/httpRequest.js";
import { setCookie } from "./utils/cookie.js";
import authCookie from "./utils/authuraization.js";
import validation from './utils/validation.js';

const btn_submit = document.querySelector("button");
const input_ = document.querySelectorAll("input");


const btnSubmit = async (e) => {
    e.preventDefault();
    const inpt_user = input_[0].value;
    const inpt_pass = input_[1].value;

    const validation_ = validation(inpt_user , inpt_pass);
    if(!validation_) return

    const login_api = await fetch_login("auth/login" , {"username" : inpt_user,"password" : inpt_pass});
    console.log(login_api.token)
    setCookie(login_api.token);
    location.assign("index.html")
}
btn_submit.addEventListener("click" , btnSubmit);
document.addEventListener("DOMContentLoaded" , authCookie);

