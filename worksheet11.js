//Worksheet 11: Promises & Async/Await


function hacked() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("System Hacked!");
    }, 2000);
  });
}
async function give() {
  let result = await hacked();
  console.log(result);
}
give();


//output after 2 seconds:
// System Hacked!



