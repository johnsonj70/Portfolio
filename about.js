new TypeIt("#h1", {
  strings: "About Me",
  speed: 100, 
  afterComplete: function (instance) {
    instance.destroy();
  }
}).go();

// Or!

new TypeIt("#h2", {
  strings: ["My Coding Journey"],
  speed: 100, 
  afterComplete: function (instance) {
    instance.destroy();
  }
}).go();