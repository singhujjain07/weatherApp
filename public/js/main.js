const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const temp_real = document.getElementById('temp_real');
const dataHide = document.querySelector(".middle_layer");

const getInfo = async(event)=>{
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal == ""){
        city_name.innerText = 'Please write name before search';
        dataHide.classList.add('data_hide');
    }
    else{
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&APPID=1578fb6e19cc82585ea7f09584ec6a9a&units=metric`
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real.innerText = arrData[0].main.temp;
            const tempMood = arrData[0].weather[0].main;
            


            let currentTime = new Date();
            const time = currentTime.getHours();

            if(tempMood=="Clear"){
                if(time>18 || time<5){
                    temp_status.innerHTML =
                    '<i class="fa-solid fa-moon" style="color:#eccc68"</i>';
                }else{
                    temp_status.innerHTML =
                "<i class='fas fa-sun' style='color:#eccc68'></i>";
                }
                
            }else if(tempMood=="Clouds"){
                if(time>18 || time<5){
                    temp_status.innerHTML =
                    "<i class='fa fa-cloud-moon' style='color:#eccc68'></i>";
                }else{
                    temp_status.innerHTML =
                "<i class='fas fa-cloud' style='color:#f1f2f6'></i>";
                }
                
            }else if(tempMood=="Rain"){
                if(time>18 || time<5){
                    temp_status.innerHTML =
                    "<i class='fa fa-cloud-moon-rain' style='color:#a4b0be'></i>";
                }else{
                    temp_status.innerHTML =
                    "<i class='fas fa-cloud-rain' style='color:#a4b0be'></i>";
                }
                
            }else{
                if(time>18 || time<5){
                    temp_status.innerHTML =
                    "<i class='fa fa-moon' style='color:#a4b0be'></i>";
                }else{
                    temp_status.innerHTML =
                "<i class='fa-solid fa-sun' style='color:#eccc68'></i>";
                }
                
            }
            dataHide.classList.remove('data_hide')
        } catch  {
            city_name.innerText = `Please enter the city name properly`
            dataHide.classList.add('data_hide');
        }
    }
}

submitBtn.addEventListener('click',getInfo);