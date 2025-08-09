export default function WeatherInfo({ link, city, temp, status }) {
  if (status === "loading") {
    return (
      <div className="size-10 border-2 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
    );
  } else {
    if (status === "submit") {
      return (
        <>
          <img src={link} alt="" />
          <h2>Город: {city}</h2>
          <div>Температура: {temp}</div>
        </>
      );
    } else if (status === "error") {
      return <div className="text-red-500">Такого города не найдено!</div>;
    }
  }
}
