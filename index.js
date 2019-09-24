"use strict";
//Fetches Dog Image
function getDogImage(breed) {
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson, breed))
    .catch(error => alert("Something went wrong. Try again later."));
}

//Display Images in the DOM
function displayResults(responseJson, breed) {
  console.log(responseJson.message);
  if (
    responseJson.message === "Breed not found (master breed does not exist)"
  ) {
    $(".results").append(`<h2>Breed not found- please try again.</h2>`);
  } else {
    $(".results").append(`<h2>Here is a ${breed}: </h2>
    <img src="${responseJson.message}" class=results-img> `);
  }
}

//Displays value in the console
function watchForm() {
  $("form").submit(event => {
    event.preventDefault();
    const breed = $(".breed-input").val();
    $(".results").empty();
    getDogImage(breed);
  });
}

$(function() {
  console.log("App loaded! Waiting for submit!");
  watchForm();
});
