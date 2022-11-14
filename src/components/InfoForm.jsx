import { useEffect, useState } from "react";

export const InfoForm = () => {
  const [info, setInfo] = useState({
    name: "",
    country: "",
  });

  const [countryList, setCountryList] = useState([]);

  const onPost = (e) => {
    e.preventDefault();
    console.log(info);
  };

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCountryList(data);
      })
      .catch(() => {
        console.log("error, fetch");
      });
  }, []);

  return (
    <form
      className="shadow-sm w-80 md:w-96 px-4 py-6 md:py-8 lg:py-6 bg-white rounded-lg"
      onSubmit={onPost}
    >
      <h1 className="text-2xl font-bold text-center">Add your info</h1>
      <div className="my-4">
        <div>
          <label
            htmlFor="name"
            className="block text-md font-medium text-neutral-700"
          >
            Name
          </label>
          <input
            type="text"
            placeholder="Nancy Pentz"
            required
            onChange={(e) => setInfo({ ...info, name: e.target.value })}
            className="mt-1 block placeholder:opacity-40 px-2 py-1 w-full border-[1.25px] border-gray-200 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="mt-2">
          <label
            htmlFor="country"
            className="block text-md font-medium text-neutral-700"
          >
            Country
          </label>
          <select
            required
            className="mt-1 block px-2 py-1 w-full border-[1.25px] border-gray-200 rounded-md shadow-sm"
            onChange={(e) => setInfo({ ...info, country: e.target.value })}
          >
            {countryList.map(({ name }) => {
              return (
                <option key={name} value={name}>
                  {name}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      <button
        className="w-full py-2 bg-emerald-500 rounded-md text-white font-semibold"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};
