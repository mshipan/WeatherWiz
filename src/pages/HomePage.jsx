import { PiSunHorizon } from "react-icons/pi";
import { WiSunset, WiHumidity, WiStrongWind } from "react-icons/wi";
import { IoSunny } from "react-icons/io5";
import { Link } from "react-router";

const HomePage = () => {
  return (
    <div className="bg-[url('./homeBg.jpg')] bg-cover bg-no-repeat h-svh pt-20 flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center gap-20">
        <div className="flex flex-col gap-6">
          <p
            className="text-3xl md:text-6xl font-heebo font-medium leading-tight text-white"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            WeatherWiz - weather forecasts <br />
            for thousands of locations <br /> around the world
          </p>
          <Link
            to="/locations"
            className="bg-white px-8 py-3 font-serif rounded-full self-start hover:shadow-lg transition-all ease-in-out duration-500 border hover:border-black"
          >
            Click to Search for a place!
          </Link>
        </div>

        <div className="bg-[#0e24b5] rounded-xl">
          <div className="bg-[#182681] text-white flex flex-row justify-between px-2 py-2 rounded-t-xl">
            <h6>Monday</h6>
            <p>6 Oct</p>
          </div>
          <div className="px-4 py-5">
            <h1 className="text-lg text-white">New York</h1>
            <div className="flex flex-row items-center gap-14">
              <h1 className="text-8xl text-white font-semibold">23°C</h1>
              <IoSunny className="text-9xl text-yellow-400 " />
            </div>
            <div className="flex flex-row items-center gap-4">
              <div className="flex flex-row gap-1 items-center text-[#f5f5f5]">
                <PiSunHorizon className="text-3xl" /> <p>08:00 AM</p>
              </div>
              <div className="flex flex-row gap-1 items-center text-[#f5f5f5]">
                <WiSunset className="text-3xl" /> <p>08:00 PM</p>
              </div>
              <div className="flex flex-row gap-1 items-center text-[#f5f5f5]">
                <WiHumidity className="text-3xl" /> <p>51%</p>
              </div>
              <div className="flex flex-row gap-1 items-center text-[#f5f5f5]">
                <WiStrongWind className="text-3xl" /> <p>65 km/h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
