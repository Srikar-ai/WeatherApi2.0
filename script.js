let weather = {
    apikey:"f0913be57c510b4a8b61a55736bf8480" ,
    fetchWeather:(city)=>{
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        +city
        +"&units=metric&appid=f0913be57c510b4a8b61a55736bf8480")
        .then((response)=>response.json())
        .then((data)=>DisplayWeather(data));
    },

};
function DisplayWeather(data){
    const name=data.name;
    const icon=data.weather[0].icon;
    const description=data.weather[0].description;
    const temp=data.main.temp;
    const humidity=data.main.humidity;
    const speed=data.wind.speed;
    document.querySelector('.city').innerHTML='Weather in '+name;
    document.querySelector('.temp').innerHTML=temp+'° C';
    document.querySelector('.icon').src='http://openweathermap.org/img/wn/'+icon+'@2x.png';
    document.querySelector('.description').innerHTML=description;
    document.querySelector('.humidity').innerHTML='Humidity: '+humidity +'%';
    document.querySelector('.wind-speed').innerHTML='Wind Speed: '+speed+'km/h';


    
}
document.getElementById('btn').addEventListener('click',()=>{
    const city=document.getElementById('input-box').value;
    weather.fetchWeather(city);
    
});
