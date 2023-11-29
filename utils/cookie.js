const setCookie = (item) => {
    document.cookie = `token=${item}; max-age=${24 * 60 * 60};`;
}
const getCookie = ()=>{
    const cookie_loc = document.cookie;
    if(cookie_loc){
        const arry_cook = cookie_loc.split("=");
        return {
            [arry_cook[0]] : arry_cook[1]
        }
    }      
}
export {getCookie , setCookie}