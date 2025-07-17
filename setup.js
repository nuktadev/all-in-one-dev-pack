const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

console.log("🚀 Setting up All In One Developer Pack...");

// Create necessary directories
const directories = ["src", "out", ".vscode", "test/suite"];

directories.forEach((dir) => {
  const fullPath = path.join(__dirname, dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    console.log(`✅ Created directory: ${dir}`);
  }
});

// Create .eslintrc.json
const eslintConfig = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/naming-convention": "warn",
    "@typescript-eslint/semi": "warn",
    curly: "warn",
    eqeqeq: "warn",
    "no-throw-literal": "warn",
    semi: "off",
  },
  ignorePatterns: ["out", "dist", "**/*.d.ts"],
};

fs.writeFileSync(".eslintrc.json", JSON.stringify(eslintConfig, null, 2));
console.log("✅ Created .eslintrc.json");

// Create .gitignore
const gitignore = `out
dist
node_modules
.vscode-test/
*.vsix
.DS_Store
*.log
`;

fs.writeFileSync(".gitignore", gitignore);
console.log("✅ Created .gitignore");

// Create .vscodeignore
const vscodeignore = `.vscode/**
.vscode-test/**
src/**
.gitignore
.yarnrc
vsc-extension-quickstart.md
**/tsconfig.json
**/.eslintrc.json
**/*.map
**/*.ts
**/node_modules/**
**/*.vsix
**/test/**
**/.nyc_output/**
**/coverage/**
**/*.tsbuildinfo
`;

fs.writeFileSync(".vscodeignore", vscodeignore);
console.log("✅ Created .vscodeignore");

// Install dependencies
console.log("📦 Installing dependencies...");
try {
  execSync("npm install", { stdio: "inherit" });
  console.log("✅ Dependencies installed successfully");
} catch (error) {
  console.error("❌ Failed to install dependencies:", error.message);
}

console.log("\n🎉 Setup complete!");
console.log("\nNext steps:");
console.log("1. Update the publisher name in package.json");
console.log("2. Add your icon.png file (128x128px recommended)");
console.log('3. Run "npm run compile" to build the extension');
console.log("4. Press F5 to test the extension in a new VS Code window");
console.log('5. Run "npm run package" to create a .vsix file for publishing');
