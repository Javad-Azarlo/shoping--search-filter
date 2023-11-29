import { getCookie } from "./cookie.js";
 

const authCookie = () => {
    const cook = getCookie();
    const url_ = location.href;
    if(
        (cook && url_.includes("auth")) ||
        (!cook && url_.includes("dashboard"))
        ){
        location.assign("index.html");
        return false;
    }
}
export default authCookie


