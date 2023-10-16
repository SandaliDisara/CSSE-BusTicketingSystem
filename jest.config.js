module.exports = {
    preset: 'react-native',
    setupFiles: ['<rootDir>/node_modules/react-native/jest/setup.js'],
    transformIgnorePatterns: [
      'node_modules/(?!(jest-)?react-native|@react-native|@react-navigation)',
    ],
  };
  