module.exports = {
    // ...autres configurations Jest
  
    testEnvironment: "jsdom",
  
    transform: {
      "^.+\\.(js|jsx)$": "babel-jest",
      "^.+\\.mjs$": "babel-jest"
    },
  
    // Configuration du transformateur pour les imports ESM
    transformIgnorePatterns: [
      "/node_modules/(?!(axios)/)" // Ajoutez d'autres modules si nécessaire
    ]
  };
  