import axios from 'axios';

const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?';
const apiKey = 'a057af28704b2881f4b469f7187020d8';

 export const getWeatherData =  async (cityname) => {
     try{
         const {data} = await axios.get(baseUrl + `q=${cityname}&appid=${apiKey}`);
         return data;
     }catch(error) {
         throw error;
     }
}