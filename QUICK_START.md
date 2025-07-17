# Quick Start Guide - All In One Developer Pack

Get up and running with the All In One Developer Pack in minutes!

## 🚀 Installation

### Step 1: Install the Extension Pack

1. Open VS Code
2. Press `Ctrl+Shift+X` (or `Cmd+Shift+X` on Mac)
3. Search for "All In One Developer Pack"
4. Click **Install**

### Step 2: Restart VS Code

After installation, restart VS Code to ensure all extensions are properly loaded.

### Step 3: Verify Installation

You should see a welcome message. If not, run the command:

- Press `Ctrl+Shift+P`
- Type "All In One: Show Welcome Message"
- Press Enter

## ⚡ Quick Setup

### 1. Enable Format on Save

Add this to your VS Code settings (`Ctrl+,`):

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

### 2. Create Project Configuration Files

#### Prettier Configuration (`.prettierrc`)

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2
}
```

#### ESLint Configuration (`.eslintrc.js`)

```javascript
module.exports = {
  extends: ["eslint:recommended", "@typescript-eslint/recommended"],
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
};
```

#### Tailwind CSS Configuration (`tailwind.config.js`)

```javascript
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

## 🎯 Test Your Setup

### Create a Test React Component

Create a new file `TestComponent.jsx`:

```jsx
import React from "react";

const TestComponent = () => {
  // TODO: Add more features
  return (
    <div className="bg-blue-500 text-white p-4 rounded">
      <h1>Hello from All In One Developer Pack!</h1>
      <p>This component tests all extensions</p>
    </div>
  );
};

export default TestComponent;
```

### Test the Extensions

1. **ES7+ Snippets**: Type `rfc` and press Tab
2. **Tailwind CSS**: Type `bg-` and see autocomplete
3. **Auto Close Tag**: Type `<div>` and see auto-closing
4. **Better Comments**: Type `// TODO:` and see color coding
5. **Live Server**: Right-click on an HTML file → "Open with Live Server"

## 🔧 Essential Commands

| Command         | Shortcut                              | Description                   |
| --------------- | ------------------------------------- | ----------------------------- |
| Format Document | `Shift+Alt+F`                         | Format current file           |
| Command Palette | `Ctrl+Shift+P`                        | Access all commands           |
| Extensions      | `Ctrl+Shift+X`                        | Manage extensions             |
| Git Panel       | `Ctrl+Shift+G`                        | Git operations (with GitLens) |
| Live Server     | Right-click → "Open with Live Server" | Start development server      |

## 🎨 Popular Snippets

### React Snippets

- `rfc` → React Functional Component
- `rcc` → React Class Component
- `rsc` → React Stateless Component
- `clg` → console.log
- `imp` → import statement

### JavaScript Snippets

- `clg` → console.log
- `imp` → import
- `exp` → export
- `anfn` → arrow function
- `nfn` → named function

## 🚀 Daily Workflow

### 1. Start a New Project

```bash
# Create a new React project
npx create-react-app my-app
cd my-app

# Install Tailwind CSS
npm install -D tailwindcss
npx tailwindcss init
```

### 2. Configure Your Project

- Add the configuration files mentioned above
- Install ESLint: `npm install -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin`

### 3. Start Coding

- Use snippets for quick component creation
- Let Prettier format your code automatically
- Use Tailwind CSS classes for styling
- Use Better Comments for documentation

### 4. Development

- Use Live Server for real-time preview
- Check Git history with GitLens
- Use Path Intellisense for imports
- Take code screenshots with CodeSnap

## 🔍 Troubleshooting

### Extensions Not Working?

1. **Restart VS Code** after installation
2. **Check if extensions are enabled** in Extensions panel
3. **Verify configuration files** are in project root
4. **Check VS Code settings** for conflicts

### Common Issues

#### Prettier Not Formatting

- Ensure Prettier is set as default formatter
- Check for `.prettierrc` configuration
- Verify file type is supported

#### ESLint Not Working

- Install ESLint in your project: `npm install -D eslint`
- Create `.eslintrc.js` configuration
- Check if ESLint extension is enabled

#### Tailwind CSS Not Autocompleting

- Install Tailwind CSS: `npm install -D tailwindcss`
- Create `tailwind.config.js`
- Ensure file has correct extension (`.js`, `.jsx`, `.ts`, `.tsx`)

#### Live Server Not Starting

- Ensure you have an HTML file in your project
- Check if port 5500 is available
- Try different port in Live Server settings

## 📚 Next Steps

1. **Read the full documentation**: [README.md](README.md)
2. **Explore extension details**: [EXTENSIONS.md](EXTENSIONS.md)
3. **Customize your setup**: Modify VS Code settings
4. **Join the community**: Report issues or contribute

## 🆘 Need Help?

- 📖 [Full Documentation](README.md)
- 🔧 [Extension Details](EXTENSIONS.md)
- 🐛 [Report Issues](https://github.com/nuktadev/all-in-one-dev-pack/issues)
- 💬 [Discussions](https://github.com/nuktadev/all-in-one-dev-pack/discussions)

---

**Happy Coding!** 🎉

_This quick start guide is part of the All In One Developer Pack._
