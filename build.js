const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

console.log("🔨 Building All In One Developer Pack...");

// Function to run command with error handling
function runCommand(command, description) {
  try {
    console.log(`\n${description}...`);
    execSync(command, { stdio: "inherit" });
    console.log(`✅ ${description} completed`);
  } catch (error) {
    console.error(`❌ ${description} failed:`, error.message);
    process.exit(1);
  }
}

// Validate package.json
const packagePath = path.join(__dirname, "package.json");
if (!fs.existsSync(packagePath)) {
  console.error("❌ package.json not found");
  process.exit(1);
}

const packageJson = JSON.parse(fs.readFileSync(packagePath, "utf8"));

// Check if publisher is set
if (packageJson.publisher === "your-publisher-name") {
  console.warn("⚠️  Warning: Please update the publisher name in package.json");
}

// Check if icon exists
const iconPath = path.join(__dirname, "icon.png");
if (!fs.existsSync(iconPath)) {
  console.warn(
    "⚠️  Warning: icon.png not found. Consider adding an icon for your extension."
  );
}

// Build steps
runCommand("npm run lint", "Linting TypeScript files");
runCommand("npm run compile", "Compiling TypeScript");

// Create package
console.log("\n📦 Creating extension package...");
try {
  // Check if vsce is available
  execSync("vsce --version", { stdio: "pipe" });
} catch (error) {
  console.log("Installing vsce globally...");
  execSync("npm install -g vsce", { stdio: "inherit" });
}

runCommand("vsce package", "Creating .vsix package");

// Find the created .vsix file
const vsixFiles = fs
  .readdirSync(__dirname)
  .filter((file) => file.endsWith(".vsix"));
if (vsixFiles.length > 0) {
  console.log(`\n🎉 Extension package created: ${vsixFiles[0]}`);
  console.log("\nTo install locally:");
  console.log(`code --install-extension ${vsixFiles[0]}`);
  console.log("\nTo publish to marketplace:");
  console.log(`vsce publish`);
} else {
  console.error("❌ No .vsix file found");
}

console.log("\n✨ Build completed successfully!");
