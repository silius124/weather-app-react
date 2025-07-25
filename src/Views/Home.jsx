import { useState } from "react";
import Form from "../Components/Form";
import WeatherInfo from "../Components/WeatherInfo";
export default function Home() {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState("");
  const [temperature, setTemperature] = useState("");
  const [iconWeatherLink, setIconWeatherLink] = useState("");
  const [isSubmit, setIsSubmit] = useState("");
  function handleChangeCity(value) {
    setCity(value);
    setIsSubmit("");
  }
  function handleClickReset() {
    setCity("");
    setTemperature("");
    setIconWeatherLink("");
    setIsSubmit("");
    setLoading("");
  }
  function handleSubmit() {
    if (!city) return;
    setLoading(true);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=55338b0800762709f434f07451c777fe&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        setTemperature(Math.round(data.main.temp));
        setIconWeatherLink(
          `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        );
      })
      .then(() => {
        setLoading(false);
        setIsSubmit("submit");
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
        setIsSubmit("error");
      });
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
            link={iconWeatherLink}
            city={city}
            temp={temperature}
            submit={isSubmit}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
}
