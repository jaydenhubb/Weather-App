const key = "i085Cpge3GUilaK2IBUTRk2mPsKkySNm";

// Function to make api request to get city location details

const getCityDets = async (city) => {
  const baseUrl =
    'http://dataservice.accuweather.com/locations/v1/cities/search';
  const query = `?apikey=${key}&q=${city}`;

  const res = await fetch(baseUrl + query);
  const data = await res.json();

  return data[0];
//   console.log('jerry');
};

// getCityDets('london').then(data => {
//     return getCityWeather(data.Key)
// }).then(data =>{
//     console.log(data);
// }).catch(err => console.log(err))

// Function to get weather condition

const getCityWeather = async (id) => {
  const baseUrl = "http://dataservice.accuweather.com/currentconditions/v1/";
  const query = `${id}?apikey=${key}`;

  const res = await fetch(baseUrl + query);
  const data = await res.json()

  return data[0];
};

