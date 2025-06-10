/**
 * Jest configuration file
 */
module.exports = {
  // The root directory that Jest should scan for tests and modules
  rootDir: './',

  // The test environment that will be used for testing
  testEnvironment: 'node',

  // Setup files before the tests are run
  setupFiles: ['./tests/test-setup.js'],

  // A map from regular expressions to module names that allow to stub out resources, like images or styles
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1'
  },

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // An array of file extensions your modules use
  moduleFileExtensions: ['js', 'json', 'node'],

  // Indicates whether each individual test should be reported during the run
  verbose: true,

  // Automatically clear mock calls, instances and results before every test
  clearMocks: true
};
