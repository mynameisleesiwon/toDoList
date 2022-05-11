const API_KEY = "658d847ef1d28e72e047ab0c5a476d54";

function onGeoOk(position){
    // latitude : 위도
    const lat = position.coords.latitude;
    // longitude : 경도
    const lon = position.coords.longitude;
    // 끝에 &units=metric : 화씨를 섭씨로 바꿔줌
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    // url안의 값 가져오기
    fetch(url).then((response) => response.json()).then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = "🏢"+data.name;
        weather.innerText = `${data.weather[0].main} / ${Math.trunc(data.main.temp)}도`;
    });
}

function onGeoError(){
    alert("Can't find you. No weather for you.")
}

// 브라우저에 유저의 위치 좌표 줌
// getCurrentPostion(모든게 잘됐을때 실행될 함수, 에러가 발생했을 때 실행 될 함수);
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);