const URL="https://jsonplaceholder.typicode.com/users"
// let btn=document.querySelector("#btn");
const getFacts=async () => {
    let response=await fetch(URL);
    // console.log(response);
    let getData=await response.json()
    console.log(getData);
    // para.innertext="getData";
    // console.log(getData);
};
// btn.addEventListener("click",getFacts);
getFacts();




