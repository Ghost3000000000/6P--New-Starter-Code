// Game container
let game = document.querySelector(".game");
// 4 buttons
let buttonShow = document.querySelector(".show");
let buttonDouble = document.querySelector(".double");
let buttonShuffle = document.querySelector(".shuffle");
let buttonFlip = document.querySelector(".flip");
// Array containing image URLs
let cards = [
    "https://cdn.glitch.global/8982814a-aaba-4e34-8249-b5b2f4411481/junior.webp?v=1710435841880",
    "https://cdn.glitch.global/8982814a-aaba-4e34-8249-b5b2f4411481/ivan.jpeg?v=1710435847678", "https://cdn.glitch.global/8982814a-aaba-4e34-8249-b5b2f4411481/ab6761610000e5eb1b85fbf9507041aab224336d.jpeg?v=1710435853550", "https://cdn.glitch.global/f5e1a6d2-16b0-49ef-baab-47bfd87cfb3d/card-13.jpeg?v=1710955058058", "https://cdn.glitch.global/8982814a-aaba-4e34-8249-b5b2f4411481/card-6.webp?v=1710435891904", "https://cdn.glitch.global/8982814a-aaba-4e34-8249-b5b2f4411481/card-7.jpeg?v=1710435900468", "https://cdn.glitch.global/8982814a-aaba-4e34-8249-b5b2f4411481/card-9.webp?v=1710436021397", "https://cdn.glitch.global/f5e1a6d2-16b0-49ef-baab-47bfd87cfb3d/card-11.jpeg?v=1710954687799",
];
// Button to Show Deck
buttonShow.onclick = function() {
    // Log message
    console.log("Showing the deck...");
    // For of loop
    for (let card of cards) {
        game.insertAdjacentHTML("beforeend",
            "<div style='background-image: url(" +
            card +
            ")' class='card'>");
         let audio = document.querySelector(".audio");
    audio.play();
    }
};
 
// Button to Double Deck
buttonDouble.onclick = function() {
    console.log("Deck has " + cards.length + " cards.");
    for (let card of cards) {
        if (cards.length !== 16) {
            cards.push(card);
            game.insertAdjacentHTML("beforeend", "<div style='background-image: url(" + card + ")' class='card'>");
            }
        }
    console.log("Now the deck has " + cards.length + "cards.");
    buttonDouble.style.color = "silver";
 let audio = document.querySelector(".audio");
    audio.play();
};

// Button to Shuffle Cards
 buttonShuffle.onclick = function() {
     shuffle(cards);
     game.innerHTML="";
    console.log("I'm shuffling the crads!");
     let i = 0;
     for (let card of cards ) {
        game.insertAdjacentHTML("beforeend", "<div style='background-image: url(" + card + ")' id='" + i + "' class='card'>");
        i = i + 1;
          let audio = document.querySelector(".audio");
    audio.play();
    }
};

/* ---------------------------------------------------
DON'T CHANGE THE Fisher-Yates SHUFFLE FUNCTION BELOW!
--------------------------------------------------- */
function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;
    // While there are elements to shuffle...
    while (currentIndex > 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex = currentIndex - 1;
        // Swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }
    return array;
}
// Button to Flip All Cards
 buttonFlip.onclick = function() {
    let i = 0;
    for (card of cards) {
        document.getElementById(i).style.backgroundImage = "";
        i = i + 1;
    }
    buttonFlip.style.color = "silver";
      let audio = document.querySelector(".audio");
    audio.play();
};

// Here we need a function for clicking on individual cards.
// (It won't work until we finish writing it.)
 $(document).click(function(event) {
// Get the id property of the clicked thing.
     let clickedId=event.target.id;
console.log(clickedId);
   
}
 );