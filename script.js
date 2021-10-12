function start (city,addRecent) {
   // let checking_input = form.selected_city.value;
   if(!city.length){
      city.textContent  =  "";
   }else {
fetch(`https://wttr.in/${city}?format=j1`)
.then(res => res.json())
.then(data => {
    
    // main display
    let main = document.querySelector(".main");
    let region = data.nearest_area[0].region[0].value;
    let area = data.nearest_area[0].areaName[0].value;
    let feelsLike = data.current_condition[0].FeelsLikeF;
    let country = data.nearest_area[0].country[0].value;

    main.innerHTML = `
    <h2 class = "chosenCity" >${city}</h2>
    <div class = "desc" > <b>Area</b> : ${area}</div>
    <div class = "desc"> <b>Region</b> : ${region}</div> 
    <div class = "desc"><b>Country</b>: ${country} </div> 
    <div class = "desc"> <b>Currently</b> : Feels Like ${feelsLike}°F </div>
    `
    let days = document.querySelector(".days");
    //forecast
     days.innerHTML = `
       <div class = "today">
          <h4>Today</h4>
          <div> <b>Average Temperature:</b> ${data.weather[0].avgtempF}°F</div> 
          <div> <b>Max Temperature:</b> ${data.weather[0].maxtempF}°F</div> 
          <div> <b>Min Temperature:</b> ${data.weather[0].mintempF}°F</div> 
       </div>
       <div class ="tomorrow">
          <h4>Tomorrow</h4>
          <div> <b>Average Temperature:</b>  ${data.weather[1].avgtempF}°F</div> 
          <div> <b>Max Temperature:</b>  ${data.weather[1].maxtempF}°F</div> 
          <div> <b>Min Temperature:</b> ${data.weather[1].mintempF}°F</div> 
       </div>
       <div class = "dayAfterTomorrow">
          <h4>Day After Tomorrow</h4>
          <div> <b>Average Temperature:</b>  ${data.weather[2].avgtempF}°F</div> 
          <div> <b>Max Temperature:</b>  ${data.weather[2].maxtempF}°F</div> 
          <div> <b>Min Temperature:</b> ${data.weather[2].mintempF}°F</div> 
        </div> `
    
    // history 
    if(addRecent){
    let history = document.querySelector("#ul_history");
    let display_li = document.querySelector("#display_li")
    let new_li = document.createElement("li");
    
    history.append(new_li);
    display_li.textContent = " ";
    new_li.classList.add("new_li");

    let list_link = document.createElement("li");
    let anchor_link = document.createElement("a");
    let span_link = document.createElement("span");
    new_li.append(list_link);

    anchor_link.textContent = `${city}`
    span_link.textContent = ` - ${feelsLike}°F`
    list_link.append(anchor_link, span_link);

    anchor_link.addEventListener("click", (e) => {
     start(e.target.textContent, false);
     })
     
   }
 })
 .catch(err => {
    console.log(err);
 })
}
}

// using form to add description
let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let city = form.selected_city.value;
    start(city, true);
    document.input-form.reset();
} )




