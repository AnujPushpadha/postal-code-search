// export function fetchAPI(postalCode) {
//   console.log(postalCode);
//   return new Promise(async (resolve) => {
//     // const response = await fetch("https://api.zippopotam.us/in/400093");
//     const response = await fetch(`https://api.zippopotam.us/in/${postalCode}`);
//     const data = await response.json();
//     resolve({ data });
//   });
// }
export function fetchAPI(postalCode) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(
        `https://api.zippopotam.us/in/${postalCode}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      resolve({ data });
    } catch (error) {
      // Handle the error and reject the promise
      reject(error.message || "An error occurred while fetching data.");
    }
  });
}
