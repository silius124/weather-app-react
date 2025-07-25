export default function WeatherInfo({ link, city, temp, submit, loading }) {
  if (loading === true) {
    return (
      <div className="size-10 border-2 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
    );
  } else {
    if (submit === "submit") {
      return (
        <>
          <img src={link} alt="" />
          <h2>Город: {city}</h2>
          <div>Температура: {temp}</div>
        </>
      );
    } else if (submit === "error") {
      return <div className="text-red-500">Такого города не найдено!</div>;
    }
  }
}
