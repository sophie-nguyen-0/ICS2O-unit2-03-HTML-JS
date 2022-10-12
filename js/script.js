// Created by: sophie
// Created on: oct 2020
// This file contains the JS functions for index.html

/**
 * This function gets users first name and age and shows it back to user.
 */
function myButtonClicked() {
  // input
  const firstName = document.getElementById("street-name").value
  const userAge = parseInt(document.getElementById("number-entered").value)

  // output
  document.getElementById("address").innerHTML =
    "Your info is: " + firstName + ", age " + userAge + "."
}