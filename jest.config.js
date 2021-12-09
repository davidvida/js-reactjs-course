module.exports = {
  "testEnvironment": "jsdom",
  "modulePaths": ["src"],
  "moduleDirectories": ["node_modules"],
  "moduleNameMapper": {
    "Components/(.*)$": '<rootDir>/src/components/$1'
  }
};
