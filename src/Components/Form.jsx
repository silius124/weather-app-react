export default function Form({
  city,
  onChangeCity,
  onClickSubmit,
  onClickReset,
}) {
  return (
    <form
      action={onClickSubmit}
      className="mb-5 mt-5 w-full flex flex-col items-start gap-3 md:flex-row"
    >
      <input
        type="text"
        value={city}
        onChange={(e) => onChangeCity(e.target.value)}
        id="city"
        name="city"
        className="border-2 border-cyan-500 outline-none mr-4 p-2 rounded w-full md:w-7/10 focus:border-cyan-800"
      />
      <div className="w-full flex items-center gap-2 md:w-3/10">
        <button className="bg-cyan-500 rounded w-30 p-2 text-white hover:bg-cyan-800 cursor-pointer duration-200 md:w-5/10 mr-2">
          Поиск
        </button>
        <button
          onClick={onClickReset}
          className="bg-red-500 rounded p-2 text-white w-30 hover:bg-red-800 duration-200 cursor-pointer md:w-5/10"
        >
          Очистить
        </button>
      </div>
    </form>
  );
}
