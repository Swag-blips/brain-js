"use strict";
// Step 1: Initialize the neural network
const net = new brain.NeuralNetwork({ hiddenLayers: [3] });

// Step 2: Define the training data
const trainingData = [
  {
    input: [30, 1], // 30°C on a weekday
    output: [0.4], // 40 pizzas
  },
  {
    input: [30, 0], // 30°C on a weekend
    output: [0.6], // 60 pizzas
  },
  {
    input: [20, 1], // 20°C on a weekday
    output: [0.2], // 20 pizzas
  },
  {
    input: [20, 0], // 20°C on a weekend
    output: [0.3], // 30 pizzas
  },
];

// Step 3: Train the network
net.train(trainingData, {
  log: (error) => console.log("Error:", error),
  logPeriod: 100,
});

// Step 4: Make a prediction
const output = net.run([25, 1]); // Predict for 25°C on a weekday
console.log(`Predicted pizzas sold: ${output[0] * 100}`);
