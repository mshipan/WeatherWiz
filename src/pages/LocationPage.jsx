import WeatherCard from "../components/WeatherCard";

const LocationPage = () => {
  return (
    <div className="bg-[url('./locationBg.jpg')] bg-cover bg-no-repeat py-20 flex flex-col items-center">
      <div className="mt-20 p-20 bg-white/20 backdrop-blur-sm">
        <form>
          <input
            type="text"
            placeholder="Search Your Location"
            className="w-96 p-2  outline-none"
          />
          <button type="submit" className="p-2 bg-yellow-500">
            Search
          </button>
        </form>
      </div>
      <div className="mt-10 grid grid-cols-3 gap-5">
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
      </div>
    </div>
  );
};

export default LocationPage;
