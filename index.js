import {getCookie} from "./utils/cookie.js";
import { fetch_prdcts } from "./utils/httpRequest.js";
import shortenText from "./utils/string.js"

const login = document.getElementById("login");
const dashbrd = document.getElementById("dashbrd");
const products = document.getElementById("products");
const input_search = document.querySelector("input");
const li_ = document.querySelectorAll("li");
let products_ = null;
let inpt_val = null;
let categ = "all";

const show_products = (prd) => {
    products.innerHTML = "";
    prd.forEach(element => {
    const jsx = `
    <div>
    <img alt=${element.title} src=${element.image}>
    <h4>${shortenText(element.title)}</h4>
    <div id="price">
        <p>$ ${element.price}</p>
            <button>
                Buy
                <i class="fa-solid fa-cart-shopping"></i>
            </button>
    </div>
    <div id="rate">
        <i class="fa-solid fa-star"></i>
        <span>${element.rating.rate}</span>
    </div>
    <div id="count">
        <i class="fa-solid fa-user"></i>
        <span>${element.rating.count}</span>
    </div>
</div>    
    `;
    products.innerHTML += jsx;
});
}

const init = async () => {
    const getcookie_index= getCookie();
    if(getcookie_index){
        login.style.display = "none";
    }
    else{
        dashbrd.style.display = "none";
    }

    products_ = await fetch_prdcts("products");
    show_products(products_)
}

const search_filter = () => {
    const showprodct_search = products_.filter(item => {
        if(categ === "all"){
            return item.title.toLowerCase().includes(inpt_val)
        }
        else{
            return item.title.toLowerCase().includes(inpt_val) && item.category.toLowerCase().includes(categ)
        }
    })
    show_products(showprodct_search);
 }
const search_key = () => {
    inpt_val = input_search.value.toLowerCase().trim();
    search_filter();
}

const filterCateg = (e) => {
    categ = e.target.innerText.toLowerCase();
    li_.forEach(item => {
        if(item.innerText.toLowerCase() === categ){
            item.className = "selected"
        }
    else{
        item.className = "";
    }
    })
    
    search_filter();
 }
input_search.addEventListener("keyup" , search_key);
li_.forEach(li_filter => li_filter.addEventListener("click" , filterCateg))
document.addEventListener("DOMContentLoaded" , init)