console.log("What is Async Await in JavaScript");
//async return alwayse promises
async function helloWorld() {
  console.log("Hello World");
}

function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Weather Data");
      resolve(200);
    }, 2000);
  });
}
// Await use just Async Function
async function weather() {
  await api(); //firstly first call compelete
  await api(); // and then second call compelete and so on..
}

function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data", dataId);
      resolve(200);
    }, 2000);
  });
}

// Async Await
async function getAllData() {
  console.log("fetching Data 1...");
  await getData(87);
  console.log("fetching Data 1...");
  await getData(34);
  console.log("fetching Data 1...");
  await getData(78);
  console.log("fetching Data 1...");
  await getData(12);
  console.log("fetching Data 1...");
  await getData(90);
}
