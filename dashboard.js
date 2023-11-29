import authCookie from "./utils/authuraization.js";
import {fetch_prdcts} from "./utils/httpRequest.js"

const container= document.getElementById("container");
const log_out = document.querySelector("button")

const users_ = (users) => {
    container.innerHTML = "";
    users.forEach(element => {
        const jsx = `
        <div id="card">
    <h3>${element.id}</h3>
    <div>
        <p><i class="fa-solid fa-user"></i>Name : </p>
        <span>${element.name.firstname} ${element.name.lastname}</span>
    </div>
    <div>
        <p><i class="fa-solid fa-paper-clip"></i>User Name : </p>
        <span>${element.username}</span>
    </div>
    <div>
        <p><i class="fa-solid fa-envelope"></i>Email : </p>
        <span>${element.email}</span>
    </div>
     <div>
         <p><i class="fa-solid fa-phone"></i>Phone : </p>
         <span>${element.phone}</span>
     </div>
     <div>
         <p><i class="fa-solid fa-location-dot"></i>Address : </p>
         <span>${element.address.city} - ${element.address.street} - ${element.address.zipcode}</span>
    </div>
        </div>
        `;
        container.innerHTML += jsx;
    });
}

const init = async () => {
const fetch_users = await fetch_prdcts("users");
users_(fetch_users);

authCookie()    
}
const logOut = ()=>{
    document.cookie = "token=; max-age=0";
    location.assign("index.html");
}
log_out.addEventListener("click" , logOut)
document.addEventListener("DOMContentLoaded" , init);