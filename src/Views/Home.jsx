import { useState } from "react";
import Form from "../Components/Form";
import WeatherInfo from "../Components/WeatherInfo";
import { getWeather } from "../api";
export default function Home() {
  const [city, setCity] = useState("");
  const [info, setInfo] = useState({ temperature: "", iconWeatherLink: "" });
  const [status, setStatus] = useState("");
  function handleChangeCity(value) {
    setCity(value);
    setStatus("");
  }
  function handleClickReset() {
    setCity("");
    setInfo({ temperature: "", iconWeatherLink: "" });
    setStatus("");
  }
  async function handleSubmit() {
    if (!city) return;
    setStatus("loading");
    try {
      const res = await getWeather(city);
      setInfo({
        temperature: Math.round(res.main.temp),
        iconWeatherLink: `http://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`,
      });
      setStatus("submit");
    } catch (e) {
      console.log(e);
      setStatus("failed");
    }
  }
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-7xl mx-5 mt-3 flex flex-col lg:items-center lg:justify-center">
        <h1 className="text-cyan-500 mx-auto text-4xl">Weather App</h1>
        <Form
          city={city}
          onChangeCity={handleChangeCity}
          onClickSubmit={handleSubmit}
          onClickReset={handleClickReset}
        />
        <div className="mb-5 lg:text-3xl lg:flex lg:flex-col lg:items-center">
          <WeatherInfo
            link={info.iconWeatherLink}
            city={city}
            temp={info.temperature}
            status={status}
          />
        </div>
      </div>
    </div>
  );
}
