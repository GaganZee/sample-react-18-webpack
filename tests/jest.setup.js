import "jest-styled-components";
import "@testing-library/jest-dom";

// Set up env variables
process.env.API_ENV = "prod";
process.env.PLATFORM = "web";
process.env.ESK_SECRET = "PLtzvROAYFmMfHjOPuvfrEfUc6PQGNVH";
jest.setTimeout(10000);
process.env.APP_VERSION = "1.0.0";
