const storyParts = [
  {
    text: "The little Fox and the Magical Forest.",
    image: "images/start.jpg",
    sound: "sounds/sound1.mp3"
  },
     {
    text: "The Little Fox's Journey to the Stars",
    image: "images/fox.jpg",
    sound: "sounds/sound3.mp3"
  },
  {
    text: "One day, the fox found a sparkling river and decided to explore it.",
    image: "images/challenge.jpg",
    sound: "sounds/sound2.mp3"
  },
     {
    text: "The Fox returning to home.",
    image: "images/thanks.jpg",
    sound: "sounds/sound2.mp3"
  },
  {
    text: "The End. Thanks for joining the adventure!",
    image: "images/victory.jpg",
    sound: "sounds/sound3.mp3"
  },


];

let currentPart = 0;
const storyText = document.getElementById('story-text');
const storyImage = document.getElementById('story-image');
const nextBtn = document.getElementById('next-btn');
const soundEffect = document.getElementById('sound-effect');

function showStoryPart(index) {
  const part = storyParts[index];
  storyText.textContent = part.text;
  storyImage.style.backgroundImage = `url(${part.image})`;
  soundEffect.src = part.sound;
  soundEffect.play();
}

nextBtn.addEventListener('click', () => {
  currentPart++;
  if (currentPart < storyParts.length) {
    showStoryPart(currentPart);
  } else {
    currentPart = 0;
    showStoryPart(currentPart);
  }
});

showStoryPart(currentPart);
