import { IoSunny } from "react-icons/io5";
import { WiHumidity, WiStrongWind } from "react-icons/wi";

const WeatherCard = () => {
  return (
    <div className="bg-gradient-to-br from-[#905AD4] to-[#3330A5] w-96 rounded-3xl shadow-xl p-6 text-center">
      {/* Weather Icon and Info */}
      <div className="mb-6">
        <IoSunny className="text-7xl text-yellow-500 mx-auto mb-10" />
        <h1 className="text-white text-6xl font-heebo font-semibold">47°C</h1>
        <p className="text-white text-2xl font-heebo">Kanpur</p>
      </div>

      {/* Weather Details */}
      <div className="flex justify-between">
        {/* Humidity */}
        <div className="flex items-center space-x-3">
          <WiHumidity className="text-5xl text-white" />
          <div>
            <p className="text-white text-lg font-medium">48%</p>
            <p className="text-white text-sm">Humidity</p>
          </div>
        </div>

        {/* Wind Speed */}
        <div className="flex items-center space-x-3">
          <WiStrongWind className="text-5xl text-white" />
          <div>
            <p className="text-white text-lg font-medium">11.02</p>
            <p className="text-white text-sm">Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
