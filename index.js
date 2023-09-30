


const apiKey ='7743be475f12eb7647a07a616884704d';
const apiUrl='https://api.openweathermap.org/data/2.5/weather?units=metric&q=' ;

const searchBox = document.querySelector('#input');
const searchBtn = document.querySelector('#button');
const weatherIcon = document.querySelector('#weather-icon');
const weatherInformation = document.querySelector('#weather-information')
const error =document.querySelector("#error-message");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    
    if(response.status=404){
        error.style.display='block';
        weatherInformation.style.display='none';
    }


    document.querySelector('#temp').innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector('#city').innerHTML=data.name;
    document.querySelector('#humidity').innerHTML=data.main.humidity+'%';
    document.querySelector('#wind').innerHTML=data.wind.speed+' km/h';
    

    if(data.weather[0].main =='Clear')
        {
            weatherIcon.src='./images/clear.png';
        }
    else if (data.weather[0].main =='Clouds')
        {
            weatherIcon.src='./images/clouds.png';
        }
    else if (data.weather[0].main =='Drizzle')
        {
            weatherIcon.src='./images/drizzle.png';
        }
    
    else if (data.weather[0].main =='Mist')
        {
            weatherIcon.src='./images/mist.png';
        }
     else if (data.weather[0].main =='Rain')
        {
            weatherIcon.src='./images/rain.png';
        }
    else 
        {
            weatherIcon.src='./images/snow.png';
        }
        error.style.display='none';
        weatherInformation.style.display='block';
    
}



searchBtn.addEventListener('click',()=>{
    checkWeather(searchBox.value)
})

