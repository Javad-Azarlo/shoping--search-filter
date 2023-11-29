const BASE_URL = "https://fakestoreapi.com"
const fetch_login = async (url , data) => {
    try{
        const response = await fetch(`${BASE_URL}/${url}`, {
            method : "POST",
            headers: {"Content-type": "application/json;charset=UTF-8"},
            body:JSON.stringify(data),
         });
        const res = await response.json();
        return res;
    }
    catch(error){
        alert("an error login")
    }
}

const fetch_prdcts = async (url) => {
    const response = await fetch(`${BASE_URL}/${url}`);
    const resualt = await response.json();
    return resualt;
}

export {fetch_prdcts , fetch_login}
