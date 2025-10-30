import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { Product, WeatherData } from "../../type/type";



function ProductCard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

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
        console.log("city is not defined");
      } else {
        setWeather(data);
      }
    } catch (error) {
      console.log("can't connect to server", error);
    }
  };

  useEffect(() => {
    getWeather();
  }, [city]);

  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:3000/product");
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data: Product[] = await res.json();
      setProducts(data);
      console.log("Fetched products:", data);
    } catch (err) {
      console.error("Failed to fetch products:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-[#e3e3e3]">Loading...</div>;
  }

  if (products.length === 0) {
    return <div className="text-[#e3e3e3]">No products found.</div>;
  }

  let filteredProducts = products;

  if (weather) {
    const temp = weather.main.temp;
    if (temp > 20) {
      filteredProducts = products.filter((p) => p.category === "hot");
    } else {
      filteredProducts = products.filter((p) => p.category === "cold");
    }
  }


  if (!weather) {
    return <div className="text-[#e3e3e3]">loading...</div>;
  }

  if (filteredProducts.length === 0) {
    return <div className="text-[#e3e3e3]">can not finde product</div>;
  }

  return (
    <>
      {filteredProducts.map((item) => (
        <Link
          key={item.id}
          className="max-w-[280px]"
          to={`/products/${item.id}`}
        >
          <div className="py-5 w-[280px] bg-[#202020] transform transition-transform duration-500 hover:scale-105 h-auto text-[#e3e3e3] flex flex-col gap-3 rounded-[10px] overflow-hidden">
            <img
              className="w-full h-[175px] rounded-t-[10px] object-cover px-2"
              src={item.image}
              alt={item.title}
            />
            <div className="px-4 flex flex-col gap-3">
              <span className="text-xl font-bold">{item.title}</span>
              <span className="text-sm text-[#6E6E6E] line-clamp-2">
                {item.deascription}
              </span>
              <div className="w-full flex justify-between items-center">
                <span className="font-bold text-sm">{item.price} $</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}

export default ProductCard;
