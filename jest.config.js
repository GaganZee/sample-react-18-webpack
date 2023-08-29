module.exports = {
    testEnvironment: "jest-environment-jsdom",
    setupFilesAfterEnv: ["./tests/jest.setup.js"],
    testRegex: "((\\.|/*.)(test))\\.[t|j]s?$",
    collectCoverage: false,
    collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}"],
    // it helps clear data associated mock before each test run
    clearMocks: true,
    coverageReporters: ["html", "text", "text-summary", "cobertura"],
};
