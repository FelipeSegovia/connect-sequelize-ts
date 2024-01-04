module.exports = {
  coverageReporters: ['clover', 'json', 'text', 'lcov', 'cobertura', 'html'],
  reporters: [
    'default',
    [
      'jest-junit',
      { outputDirectory: 'test-results/junit', outputName: 'TEST-RESULTS.xml' },
    ],
  ],
  preset: 'ts-jest',
  testEnvironment: 'node',
};
