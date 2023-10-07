import { CarProps, FilterProps } from "@types";

export const calculateCarRent = (city_mpg: number, year: number) => {
  // ... (existing code for calculateCarRent)
};

export const updateSearchParams = (type: string, value: string) => {
  // ... (existing code for updateSearchParams)
};

export const deleteSearchParams = (type: string) => {
  // ... (existing code for deleteSearchParams)
};

export async function fetchCars(filters: FilterProps) {
  const { manufacturer, year, model, limit, fuel } = filters;

  // Set the headers directly in the fetch() function
  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    {
      headers: {
        "X-RapidAPI-Key": 'f86620ac1amsh65a05d3bd47c442p1bd33ejsn0a441041bf64',
        "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
      },
    }
  );

  const result = await response.json();
  return result;
}

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  // ... (existing code for generateCarImageUrl)
};

export const getCarModelDetails = () => {
  // Set the headers directly in the fetch() function
  fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'f86620ac1amsh65a05d3bd47c442p1bd33ejsn0a441041bf64',
      'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
    },
  })
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
};
