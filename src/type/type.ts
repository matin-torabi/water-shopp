export interface Product {
  id: string
  image: string
  price: string
  deascription: string
  title: string
  category: string
}

export interface WeatherData {
  main: {
    temp: number;
  };
  cod: number | string;
}