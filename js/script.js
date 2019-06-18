// I would appreciate if someone out there can help me fill up the missing emojis 

const emojiSearch = {
  "sad": "😭",
  "happy": "😄",
  "laughing": "😂",
  "mad": "😡",
  "love": "🥰🥰",
  "angle": "😇",
  "star": "🤩",
  "cool": "😎",
  "nerd": "🤓",
  "depress": "😔",
  "blush": "🤗",
  "surprise": "😱",
  "frustrated": "😤",
  "crying": "😢",
  "exhausted": "😩",
  "detective": "🧐",
  "shock": "😱",
  "vomit": "🤮",
  "nauseous": "🤢",
  "stuffy nose": "🤧",
  "fever": '🤒',
  "poop": "💩",
  "heart": "❤️🧡💛",
  "alien": "👽",
  "dead": "💀",
  "ghost": "👻",
  "dog": "🐶",
  "cat": "🐱",
  "monkey": "🙉🙈🙊",
  "pig": "🐷",
  "cow": "🐮",
  "bee": "🐝",
  "chicken": "🐔",
  "frog": "🐸",
  "koala": "🐨",
  "duck": "🦆",
  "owl": "🦉",
  "bat": "🦇", 
  "panda": "🐼",
  "lion": "🦁",
  "tiger": "🐯",
  "pizza": "🍕",
  "saxophone": "🎷",
  "apple": "🍎 🍏",
  "pear": "🍐",
  "lemon": "🍋",
  "watermelon": "🍉"
}

const body = document.querySelector("section");
const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const headingEmoji = document.querySelector(".emoji");
const unavailableOverlay = document.querySelector(".unavailable")
let userInput;
let emojiAvailable = false;

input.addEventListener("keypress", function(key) {
  emojiAvailable = false;
  if (headingEmoji.classList.value === "emoji added") {
    headingEmoji.classList.remove("added");
    console.log("True");
  }
  
  if (unavailableOverlay.classList.value === "unavailable unavailable-overlay") {
    unavailableOverlay.classList.remove("unavailable-overlay");
  }
  
  if (key.keyCode === 13) {
    userInput = input.value.toLowerCase();
    userInput = userInput.split(" ");
    userInput.forEach(function(word) {
      for (const emoji in emojiSearch) {
        if (word === emoji) {
          emojiAvailable = true;
          headingEmoji.innerText = "";
          const faceExpression = emojiSearch[emoji];
          headingEmoji.append(faceExpression);
          headingEmoji.classList.add("added");
        }
      }
    });
    input.value = "";
    if (emojiAvailable === false) {
      console.log("Has not been implemented");
      unavailableOverlay.classList.add("unavailable-overlay");
    }
  }

});


// No sure if this is the only way to implement the click functionality so the emojis can appear without using the addEventListern method twice??

btn.addEventListener("click", function() {
  emojiAvailable = false;
  if (headingEmoji.classList.value === "emoji added") {
    headingEmoji.classList.remove("added");
    console.log("True");
  }
  if (unavailableOverlay.classList.value === "unavailable unavailable-overlay") {
    unavailableOverlay.classList.remove("unavailable-overlay");
  }
  userInput = input.value.toLowerCase();
  userInput = userInput.split(" ");
  userInput.forEach(function(word) { 
    console.log(word);
    for (const emoji in emojiSearch) {
      if (word === emoji) {
        emojiAvailable = true;
        headingEmoji.innerText = "";
        const faceExpression = emojiSearch[emoji];
        headingEmoji.append(faceExpression);
        headingEmoji.classList.add("added");
      }
    }
  });
  input.value = "";
  if (emojiAvailable === false) {
    console.log("Has not been implemented");
    unavailableOverlay.classList.add("unavailable-overlay");
  }
});

