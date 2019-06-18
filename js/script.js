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

const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const placeholderEmoji = document.querySelector(".emoji");
const unavailableEmojiOverlay = document.querySelector(".unavailable")
let userInput;
let emojiAvailable = false;

input.addEventListener("keypress", function(key) {
  emojiAvailable = false;
  if (placeholderEmoji.classList.value === "emoji added") {
    placeholderEmoji.classList.remove("added");
    console.log("True");
  }
  
  if (unavailableEmojiOverlay.classList.value === "unavailable unavailable-overlay") {
    unavailableEmojiOverlay.classList.remove("unavailable-overlay");
  }
  
  if (key.keyCode === 13) {
    userInput = input.value.toLowerCase();
    userInput = userInput.split(" ");
    userInput.forEach(function(word) {
      for (const emoji in emojiSearch) {
        if (word === emoji) {
          emojiAvailable = true;
          placeholderEmoji.innerText = "";
          const faceExpression = emojiSearch[emoji];
          placeholderEmoji.append(faceExpression);
          placeholderEmoji.classList.add("added");
        }
      }
    });
    input.value = "";
    if (emojiAvailable === false) {
      console.log("Has not been implemented");
      unavailableEmojiOverlay.classList.add("unavailable-overlay");
    }
  }

});


// No sure if this is the only way to implement the click functionality so the emojis can appear without using the addEventListern method twice??

btn.addEventListener("click", function() {
  emojiAvailable = false;
  if (placeholderEmoji.classList.value === "emoji added") {
    placeholderEmoji.classList.remove("added");
    console.log("True");
  }
  if (unavailableEmojiOverlay.classList.value === "unavailable unavailable-overlay") {
    unavailableEmojiOverlay.classList.remove("unavailable-overlay");
  }
  userInput = input.value.toLowerCase();
  userInput = userInput.split(" ");
  userInput.forEach(function(word) { 
    console.log(word);
    for (const emoji in emojiSearch) {
      if (word === emoji) {
        emojiAvailable = true;
        placeholderEmoji.innerText = "";
        const faceExpression = emojiSearch[emoji];
        placeholderEmoji.append(faceExpression);
        placeholderEmoji.classList.add("added");
      }
    }
  });
  input.value = "";
  if (emojiAvailable === false) {
    console.log("Has not been implemented");
    unavailableEmojiOverlay.classList.add("unavailable-overlay");
  }
});

