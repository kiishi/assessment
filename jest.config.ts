module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    coveragePathIgnorePatterns: [
        "node_modules/",
        "logs/.*",
        "dist/.*",
        "pacts/.*",
        "coverage/",
        "src/logger/*",
    ],
    watchPathIgnorePatterns: [
        "node_modules/",
        "logs/",
        "dist/",
        "pacts/",
        "coverage/",
    ],
    testMatch: ["<rootDir>/tests/**/*.spec.ts"],
};
