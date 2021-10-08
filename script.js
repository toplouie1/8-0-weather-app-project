function start (city,addRecent) {

fetch(`https://wttr.in/${city}?format=j1`)
.then(res => res.json())
.then(data => {
    // created variables 
    let main = document.querySelector(".main");
    let region = data.nearest_area[0].region[0].value;
    let area = data.nearest_area[0].areaName[0].value;
    let feelsLike = data.current_condition[0].FeelsLikeF;
    let country = data.nearest_area[0].country[0].value;

    main.innerHTML = `
    <h2 class = "chosenCity" >${region}</h2>
    <div class = "desc" >Area: ${area}</div>
    <div class = "desc">Region: ${region}</div> 
    <div class = "desc">Country: ${country} </div> 
    <div class = "desc"> Currently: Feels Like ${feelsLike}°F </div>
    `
    let display = document.querySelector(".display");
    //variables
     display.innerHTML = `
    <div class = "display"> 
       <div class = "today">
          <h4>Today</h4>
          <div> Average Temperature: ${data.weather[0].avgtempF}°F</div> 
          <div> Max Temperature: ${data.weather[0].maxtempF}°F</div> 
          <div> Min Temperature: ${data.weather[0].mintempF}°F</div> 
       </div>
       <div class ="tomorrow">
          <h4>Tomorrow</h4>
          <div> Average Temperature: ${data.weather[1].avgtempF}°F</div> 
          <div> Max Temperature: ${data.weather[1].maxtempF}°F</div> 
          <div> Min Temperature: ${data.weather[1].mintempF}°F</div> 
       </div>
       <div class = "dayAfterTomorrow">
          <h4>Day After Tomorrow</h4>
          <div> Average Temperature: ${data.weather[2].avgtempF}°F</div> 
          <div> Max Temperature: ${data.weather[2].maxtempF}°F</div> 
          <div> Min Temperature: ${data.weather[2].mintempF}°F</div> 
        </div> 
    </div>`
    
    // history
    let history = document.querySelector("#ul_history");
    let display_li = document.querySelector("#display_li")
    let new_li = document.createElement("li");

    display_li.textContent = " ";
    new_li.classList.add("new_li");
    new_li.innerHTML = ` <li> <a  class = "anchor" "href="#">${region} </a> <span>- ${feelsLike}°F</span> </li>`
    history.append(new_li);
    let a = document.querySelector("li a.anchor")

    a.addEventListener("click", () => {
     start(city);
})
 })
}

// description
let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let city = document.querySelector("#selected_city").value;
    start(city);
} )

