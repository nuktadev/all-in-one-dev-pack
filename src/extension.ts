import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  console.log("All In One Developer Pack is now active!");

  // Register command to show welcome message
  const disposable = vscode.commands.registerCommand(
    "allInOne.showWelcome",
    () => {
      showWelcomeMessage();
    }
  );

  context.subscriptions.push(disposable);

  // Show welcome message on first activation
  showWelcomeMessage();
}

function showWelcomeMessage() {
  const message = `🎉 Welcome to All In One Developer Pack!

The following extensions have been installed:

🔧 Code Quality & Formatting:
• Prettier - Code formatter
• ESLint - JavaScript/TypeScript linting
• Code Spell Checker - Spell checking

🏷️ HTML/XML Development:
• Auto Close Tag - Auto-close HTML tags
• Auto Rename Tag - Rename paired tags

💬 Enhanced Comments:
• Better Comments - Color-coded comments

⚛️ React Development:
• ES7+ React/Redux/React-Native snippets

🎨 CSS & Styling:
• Tailwind CSS IntelliSense - Tailwind CSS support

🛠️ Development Tools:
• Live Server - Local development server
• Path Intellisense - Path auto-completion

🔍 Version Control:
• GitLens - Enhanced Git features

📝 Language Support:
• TypeScript Next - Enhanced TypeScript support
• JSON - JSON language support

📸 Productivity:
• CodeSnap - Code screenshots

Happy coding! 🚀`;

  vscode.window
    .showInformationMessage(
      "All In One Developer Pack activated!",
      "Show Details"
    )
    .then((selection) => {
      if (selection === "Show Details") {
        vscode.window.showInformationMessage(message, { modal: true });
      }
    });
}

export function deactivate() {
  console.log("All In One Developer Pack is now deactivated!");
}

// Optional: Check if extensions are installed and show status
export function checkExtensionStatus() {
  const requiredExtensions = [
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "streetsidesoftware.code-spell-checker",
    "formulahendry.auto-close-tag",
    "formulahendry.auto-rename-tag",
    "aaron-bond.better-comments",
    "dsznajder.es7-react-js-snippets",
    "bradlc.vscode-tailwindcss",
    "ritwickdey.liveserver",
    "christian-kohler.path-intellisense",
    "eamodio.gitlens",
    "ms-vscode.vscode-typescript-next",
    "ms-vscode.vscode-json",
    "adpyke.codesnap",
  ];

  const installedExtensions = vscode.extensions.all.map((ext) => ext.id);
  const missingExtensions = requiredExtensions.filter(
    (ext) => !installedExtensions.includes(ext)
  );

  if (missingExtensions.length > 0) {
    vscode.window.showWarningMessage(
      `Some extensions are missing: ${missingExtensions.join(", ")}`
    );
  }
}
