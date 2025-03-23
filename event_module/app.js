const EventEmitter = require("events");

const emitter = new EventEmitter();

// emitter.on("greet", () => {
//   console.log(`Hello Sankar`);
// });

emitter.on("greet", (name) => {
  console.log(`Hello ${name}`);
});

// emitter.emit("greet");
emitter.emit("greet", "Sankar");
