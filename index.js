
new TypeIt("#h1", {
  strings: "Janice Johnson",
  speed: 100, 
  afterComplete: function (instance) {
    instance.destroy();
  }
}).go();

// Or!

new TypeIt("#h2", {
  strings: ["Junior Frontend Developer | Information Security Consultant"],
  speed: 100, 
  afterComplete: function (instance) {
    instance.destroy();
  }
}).go();