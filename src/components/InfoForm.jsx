import { useEffect, useState } from "react";

import axios from "axios";

export const InfoForm = ({ setData }) => {
  const [info, setInfo] = useState({
    name: "",
    country: "",
  });

  const [reload, setReload] = useState(false);

  const [countryList, setCountryList] = useState([]);

  const onPost = (e) => {
    e.preventDefault();

    if (!info.name || !info.country) {
      alert("Please fill out all fields");
      return;
    }

    axios.post(
      "http://ec2-3-145-124-35.us-east-2.compute.amazonaws.com/create",
      {
        id: Math.floor(Math.random() * 1000),
        name: info.name,
        country: info.country,
      }
    );
    setReload(true);
  };

  useEffect(() => {
    const fetchCountries = async () => {
      if (reload) setReload(false);

      await axios
        .get("http://ec2-3-145-124-35.us-east-2.compute.amazonaws.com/list")
        .then(({ data }) => {
          setData(data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

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

    fetchCountries();
  }, [reload]);

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
            <option value="">Select a country</option>
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
        className="w-full py-2 bg-emerald-500 rounded-md text-white font-semibold transition-colors duration-300 hover:bg-emerald-600"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};
