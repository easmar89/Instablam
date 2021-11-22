import { useState, useEffect } from "react";

export default function Location() {
  let [location, setLocation] = useState(null);
  let [latitude, setLatitude] = useState(null);
  let [longitude, setLongitude] = useState(null);

  // function getLocation() {
  //   if ("geolocation" in navigator) {
  //   }
  // }

  async function getAddress(lat, long) {
    const response = await fetch(
      `https://api.geoapify.com/v1/geocode/reverse?lat=57.111&lon=14.565&apiKey=4f53d5f3272e4c0baf9abca7eef324f9`
    );
    const data = await response.json();
    let city = data.features[0].properties.city;
    setLocation(city);
    return city;
  }

  useEffect(() => {
    getAddress(50, 60);
  }, []);

  return (
    <div className="info">
      <p className="date">{new Date().toLocaleString()}</p>
      <p className="location">{location}</p>
    </div>
  );
}

// function displayDate() {
//   let now = new Date();
//   let date = `${now.getDate()}-${now.getMonth() + 1}-${now.getFullYear()} `;
//   let time = `${now.getHours()}:${now.getMinutes()}`;

//   return date + time;
// }
