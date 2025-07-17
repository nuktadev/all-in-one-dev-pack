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
• Prettier - Code formatter
• Code Spell Checker - Spell checking
• CodeSnap - Code screenshots
• Better Comments - Enhanced comments
• Live Server - Local development server
• Path Intellisense - Auto-complete for paths
• TypeScript Next - Enhanced TypeScript support
• Tailwind CSS - Tailwind support
• Auto Rename Tag - Rename paired tags
• JSON - JSON language support

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
    "streetsidesoftware.code-spell-checker",
    "adpyke.codesnap",
    "aaron-bond.better-comments",
    "ritwickdey.liveserver",
    "christian-kohler.path-intellisense",
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
