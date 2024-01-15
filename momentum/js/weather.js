

const API_KEY ="13e649d29055d7aa4998165447c1011f"

function onGeoOk (position){
    const lat = position.coords.latitude; // 위도
    const lon = position.coords.longitude; // 경도
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&unit=metric`

    fetch(url)
    .then((respinse) => respinse.json())
    .them((data) => {
        // const weather = document.querySelector("#wearher span:first-child");
        // const city = document.querySelector("#wearher span:last-child");

        // const weather = data.name;
        // const city = data.weather[0].main;
        city.innerText = data.name; 
        weather.innerText = `${data.weather[0].main}/${data.main.temp}`

    }); // 자바스크립트가 api를 부름

 
    // https://api.openweathermap.org/data/2.5/weather?lat=4940135&lon=127.028875&appid=13e649d29055d7aa4998165447c1011f

    console.log(" 당신은 여기에 있군요", lat, lon);
    //37.4940135 127.028875
    // 13e649d29055d7aa4998165447c1011f
    console.lig(url);
    
}

function onGeoError (){
    alert("위치를 받지 못했습니다. 날씨를 알 수 없어요.")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError); 
// 2개의 agment가 필요함 1개는 실행됐을 때, 하나는 오류났을 떄 


