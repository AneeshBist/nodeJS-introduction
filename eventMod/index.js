/*
 * Event Module
 * NodeJS has built-in module called "Events".
 * you can create-, fire-, listen for- your own events
 * Example 1 - Registering for the event to be fired only one time using once.
 * Example 2 - Create an event instance and register a couple of callbacks
 * Example 3 - Registering for the event with callback parameters
 */

const { ok } = require("assert");
const EventEmitter = require("events");

const event = new EventEmitter();

//define an event
event.on("sayMyName", () => {
  console.log("your name is Jack Daniels");
});

event.on("sayMyName", () => {
  console.log("first name: Jack");
});

event.on("sayMyName", () => {
  console.log("last name: Daniels");
});

//fire an event
event.emit("sayMyName");

event.on("checkpage", (sc, msg) => {
  console.log(`Status code is ${sc} and message is : ${msg}`);
});

event.emit("checkpage", 200, "ok");
