module.exports = {
 
    testEnvironment: "jsdom", // Environnement de test
  
    transform: {
      "^.+\\.(js|jsx)$": "babel-jest",
      "^.+\\.mjs$": "babel-jest" 
    },
  
    // Configuration du transformateur pour les imports ESM
    transformIgnorePatterns: [
      "/node_modules/(?!(axios)/)" 
    ]
  };
  