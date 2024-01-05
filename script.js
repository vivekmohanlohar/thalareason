var conditionsForSeven = [
  "7",
  "seven",
  "What comes after 6",
  "4 + 3",
  "8 - 1",
  "21 Ã· 3",
  "14 / 2",
  "14 divided by 2",
  "14 divided by two",
  "14 Ã· two",
  "10 - 3",
  "10 minus 3",
  "The number after 6",
  "The next number after 6",
  "3 + 4",
  "8 divided by 1",
  "1 less than 8",
  "The number of days in a week",
  "The number of colors in a rainbow",
  "The number of continents on Earth",
  "One more than 6",
  "2 * 3 + 1",
  "14 Ã· two plus one",
  "10 - 3 + 2",
  "14 minus 7",
  "The atomic number of nitrogen",
  "21 divided by 3",
  "The number after half a dozen",
  "5 + 2",
  "9 - 2",
  "7 * 1",
  "14 Ã· 2",
  "10 + 5 - 8",
  "4 * 2 + 1",
  "9 Ã· 3 + 2",
];

var operatorConditionsForSeven = [
  "5 + 2",
  "9 - 2",
  "7 * 1",
  "14 ÷ 2",
  "10 + 5 - 8",
  "4 * 2 + 1",
  "9 ÷ 3 + 2",
  // Add more operator combinations as needed
];

// Combine the conditions arrays
var allConditionsForSeven = [
  ...conditionsForSeven,
  ...operatorConditionsForSeven,
  // Add more conditions or combinations as needed
];

function checkThalaCondition() {
  var inputWord = document.getElementById('wordInput').value.trim().toLowerCase();
  var thalaContent = document.getElementById('thalaContent');
  var noThalaMessage = document.getElementById('noThalaMessage');
  var emptyBoxMessage = "Kuch toh daal bhai/behen";
  var lavdeMessage = "Le Le Phir";
  var chutiyaMessage = "Chutiya kisko bola ne bahin ke bulle";
  var popupMessage = document.getElementById('popupMessage');

  // Check Lavde and Chutiya conditions first
  if (inputWord === "lavde") {
    popupMessage.innerText = lavdeMessage;
    showPopup('popup');
    return;
  }

  if (inputWord === "chutiya") {
    popupMessage.innerText = chutiyaMessage;
    showPopup('popup');
    return;
  }

  // Continue with Thala conditions
  if (inputWord === "") {
    alert(emptyBoxMessage);
    return;
  }

  if (allConditionsForSeven.includes(inputWord)) {
    thalaContent.classList.remove('hidden');
    noThalaMessage.classList.add('hidden');
    showPopup('combinedPopup');
  } else {
    thalaContent.classList.add('hidden');
    noThalaMessage.classList.remove('hidden');
  }
}

function showPopup(popupId) {
  var popup = document.getElementById(popupId);
  popup.classList.remove('hidden');

  if (popupId === 'combinedPopup') {
    var video = document.getElementById('thalaVideo');
    video.play();
  }
}

function closePopup(popupId) {
  var popup = document.getElementById(popupId);
  popup.classList.add('hidden');

  if (popupId === 'combinedPopup') {
    var video = document.getElementById('thalaVideo');
    video.pause();
    video.currentTime = 0;
  }
}