const EventEmitters = require('events')
const emit = new EventEmitters()


emit.on("greet", (name) => {
    console.log('Hello' + " " + name)
})
emit.emit("greet", 'Ali Hassan ')