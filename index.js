"use strict";

// Problem Statement
// You're building a neural network to predict whether a person will subscribe to a newsletter based on the following factors:

// Age: The person's age.
// Time Spent on Website: The average time (in minutes) the person spends on the website each day.
// Training Data

const net = new brain.NeuralNetwork({ hiddenLayers: [3] });

const trainingData = [
  { input: [0.16, 0.16], output: [1] },
  { input: [0.25, 0.5], output: [0] },
  { input: [0.8, 0.8], output: [1] },
  { input: [0.49, 0.25], output: [0] },
  { input: [0.16, 0.9], output: [1] },
];

net.train(trainingData, {
  log: (error) => console.log("Error:", error),
  logPeriod: 100,
});

const output = net.run([0.49, 0.3]);

console.log(`will they subscribe ${output[0] > 0.5 ? "yes" : "no"}`);
