const quotesArr = [
  {
    quote:
      "Life is suffering. It is hard. The world is cursed. But still, you find reasons to keep living.",
    movie: "-Princess Mononoke",
  },
  {
    quote:
      "No matter how many weapons you have, no matter how great your technology might be, the world cannot live without love!",
    movie: "-Castle in the Sky",
  },
  {
    quote: "I think I can handle it. I've got a friend helping me.",
    movie: "-Spirited Away",
  },
  {
    quote: "Once you've met someone, you never really forget them.",
    movie: "-Spirited Away",
  },
  {
    quote: "A heart’s a heavy burden.",
    movie: "-Howl’s Moving Castle",
  },
  {
    quote:
      "They say that the best blaze burns brightest when circumstances are at their worst.",
    movie: "-Howl’s Moving Castle",
  },
  {
    quote:
      "It’s not really important what color your dress is. What matters is the heart inside.",
    movie: "-Kiki’s Delivery Service",
  },
  {
    quote: "Sometimes you have to fight for the things you believe in.",
    movie: "-The Secret World of Arrietty",
  },
  {
    quote: "I’m not afraid to die! I’d do anything to get you back!",
    movie: "-Ponyo",
  },
  {
    quote:
      "You cannot change fate. However, you can rise to meet it, if you choose.",
    movie: "-Princess Mononoke",
  },
];

const quote = document.querySelector(".quote span:first-child");
const movie = document.querySelector(".quote span:last-child");
const selectedQuote = quotesArr[Math.floor(Math.random() * quotesArr.length)];
quote.innerText = selectedQuote.quote;
movie.innerText = selectedQuote.movie;
