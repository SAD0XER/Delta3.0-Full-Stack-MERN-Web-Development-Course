// Sending Our First API Request.
let url = "https://catfact.ninja/fact";

/*console.log(fetch(url)); //This line will print Promise.
fetch(url) //This function returns Promise in the form of Response.
  .then((res) => {
    console.log(res); //This line will print Response in Promise.
    return res.json();
  })
  .then((data) => {
    console.log(data); //This line will print Data in Response.
    console.log(data.fact);
    return fetch(url);
  })
  .then((res) => {
    return res.json();
  })
  .then((data2) => {
    console.log(data2);
  })

  .catch((err) => {
    console.log("ERROR:", err);
  });

console.log(
  "All this is Asynchronous Code&Methods that's why this line is execute First."
); */

// Our First API Request using 'fetch()' with 'async' and 'await'
/* async function getCatFact() {
  try {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.fact);

    let res2 = await fetch(url);
    let data2 = await res2.json();
    console.log(data2.fact);
  } catch (error) {
    console.log("ERROR:", error);
  }

  console.log("Code after try-catch.");
}

getCatFact(); //Function calling. */

//AXIOS: Library to make HTTP requests.
/* async function getCatFact() {
  try {
    let res = await axios.get(url);
    console.log(res.data.fact);
  } catch (error) {
    console.log("ERROR:", error);
  }
} */

//Activity: Generate Random Cat Facts on Web Page.
async function getCatFact() {
  try {
    let res = await axios.get(url);
    // return (await axios.get(url)).data.fact; //Directly returning 'fact' data without using extra variables/space.
    console.log(res.data.fact);
    return res.data.fact;
  } catch (error) {
    console.log("ERROR:", error);
  }
}

let catFact = document.querySelector("#catFact");
let p = document.querySelector("#result");

catFact.addEventListener("click", async () => {
  let result = await getCatFact();
  //   p.innerText = result.data.fact;
  p.innerText = result;
});

//Activity: Generate Random Dog Images on Web Page.
let dogAPI = "https://dog.ceo/api/breeds/image/random";

async function getDogImg() {
  try {
    // let res = await axios.get(url);
    return (await axios.get(dogAPI)).data.message; //Returns the URL of Image.
    // return res.data.fact;
  } catch (error) {
    console.log("ERROR:", error);
  }
}

let dogImgBtn = document.querySelector("#dogImgBtn");
let img = document.querySelector("img");

dogImgBtn.addEventListener("click", async () => {
  //   let result = await getDogImg();
  img.setAttribute("src", await getDogImg());
  //   img.setAttribute("src", result);
});

//Sending Headers with API requests.
/* const jokeAPI = "https://icanhazdadjoke.com";

async function getJokes() {
  try {
    const headers = { headers: { Accept: "Application/json" } };
    let res = await axios.get(jokeAPI, headers);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
} */

//Updating Query Strings in URL.
let universityAPI = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("#countruSearch");

btn.addEventListener("click", async () => {
  let contry = document.querySelector("#countryIO").value;
  console.log(contry);

  let clgArr = await getColleges(contry);
  show(clgArr);
});

function show(clgArr) {
  let nameList = document.querySelector("#uniNameList");
  nameList.innerText = null;
  for (college of clgArr) {
    console.log(college.name); //Printing clf names on console.

    /* Appending college names in list. */
    let listItem = document.createElement("li");
    listItem.innerText = college.name;
    nameList.appendChild(listItem);
  }
}

async function getColleges(country) {
  try {
    let res = await axios.get(universityAPI + country);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}
