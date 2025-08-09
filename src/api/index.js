import axios from "axios";

export const getWeather = async (city) => {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=55338b0800762709f434f07451c777fe&units=metric`
    );
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
