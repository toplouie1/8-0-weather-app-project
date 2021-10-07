console.log("its working ");

let form = document.querySelector("#headerForm");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Hey")
    let selectedCity = e.target["selected-city"].value;

} )