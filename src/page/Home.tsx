import { useState, useEffect } from "react";
import Products from "../components/products/Products";
import type { WeatherData } from "../type/type";

function Home() {
  const city = localStorage.getItem("city");
  const [weather, setWeather] = useState<WeatherData | null>(null);

  const getWeather = async () => {
    if (!city) return;

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e8a90d182a2a736ea73b327d95e720be&units=metric&lang=fa`
      );
      const data: WeatherData = await res.json();

      if (data.cod === "404") {
        console.log(" city is not difind");
      } else {
        setWeather(data);
      }
    } catch (error) {
      console.log(" cant conacted to server", error);
    }
  };

  useEffect(() => {
    getWeather();
  }, [city]);

  return (
    <div className="w-full text-white bg-[#151515] flex justify-center h-auto">
      <div className="w-[70%] h-auto">
        <div className="w-full pt-10 pb-[100px] flex flex-col gap-3 justify-center items-center">
          {weather && (
            <p className="text-2xl font-bold">
              {Math.round(weather.main.temp)}°C
            </p>
          )}
        </div>
        <Products />
      </div>
    </div>
  );
}

export default Home;
