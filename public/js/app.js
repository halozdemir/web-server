console.log("Client side Javascript file is loaded!");

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

fetch("http://puzzle.mead.io/puzzle").then((res) => {
  res.json().then((data) => {
    console.log(data);
  });
});

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let location = search.value.trim();

  messageOne.innerText = "Forecast is loading...";
  messageTwo.innerText = "";

  fetch(`/weather?address=${location}`).then((res) => {
    res
      .json()
      .then(
        ({
          error,
          address,
          forecast = "Enter a valid adress",
          location = "Enter a valid address",
        }) => {
          if (error) {
            messageOne.innerText = error;
          }
          messageOne.innerText = `${location} at the moment is ${forecast.toLowerCase()} `;
        }
      );
  });

  search.value = "";
  //   console.log(location);
});
