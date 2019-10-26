import Vue from "vue";
import NewOne from "./components/NewOne.vue";

let app = new Vue({
  el: "#app",
  components: {
    "new-one": NewOne
  },
  data: {
    guessed: false,
    theGuess: [],
    srcImage: "",
    altMessage: "",
    feedback: "",
    randomNumber: "",
    allTries: [],
    limit: 10,
    limit1: 0,
    limit2: 11,
    printTries: true
  },
  mounted: function() {
    this.randomNumber = Math.floor(Math.random() * 10);
  },

  methods: {
    // function to clear the input field
    resetForm: function() {
      this.theGuess = "";
    },

    // function to submit the guesses
    sendGuess: function() {
      this.guessed = true;

      if (typeof this.theGuess != "number") {
        this.feedback = "../enter a valid number";
        this.guessed = false;
        this.printTries = false;
        this.srcImage = "../images/msg-numbers.png";
      } else if (this.theGuess == this.randomNumber) {
        this.feedbackClass = "";
        this.srcImage = "../images/msg-won.png";
        this.altMessage = " gongrats! you won";
      } else if (this.theGuess >= this.limit2) {
        this.feedbackClass = "";
        this.srcImage = "../images/msg-below.png";
        this.altMessage = "no number above 10";
      } else if (this.theGuess <= this.limit1) {
        this.feedbackClass = "";
        this.srcImage = "../images/msg-above.png";
        this.altMessage = "no number below 1";
      } else {
        this.feedbackClass = "error";
        this.srcImage = "../images/msg-try.png";
        this.altMessage = "try again";
      }
    },

    //  function shows  that the player exceeded 10 guesses (disable the input field and hide the previous guesses)
    gameOver: function() {
      this.allTries.push(theGuess.value);
      if (this.allTries.length > this.limit) {
        this.srcImage = "images/msg-new.png";
        this.altMessage = "new game";
        this.disable = false;
        this.printTries = false;
      }
    },

    // function to start new game from scratch with new random number
    restartGame: function() {
      this.disable = true;
      this.theGuess = [];
      this.guess = [];
      this.randomNumber = Math.floor(Math.random() * 10);
      this.srcImage = "";
      this.altMessage = "";
      this.feedback = "";
      this.allTries = [];
    }
  }
});
