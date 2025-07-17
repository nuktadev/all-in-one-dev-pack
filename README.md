# All In One Developer Pack

A comprehensive VS Code extension pack that automatically installs essential development tools and extensions to boost your productivity. This pack is designed for modern web development workflows, providing everything you need in one installation.

## 🚀 What's Included

This extension pack automatically installs the following carefully curated extensions:

### 🔧 Code Quality & Formatting

- **[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)** - Opinionated code formatter that enforces consistent code style across your entire codebase
- **[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)** - JavaScript and TypeScript linting utility that helps you find and fix problems in your code
- **[Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)** - Spell checking for code and comments, helping you catch typos and spelling errors

### 🏷️ HTML/XML Development

- **[Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)** - Automatically add closing tags when you type in the opening tag
- **[Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)** - Automatically rename paired HTML/XML tags when you rename one of them

### 💬 Enhanced Comments & Documentation

- **[Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)** - Create more human-friendly comments with color-coded categories like TODO, FIXME, WARNING, etc.

### ⚛️ React Development

- **[ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)** - Essential snippets for React, Redux, and React Native development

### 🎨 CSS & Styling

- **[Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)** - Intelligent Tailwind CSS tooling with autocomplete, syntax highlighting, and linting

### 🛠️ Development Tools

- **[Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.liveserver)** - Launch a local development server with live reload capability
- **[Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)** - Autocomplete filenames in your code

### 🔍 Version Control & Git

- **[GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)** - Supercharge Git within VS Code with powerful features like blame annotations, file history, and more

### 📝 Language Support

- **[TypeScript Next](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next)** - Enhanced TypeScript support with the latest features
- **[JSON](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-json)** - JSON language support with validation and formatting

### 📸 Productivity

- **[CodeSnap](https://marketplace.visualstudio.com/items?itemName=adpyke.codesnap)** - Generate beautiful code screenshots for documentation and sharing

## 📦 Installation

### Method 1: VS Code Marketplace

1. Open VS Code
2. Go to Extensions (Ctrl+Shift+X)
3. Search for "All In One Developer Pack"
4. Click Install
5. All extensions will be automatically installed

### Method 2: Command Palette

1. Open VS Code
2. Press Ctrl+Shift+P (Cmd+Shift+P on Mac)
3. Type "Extensions: Install Extensions"
4. Search for "All In One Developer Pack"
5. Click Install

### Method 3: Direct Installation

```bash
code --install-extension NuktaNur.all-in-one-dev-pack
```

## 🎯 Features

- **🚀 One-click installation** of multiple essential extensions
- **🎉 Welcome message** with details of installed extensions
- **⚙️ Automatic configuration** for optimal development experience
- **🎯 Carefully curated** extensions for modern web development
- **🔄 Seamless integration** between all included extensions
- **📈 Productivity boost** with minimal setup required

## 🔧 Usage

### Initial Setup

After installation, you'll see a welcome message with details about all installed extensions. You can also run the command:

```
All In One: Show Welcome Message
```

### Extension Management

All extensions are managed as a pack, but you can:

- Enable/disable individual extensions as needed
- Update extensions through VS Code's extension manager
- Configure each extension's settings independently

### Recommended Settings

For the best experience, consider adding these workspace settings:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "tailwindCSS.includeLanguages": {
    "javascript": "javascript",
    "typescript": "typescript"
  }
}
```

## 📋 Extension Details

| Extension                 | Publisher          | Description                   | Key Features                      |
| ------------------------- | ------------------ | ----------------------------- | --------------------------------- |
| Prettier                  | esbenp             | Code formatter                | Format on save, consistent style  |
| ESLint                    | dbaeumer           | JavaScript/TypeScript linting | Error detection, auto-fix         |
| Code Spell Checker        | streetsidesoftware | Spell checking                | Code and comment spell check      |
| Auto Close Tag            | formulahendry      | Auto-close HTML tags          | Automatic tag completion          |
| Auto Rename Tag           | formulahendry      | Rename paired tags            | Synchronized tag renaming         |
| Better Comments           | aaron-bond         | Enhanced comments             | Color-coded comment categories    |
| ES7+ React Snippets       | dsznajder          | React development snippets    | Quick React component creation    |
| Tailwind CSS IntelliSense | bradlc             | Tailwind CSS support          | Autocomplete, syntax highlighting |
| Live Server               | ritwickdey         | Local development server      | Live reload, local hosting        |
| Path Intellisense         | christian-kohler   | Path auto-completion          | File path suggestions             |
| GitLens                   | eamodio            | Git enhancement               | Blame, history, comparison        |
| TypeScript Next           | ms-vscode          | TypeScript support            | Latest TypeScript features        |
| JSON                      | ms-vscode          | JSON language support         | Validation, formatting            |
| CodeSnap                  | adpyke             | Code screenshots              | Beautiful code images             |

## 🎨 Extension Synergies

### Web Development Workflow

- **React Development**: ES7+ snippets + TypeScript Next + Tailwind CSS IntelliSense
- **Code Quality**: ESLint + Prettier + Code Spell Checker
- **HTML/XML**: Auto Close Tag + Auto Rename Tag
- **Documentation**: Better Comments + CodeSnap

### Git Integration

- **GitLens** provides enhanced Git features that work seamlessly with all other extensions
- **Path Intellisense** helps with file references in Git operations

### Development Server

- **Live Server** works perfectly with all web technologies supported by other extensions

## 🚀 Getting Started

1. **Install the extension pack**
2. **Restart VS Code** (recommended)
3. **Open a project** or create a new one
4. **Start coding** - all extensions will be ready to use!

### Quick Test

Create a new React component to test the setup:

```jsx
// Test the extensions
import React from "react";

const TestComponent = () => {
  return (
    <div className="bg-blue-500 text-white p-4 rounded">
      <h1>Hello from All In One Developer Pack!</h1>
      {/* TODO: Add more features */}
    </div>
  );
};

export default TestComponent;
```

## 🔧 Configuration

### Prettier Configuration

Create a `.prettierrc` file in your project root:

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2
}
```

### ESLint Configuration

Create a `.eslintrc.js` file:

```javascript
module.exports = {
  extends: [
    "eslint:recommended",
    "@typescript-eslint/recommended",
    "plugin:react/recommended",
  ],
  plugins: ["@typescript-eslint", "react"],
  parser: "@typescript-eslint/parser",
};
```

### Tailwind CSS Configuration

Create a `tailwind.config.js` file:

```javascript
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Development Setup

```bash
git clone https://github.com/nuktadev/all-in-one-dev-pack.git
cd all-in-one-dev-pack
npm install
npm run compile
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐛 Issues & Support

### Reporting Issues

If you encounter any issues, please:

1. Check the [existing issues](https://github.com/nuktadev/all-in-one-dev-pack/issues)
2. Create a new issue with:
   - VS Code version
   - Extension version
   - Steps to reproduce
   - Expected vs actual behavior

### Getting Help

- 📖 [Documentation](https://github.com/nuktadev/all-in-one-dev-pack/blob/main/README.md)
- 💬 [Discussions](https://github.com/nuktadev/all-in-one-dev-pack/discussions)
- 🐛 [Issues](https://github.com/nuktadev/all-in-one-dev-pack/issues)

## 🌟 Support the Project

If you find this extension pack helpful, please consider:

- ⭐ **Starring the repository**
- 👍 **Rating the extension** on VS Code Marketplace
- 📢 **Sharing with your colleagues**
- 💖 **Sponsoring the project**

## 🔄 Updates

Stay updated with the latest features and improvements:

- **Automatic updates**: Extensions will update automatically
- **Manual updates**: Check for updates in VS Code Extensions panel
- **Release notes**: See [CHANGELOG.md](CHANGELOG.md) for detailed version history
- **Latest version**: v1.1.0 - Added ESLint, Auto Close Tag, React snippets, GitLens, and comprehensive documentation

---

**Happy Coding!** 🎉

_Built with ❤️ for the developer community_
